import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export type ProjectSlot = {
  id: number;
  name: string;
  status: "occupied" | "available";
  phases: {
    name: string;
    weeks: number[];
    color: string;
  }[];
};

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
];

export function AvailabilityTimeline() {
  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Project Slots Timeline</h3>
      <ul>
        {PROJECT_SLOTS.map((slot) => (
          <li key={slot.id} className="mb-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">{slot.name}</span>
              <Badge variant={slot.status === "available" ? "default" : "secondary"}>{slot.status}</Badge>
            </div>
            <div className="flex gap-2 mt-2">
              {slot.phases.map((phase, i) => (
                <div key={i} className={`px-2 py-1 rounded ${phase.color} text-xs`}>{phase.name}</div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 