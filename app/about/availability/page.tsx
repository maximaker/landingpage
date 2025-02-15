"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, Users, Calendar as CalendarIcon, BarChart, Columns, ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"
import styles from './styles.module.css'

// Types for both views
type AvailabilityStatus = "high" | "medium" | "low" | "none"
type CalendarDate = Date | undefined

interface AvailabilityData {
  date: Date
  status: AvailabilityStatus
  slots: number
}

type ProjectSlot = {
  id: number
  name: string
  status: "occupied" | "available"
  phases: {
    name: string
    weeks: number[]
    color: string
  }[]
}

interface ProjectPhase {
  id: string
  name: string
  startDate: Date
  endDate: Date
  status: "upcoming" | "active" | "completed"
  color: string
}

interface KanbanSlot {
  id: number
  name: string
  status: "occupied" | "available"
  currentPhase?: ProjectPhase
  upcomingPhases: ProjectPhase[]
  completedPhases: ProjectPhase[]
}

// Constants
const WEEKS_TO_SHOW = 12 // Showing 3 months
const MONTHS_TO_SHOW = 3

const PROJECT_SLOTS: ProjectSlot[] = [
  {
    id: 1,
    name: "Project Slot 1",
    status: "occupied",
    phases: [
      {
        name: "Project Definition",
        weeks: [1, 2, 3],
        color: "bg-blue-500/20 border-blue-500/30"
      },
      {
        name: "Development",
        weeks: [4, 5, 6, 7, 8],
        color: "bg-orange-500/20 border-orange-500/30"
      }
    ]
  },
  {
    id: 2,
    name: "Project Slot 2",
    status: "occupied",
    phases: [
      {
        name: "Planning",
        weeks: [3, 4, 5],
        color: "bg-purple-500/20 border-purple-500/30"
      },
      {
        name: "Implementation",
        weeks: [6, 7, 8, 9, 10],
        color: "bg-amber-500/20 border-amber-500/30"
      }
    ]
  },
  {
    id: 3,
    name: "Project Slot 3",
    status: "available",
    phases: [
      {
        name: "Available",
        weeks: [5, 6, 7, 8, 9, 10, 11, 12],
        color: "bg-green-500/20 border-green-500/30"
      }
    ]
  }
]

const KANBAN_SLOTS: KanbanSlot[] = [
  {
    id: 1,
    name: "Enterprise Project Slot",
    status: "occupied",
    currentPhase: {
      id: "phase-1",
      name: "Development Sprint",
      startDate: new Date(2024, 2, 1),
      endDate: new Date(2024, 2, 15),
      status: "active",
      color: "bg-blue-500"
    },
    upcomingPhases: [
      {
        id: "phase-2",
        name: "Testing & QA",
        startDate: new Date(2024, 2, 16),
        endDate: new Date(2024, 2, 30),
        status: "upcoming",
        color: "bg-purple-500"
      }
    ],
    completedPhases: [
      {
        id: "phase-0",
        name: "Planning",
        startDate: new Date(2024, 1, 15),
        endDate: new Date(2024, 1, 28),
        status: "completed",
        color: "bg-green-500"
      }
    ]
  },
  {
    id: 2,
    name: "Growth Project Slot",
    status: "occupied",
    currentPhase: {
      id: "phase-3",
      name: "UX Research",
      startDate: new Date(2024, 2, 1),
      endDate: new Date(2024, 2, 20),
      status: "active",
      color: "bg-amber-500"
    },
    upcomingPhases: [
      {
        id: "phase-4",
        name: "Design Sprint",
        startDate: new Date(2024, 2, 21),
        endDate: new Date(2024, 3, 5),
        status: "upcoming",
        color: "bg-indigo-500"
      }
    ],
    completedPhases: []
  },
  {
    id: 3,
    name: "Startup Project Slot",
    status: "available",
    upcomingPhases: [],
    completedPhases: [],
  }
]

