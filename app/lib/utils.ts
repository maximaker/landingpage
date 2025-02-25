import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines multiple class names with proper Tailwind CSS conflict resolution
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Wait for the specified number of milliseconds
 */
export function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Format a number as a currency string
 */
export function formatCurrency(value: number, options: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    ...options
  }).format(value)
}

/**
 * Truncate a string to the specified maximum length
 */
export function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

/**
 * Get initials from a name
 */
export function getInitials(name: string) {
  if (!name) return ''
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

/**
 * Slugify a string
 */
export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

/**
 * Check if a URL is external
 */
export function isExternalUrl(url: string) {
  return url.startsWith('http') || url.startsWith('//')
} 