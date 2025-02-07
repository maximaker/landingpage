'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-card/30 dark:bg-card/20 backdrop-blur-sm rounded-2xl border border-border">
        <svg
          className="w-12 h-12 mx-auto text-primary mb-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <h3 className="text-xl font-semibold mb-2">Thanks for reaching out!</h3>
        <p className="text-muted-foreground">We'll review your request and get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 bg-card/30 dark:bg-card/20 backdrop-blur-sm rounded-xl border border-border focus:border-primary/20 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-card/30 dark:bg-card/20 backdrop-blur-sm rounded-xl border border-border focus:border-primary/20 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
          />
        </div>

        {/* Company Name */}
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-2 bg-card/30 dark:bg-card/20 backdrop-blur-sm rounded-xl border border-border focus:border-primary/20 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
          />
        </div>

        {/* Product Stage */}
        <div className="space-y-2">
          <label htmlFor="stage" className="text-sm font-medium">
            Product Stage
          </label>
          <select
            id="stage"
            name="stage"
            className="w-full px-4 py-2 bg-card/30 dark:bg-card/20 backdrop-blur-sm rounded-xl border border-border focus:border-primary/20 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
          >
            <option value="">Select a stage</option>
            <option value="post-mvp">Post-MVP</option>
            <option value="scaling">Scaling</option>
            <option value="optimization">Optimization</option>
            <option value="rebuilding">Rebuilding</option>
          </select>
        </div>
      </div>

      {/* Services Needed */}
      <div className="space-y-4">
        <label className="text-sm font-medium">What do you need help with?</label>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            'UX Audit & Strategy',
            'Feature Prioritization',
            'UI/UX Design & Execution',
            'Performance Optimization',
            'Scaling & Future Growth',
            'Other'
          ].map((service) => (
            <label
              key={service}
              className="flex items-center space-x-3 p-4 bg-card/30 dark:bg-card/20 backdrop-blur-sm rounded-xl border border-border hover:border-primary/20 transition-all duration-200 cursor-pointer"
            >
              <input
                type="checkbox"
                name="services"
                value={service}
                className="form-checkbox h-5 w-5 text-primary border-border rounded-md focus:ring-primary/20"
              />
              <span className="text-sm">{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 bg-card/30 dark:bg-card/20 backdrop-blur-sm rounded-xl border border-border focus:border-primary/20 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-8 py-6"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </>
          ) : (
            'Send my request'
          )}
        </Button>
      </div>
    </form>
  )
}