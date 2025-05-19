import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import styles from './styles.module.css';

interface ProjectPhase {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  status: "upcoming" | "active" | "completed";
  color: string;
}

interface KanbanSlot {
  id: number;
  name: string;
  status: "occupied" | "available";
  currentPhase?: ProjectPhase;
  upcomingPhases: ProjectPhase[];
  completedPhases: ProjectPhase[];
}

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
];

function formatDateRange(start: Date, end: Date) {
  return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
}

export function AvailabilityKanban() {
  const [selectedPhase, setSelectedPhase] = useState<ProjectPhase | null>(null);
  return (
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
              <Button size="sm">Book Now</Button>
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
    </div>
  );
} 