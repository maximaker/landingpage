import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";

// Types
export type AvailabilityStatus = "high" | "medium" | "low" | "none";
export type CalendarDate = Date | undefined;

export interface AvailabilityData {
  date: Date;
  status: AvailabilityStatus;
  slots: number;
}

export function AvailabilityCalendar() {
  const [selectedDate, setSelectedDate] = useState<CalendarDate>(new Date());
  const [availabilityData, setAvailabilityData] = useState<AvailabilityData[]>([]);

  useEffect(() => {
    const generateAvailabilityData = () => {
      const data: AvailabilityData[] = [];
      const today = new Date();
      for (let i = 0; i < 90; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const slots = isWeekend ? 0 : Math.floor(Math.random() * 4);
        let status: AvailabilityStatus = "none";
        if (slots > 2) status = "high";
        else if (slots > 1) status = "medium";
        else if (slots > 0) status = "low";
        data.push({ date, status, slots });
      }
      setAvailabilityData(data);
    };
    generateAvailabilityData();
  }, []);

  // Render a simple calendar and availability info (expand as needed)
  return (
    <div>
      <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Availability</h3>
        <ul>
          {availabilityData.slice(0, 7).map((item, i) => (
            <li key={i} className="flex items-center gap-2 mb-1">
              <span>{item.date.toDateString()}</span>
              <Badge variant="secondary">{item.status}</Badge>
              <span>Slots: {item.slots}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 