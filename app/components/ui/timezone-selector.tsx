"use client"

import { useState, useEffect } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'

export function TimezoneSelector() {
  const [selectedTimezone, setSelectedTimezone] = useLocalStorage<string>('user-timezone', '')
  const [systemTimezone, setSystemTimezone] = useState('')

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    setSystemTimezone(timezone)
    if (!selectedTimezone) {
      setSelectedTimezone(timezone)
    }
  }, [])

  const commonTimezones = [
    'America/New_York',
    'America/Los_Angeles',
    'America/Chicago',
    'America/Toronto',
    'Europe/London',
    'Europe/Paris',
    'Europe/Berlin',
    'Asia/Tokyo',
    'Asia/Singapore',
    'Australia/Sydney'
  ]

  const formatTimezone = (tz: string) => {
    return tz.replace('_', ' ').split('/').pop() || tz
  }

  return (
    <select
      value={selectedTimezone}
      onChange={(e) => setSelectedTimezone(e.target.value)}
      className="h-9 w-[130px] appearance-none rounded-md border border-border bg-background px-3 py-1 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors cursor-pointer"
      aria-label="Select timezone"
    >
      <option value={systemTimezone}>{formatTimezone(systemTimezone)} (System)</option>
      {commonTimezones
        .filter(tz => tz !== systemTimezone)
        .map(tz => (
          <option key={tz} value={tz}>
            {formatTimezone(tz)}
          </option>
        ))}
    </select>
  )
}