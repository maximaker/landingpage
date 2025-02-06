"use client"

import { useLocalStorage } from '@/hooks/use-local-storage'

type Currency = {
  code: string
  symbol: string
  name: string
}

const currencies: Currency[] = [
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'USD', symbol: '$', name: 'US Dollar' }
]

export function CurrencySelector() {
  const [selectedCurrency, setSelectedCurrency] = useLocalStorage<string>('user-currency', 'EUR')

  return (
    <select
      value={selectedCurrency}
      onChange={(e) => setSelectedCurrency(e.target.value)}
      className="h-9 w-[130px] appearance-none rounded-md border border-border bg-background px-3 py-1 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors cursor-pointer"
      aria-label="Select currency"
    >
      {currencies.map(({ code, symbol, name }) => (
        <option key={code} value={code}>
          {symbol} {code} - {name}
        </option>
      ))}
    </select>
  )
}