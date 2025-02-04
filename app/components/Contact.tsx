import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Clock, ArrowRight, Loader2 } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type FormData = z.infer<typeof formSchema>

const CONTACT_METHODS = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email us directly",
    description: "We'll respond within 24 hours",
    action: "Send email",
    link: "mailto:hello@digitalvitamins.com"
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Live chat support",
    description: "Available during business hours",
    action: "Start chat",
    link: "#"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Schedule a call",
    description: "Book a 30-min consultation",
    action: "Book time",
    link: "#"
  }
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', data)
      setSubmitSuccess(true)
      reset()
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-40 sm:py-48 lg:py-56 px-8 sm:px-12 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/[0.01] via-transparent to-transparent" />
        <div className="absolute bottom-1/3 -right-1/4 w-1/2 h-1/2 bg-primary/1 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-40">
          <Badge variant="secondary" className="mb-10 px-5 py-1.5 text-sm tracking-wide uppercase">
            Get in Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground tracking-tight max-w-3xl mx-auto">
            Let's discuss your product's <span className="text-primary">wellness</span>
          </h2>
          <p className="text-lg text-muted-foreground/70 max-w-xl mx-auto leading-relaxed">
            Have questions about our services? We're here to help you choose the perfect solution for your product.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card/20 p-14 rounded-3xl border border-border/20 shadow-sm">
            <h3 className="text-2xl font-semibold mb-8 text-foreground/90">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground/90 mb-2 block">
                    First name
                  </label>
                  <Input 
                    id="firstName"
                    {...register("firstName")}
                    className={`bg-background border-border/20 focus:border-primary/20 h-12 ${
                      errors.firstName ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    placeholder="John"
                    aria-invalid={errors.firstName ? "true" : "false"}
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-1 text-sm text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground/90 mb-2 block">
                    Last name
                  </label>
                  <Input 
                    id="lastName"
                    {...register("lastName")}
                    className={`bg-background border-border/20 focus:border-primary/20 h-12 ${
                      errors.lastName ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    placeholder="Doe"
                    aria-invalid={errors.lastName ? "true" : "false"}
                    aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="mt-1 text-sm text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground/90 mb-2 block">
                  Work email
                </label>
                <Input 
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`bg-background border-border/20 focus:border-primary/20 h-12 ${
                    errors.email ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  placeholder="john@company.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground/90 mb-2 block">
                  Message
                </label>
                <Textarea 
                  id="message"
                  {...register("message")}
                  className={`bg-background border-border/20 focus:border-primary/20 min-h-[160px] ${
                    errors.message ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  placeholder="Tell us about your product and what you're looking to achieve..."
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl transition-all duration-300 ${
                    submitSuccess ? 'bg-green-500 hover:bg-green-600' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : submitSuccess ? (
                    <>
                      Message sent successfully!
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
                {/* Success message overlay */}
                {submitSuccess && (
                  <div 
                    role="alert"
                    className="absolute top-0 left-0 right-0 -translate-y-full p-4 bg-green-500 text-white rounded-t-xl text-sm text-center animate-slideDown"
                  >
                    Thank you! We'll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className="space-y-12 lg:pt-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground/90">
                Other ways to connect
              </h3>
              <p className="text-muted-foreground/70 leading-relaxed">
                Choose the communication method that works best for you. We're available through multiple channels.
              </p>
            </div>

            <div className="space-y-8">
              {CONTACT_METHODS.map((method, index) => (
                <a 
                  key={index}
                  href={method.link}
                  className="group flex items-start gap-6 p-8 rounded-2xl bg-card/20 border border-border/20 hover:border-primary/20 transition-all duration-200"
                >
                  <div className="p-3 rounded-xl bg-primary/5 text-primary/70 group-hover:scale-110 transition-transform duration-200">
                    {method.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-medium text-foreground/90 mb-2">
                      {method.title}
                    </h4>
                    <p className="text-muted-foreground/70 mb-4">
                      {method.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary/70 font-medium">
                      {method.action}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-primary/[0.03] border border-primary/10">
              <h4 className="text-lg font-medium text-foreground/90 mb-2">
                Emergency support
              </h4>
              <p className="text-muted-foreground/70 mb-4">
                For urgent issues, our premium support is available 24/7 for Enterprise customers.
              </p>
              <Button variant="link" className="text-primary/70 hover:text-primary p-0 font-medium">
                Learn about Enterprise support →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 