export default function AvailabilityPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedDate, setSelectedDate] = useState<CalendarDate>(new Date())
  const [availabilityData, setAvailabilityData] = useState<AvailabilityData[]>([])
  const [activeView, setActiveView] = useState("timeline")
  const [selectedPhase, setSelectedPhase] = useState<ProjectPhase | null>(null)

  // Generate sample availability data
  useEffect(() => {
    const generateAvailabilityData = () => {
      const data: AvailabilityData[] = []
      const today = new Date()
      
      for (let i = 0; i < 90; i++) {
        const date = new Date(today)
        date.setDate(today.getDate() + i)
        
        const isWeekend = date.getDay() === 0 || date.getDay() === 6
        const slots = isWeekend ? 0 : Math.floor(Math.random() * 4)
        
        let status: AvailabilityStatus = "none"
        if (slots > 2) status = "high"
        else if (slots > 1) status = "medium"
        else if (slots > 0) status = "low"
        
        data.push({ date, status, slots })
      }
      
      setAvailabilityData(data)
    }
    
    generateAvailabilityData()
    setMounted(true)
  }, [])

  if (!mounted) return null

  const getStatusColor = (status: AvailabilityStatus) => {
    switch (status) {
      case "high": return "bg-green-500"
      case "medium": return "bg-yellow-500"
      case "low": return "bg-orange-500"
      case "none": return "bg-red-500"
    }
  }

  const getStatusText = (status: AvailabilityStatus) => {
    switch (status) {
      case "high": return "High Availability"
      case "medium": return "Medium Availability"
      case "low": return "Limited Availability"
      case "none": return "No Availability"
    }
  }

  const getMonthsArray = () => {
    const months = []
    const now = new Date()
    
    for (let i = 0; i < MONTHS_TO_SHOW; i++) {
      const month = new Date(now)
      month.setMonth(now.getMonth() + i)
      months.push(month)
    }
    
    return months
  }

  const getWeekLabel = (weekNum: number) => {
    const now = new Date()
    const week = new Date(now)
    week.setDate(now.getDate() + (weekNum - 1) * 7)
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(week)
  }

  const selectedDayData = selectedDate 
    ? availabilityData.find(d => d.date.toDateString() === selectedDate.toDateString())
    : null

  const months = getMonthsArray()

  const formatDateRange = (start: Date, end: Date) => {
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
  }

  return (
    <main className="flex-1">
      <div className="container max-w-7xl py-24 sm:py-32">
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Availability Views
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Check Our Availability</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            View our real-time availability and schedule a consultation for your project.
          </p>
        </div>

        <Tabs defaultValue="timeline" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="timeline" className="flex items-center gap-2">
              <BarChart className="w-4 h-4" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              Calendar
            </TabsTrigger>
            <TabsTrigger value="kanban" className="flex items-center gap-2">
              <Columns className="w-4 h-4" />
              Board
            </TabsTrigger>
          </TabsList>

          {/* Timeline View */}
          <TabsContent value="timeline">
            <div className="rounded-xl border bg-card p-6 overflow-x-auto shadow-sm">
              <div className="min-w-[1000px]">
                {/* Months Row */}
                <div className="grid grid-cols-[200px_1fr] mb-2">
                  <div className="text-sm font-medium text-muted-foreground">Timeline</div>
                  <div className="grid grid-cols-12">
                    {months.map((month, index) => (
                      <div
                        key={index}
                        className="col-span-4 text-sm font-medium text-muted-foreground border-l border-border/50 first:border-l-0 pl-2"
                      >
                        {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(month)}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weeks Row */}
                <div className="grid grid-cols-[200px_1fr] mb-6">
                  <div className="text-sm font-medium text-muted-foreground">Week</div>
                  <div className="grid grid-cols-12 gap-1">
                    {Array.from({ length: WEEKS_TO_SHOW }, (_, i) => (
                      <div
                        key={i}
                        className="text-xs text-muted-foreground text-center"
                      >
                        {getWeekLabel(i + 1)}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Slots */}
                <div className="space-y-4">
                  {PROJECT_SLOTS.map((slot) => (
                    <div key={slot.id} className="grid grid-cols-[200px_1fr] items-center group">
                      <div className="flex items-center gap-3">
                        {slot.status === "available" ? (
                          <div className="relative w-3 h-3">
                            <div className="absolute inset-0 rounded-full bg-green-500" />
                            <div className={`absolute inset-0 rounded-full bg-green-500 opacity-40 ${styles.waveAnimation}`} />
                            <div className={`absolute inset-0 rounded-full bg-green-500 opacity-25 ${styles.waveAnimationDelay1}`} />
                          </div>
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-orange-500" />
                        )}
                        <span className="text-sm font-medium">{slot.name}</span>
                      </div>
                      <div className="grid grid-cols-12 gap-0.5 relative">
                        {/* Week Cells */}
                        {Array.from({ length: WEEKS_TO_SHOW }, (_, weekIndex) => (
                          <div
                            key={weekIndex}
                            className="h-12 border border-border/30 bg-card"
                          />
                        ))}
                        {/* Project Phases */}
                        {slot.phases.map((phase, phaseIndex) => (
                          <div
                            key={phaseIndex}
                            className={`absolute top-0.5 bottom-0.5 rounded-lg border-[0.5px] ${phase.color} transition-all duration-200 hover:opacity-90 backdrop-blur-[1px] group-hover:shadow-sm`}
                            style={{
                              left: `${((phase.weeks[0] - 1) / WEEKS_TO_SHOW) * 100}%`,
                              width: `${((phase.weeks.length) / WEEKS_TO_SHOW) * 100}%`
                            }}
                          >
                            <div className="px-3 py-1.5 text-xs font-medium truncate">
                              {phase.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Calendar View */}
          <TabsContent value="calendar">
            <div className="grid md:grid-cols-[400px_1fr] gap-8">
              {/* Calendar */}
              <Card className="p-6 bg-card">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md"
                  modifiers={{
                    high: (date: Date) => availabilityData.some(d => 
                      d.date.toDateString() === date.toDateString() && d.status === "high"
                    ),
                    medium: (date: Date) => availabilityData.some(d => 
                      d.date.toDateString() === date.toDateString() && d.status === "medium"
                    ),
                    low: (date: Date) => availabilityData.some(d => 
                      d.date.toDateString() === date.toDateString() && d.status === "low"
                    ),
                    none: (date: Date) => availabilityData.some(d => 
                      d.date.toDateString() === date.toDateString() && d.status === "none"
                    ),
                  }}
                  modifiersStyles={{
                    high: { backgroundColor: "rgb(34 197 94 / 0.1)" },
                    medium: { backgroundColor: "rgb(234 179 8 / 0.1)" },
                    low: { backgroundColor: "rgb(249 115 22 / 0.1)" },
                    none: { backgroundColor: "rgb(239 68 68 / 0.1)" },
                  }}
                />

                {/* Legend */}
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {(["high", "medium", "low", "none"] as AvailabilityStatus[]).map((status) => (
                    <div key={status} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(status)} opacity-70`} />
                      <span className="text-sm text-muted-foreground">{getStatusText(status)}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Selected Day Details */}
              <div className="space-y-6">
                {selectedDayData && (
                  <Card className="p-6 bg-card">
                    <h2 className="text-xl font-semibold mb-6">
                      {selectedDate?.toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </h2>

                    <div className="grid sm:grid-cols-3 gap-6">
                      {/* Availability Status */}
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg ${getStatusColor(selectedDayData.status)} opacity-10 flex items-center justify-center`}>
                          <CalendarDays className={`w-5 h-5 ${getStatusColor(selectedDayData.status)} opacity-70`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Status</p>
                          <p className="text-muted-foreground">{getStatusText(selectedDayData.status)}</p>
                        </div>
                      </div>

                      {/* Available Slots */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Available Slots</p>
                          <p className="text-muted-foreground">{selectedDayData.slots} slots remaining</p>
                        </div>
                      </div>

                      {/* Working Hours */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Working Hours</p>
                          <p className="text-muted-foreground">9:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>

                    {selectedDayData.slots > 0 && (
                      <div className="mt-8">
                        <Button className="w-full sm:w-auto">
                          Schedule Consultation
                        </Button>
                      </div>
                    )}
                  </Card>
                )}

                {/* Additional Information */}
                <Card className="p-6 bg-card/50">
                  <h3 className="text-lg font-semibold mb-4">Looking to start a project?</h3>
                  <p className="text-muted-foreground mb-6">
                    We're currently accepting new projects and would love to discuss how we can help bring your vision to life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/services">View Our Services</Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Kanban Board View */}
          <TabsContent value="kanban">
            <div className="space-y-6">
              {KANBAN_SLOTS.map((slot) => (
                <Card key={slot.id} className="p-6 bg-card">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {slot.status === "available" ? (
                        <div className="relative w-3 h-3">
                          <div className="absolute inset-0 rounded-full bg-green-500" />
                          <div className={`absolute inset-0 rounded-full bg-green-500 opacity-40 ${styles.waveAnimation}`} />
                          <div className={`absolute inset-0 rounded-full bg-green-500 opacity-25 ${styles.waveAnimationDelay1}`} />
                        </div>
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                      )}
                      <h3 className="text-lg font-semibold">{slot.name}</h3>
                    </div>
                    {slot.status === "available" && (
                      <Button size="sm">
                        Book Now
                      </Button>
                    )}
                  </div>

                  {slot.status === "occupied" && (
                    <div className="grid grid-cols-3 gap-4">
                      {/* Completed Phases */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                          <ChevronLeft className="w-4 h-4" />
                          Completed
                        </div>
                        {slot.completedPhases.map((phase) => (
                          <div
                            key={phase.id}
                            className="p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted/80 transition-colors cursor-pointer"
                            onClick={() => setSelectedPhase(phase)}
                          >
                            <div className={`w-2 h-2 rounded-full ${phase.color} mb-2`} />
                            <div className="font-medium mb-1">{phase.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {formatDateRange(phase.startDate, phase.endDate)}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Current Phase */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary">
                          <div className="w-2 h-2 rounded-full animate-pulse bg-primary" />
                          In Progress
                        </div>
                        {slot.currentPhase && (
                          <div
                            className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors cursor-pointer"
                            onClick={() => setSelectedPhase(slot.currentPhase!)}
                          >
                            <div className={`w-2 h-2 rounded-full ${slot.currentPhase.color} mb-2`} />
                            <div className="font-medium mb-1">{slot.currentPhase.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {formatDateRange(slot.currentPhase.startDate, slot.currentPhase.endDate)}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Upcoming Phases */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                          Upcoming
                          <ChevronRight className="w-4 h-4" />
                        </div>
                        {slot.upcomingPhases.map((phase) => (
                          <div
                            key={phase.id}
                            className="p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted/80 transition-colors cursor-pointer"
                            onClick={() => setSelectedPhase(phase)}
                          >
                            <div className={`w-2 h-2 rounded-full ${phase.color} mb-2`} />
                            <div className="font-medium mb-1">{phase.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {formatDateRange(phase.startDate, phase.endDate)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {slot.status === "available" && (
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <CalendarDays className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Next Available</p>
                          <p className="text-muted-foreground">Immediate Start</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Duration</p>
                          <p className="text-muted-foreground">2-3 months</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Team Size</p>
                          <p className="text-muted-foreground">3-4 members</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Phase Details Modal */}
            {selectedPhase && (
              <Card className="fixed inset-x-4 bottom-4 sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2 sm:max-w-lg p-6 bg-card/95 backdrop-blur-sm border shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${selectedPhase.color}`} />
                    <h3 className="text-lg font-semibold">{selectedPhase.name}</h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedPhase(null)}
                  >
                    Close
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium">Timeline</div>
                    <div className="text-muted-foreground">
                      {formatDateRange(selectedPhase.startDate, selectedPhase.endDate)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Status</div>
                    <div className="text-muted-foreground capitalize">{selectedPhase.status}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Description</div>
                    <div className="text-muted-foreground">
                      Detailed phase information and progress tracking would be displayed here.
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
} 