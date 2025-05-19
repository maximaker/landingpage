'use client'

import { Navigation } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Calendar } from '@/components/ui/calendar';
import { BentoGrid } from '@/components/ui/bento-grid';
import { Timeline } from '@/components/ui/timeline';
import { TestimonialCarousel } from '@/components/ui/testimonial';
import { ServiceButtons } from '@/components/ui/service-buttons';
import { Logo } from '@/components/ui/logo';
import { Marquee } from '@/components/ui/marquee';
import { Flags } from '@/components/ui/flags';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { TimezoneSelector } from '@/components/ui/timezone-selector';
import { CurrencySelector } from '@/components/ui/currency-selector';
import { useState } from 'react';

const TOC = [
  { id: 'button', label: 'Button' },
  { id: 'badge', label: 'Badge' },
  { id: 'input', label: 'Input' },
  { id: 'textarea', label: 'Textarea' },
  { id: 'card', label: 'Card' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'switch', label: 'Switch' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'label', label: 'Label' },
  { id: 'accordion', label: 'Accordion' },
  { id: 'avatar', label: 'Avatar' },
  { id: 'tooltip', label: 'Tooltip' },
  { id: 'theme-toggle', label: 'Theme Toggle' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'bento-grid', label: 'Bento Grid' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'service-buttons', label: 'Service Buttons' },
  { id: 'logo', label: 'Logo' },
  { id: 'marquee', label: 'Marquee' },
  { id: 'flags', label: 'Flags' },
  { id: 'language-switcher', label: 'Language Switcher' },
  { id: 'timezone-selector', label: 'Timezone Selector' },
  { id: 'currency-selector', label: 'Currency Selector' },
];

export default function StyleGuidePage() {
  const [checked, setChecked] = useState(false);
  const [switched, setSwitched] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-12">
          {/* TOC Sidebar */}
          <nav className="md:w-64 flex-shrink-0 mb-8 md:mb-0 sticky top-24 self-start hidden md:block">
            <div className="bg-card/70 rounded-xl border border-border p-4">
              <h2 className="text-lg font-semibold mb-4">On this page</h2>
              <ul className="space-y-2">
                {TOC.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-8">Style Guide</h1>
            {/* Button */}
            <section id="button" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Button</h2>
              <div className="flex flex-wrap gap-4 items-center mb-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
                <Button><span className="mr-2">With Icon</span> <Logo className="w-4 h-4" /></Button>
              </div>
            </section>
            {/* Badge */}
            <section id="badge" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Badge</h2>
              <div className="flex gap-4 mb-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </section>
            {/* Input */}
            <section id="input" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Input</h2>
              <div className="flex flex-col gap-2 mb-2 max-w-md">
                <Input placeholder="Default" />
                <Input className="focus:border-primary" placeholder="Focus" autoFocus />
                <Input disabled placeholder="Disabled" />
                <Input className="border-destructive text-destructive" placeholder="Error" />
              </div>
            </section>
            {/* Textarea */}
            <section id="textarea" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Textarea</h2>
              <Textarea placeholder="Default" />
            </section>
            {/* Card */}
            <section id="card" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Card</h2>
              <div className="flex gap-4 mb-2">
                <Card className="p-4">
                  <CardHeader>
                    <CardTitle>Default</CardTitle>
                  </CardHeader>
                  <CardContent>Card content</CardContent>
                </Card>
                <Card className="p-4 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>Hovered</CardTitle>
                  </CardHeader>
                  <CardContent>Card content</CardContent>
                </Card>
                <Card className="p-4 opacity-50 pointer-events-none">
                  <CardHeader>
                    <CardTitle>Disabled</CardTitle>
                  </CardHeader>
                  <CardContent>Card content</CardContent>
                </Card>
              </div>
            </section>
            {/* Tabs */}
            <section id="tabs" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3" disabled>Disabled</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Tab 1 content</TabsContent>
                <TabsContent value="tab2">Tab 2 content</TabsContent>
                <TabsContent value="tab3">Tab 3 content</TabsContent>
              </Tabs>
            </section>
            {/* Switch */}
            <section id="switch" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Switch</h2>
              <div className="flex gap-4 items-center">
                <Switch checked={switched} onCheckedChange={val => setSwitched(val === true)} />
                <Switch checked={!switched} onCheckedChange={val => setSwitched(!(val === true))} />
                <Switch disabled />
              </div>
            </section>
            {/* Checkbox */}
            <section id="checkbox" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Checkbox</h2>
              <div className="flex gap-4 items-center">
                <Checkbox checked={checked} onCheckedChange={val => setChecked(val === true)} />
                <Checkbox checked={!checked} onCheckedChange={val => setChecked(!(val === true))} />
                <Checkbox disabled />
              </div>
            </section>
            {/* Label */}
            <section id="label" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Label</h2>
              <Label htmlFor="input-demo">Label Example</Label>
              <Input id="input-demo" placeholder="With label" />
            </section>
            {/* Accordion */}
            <section id="accordion" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Accordion 1</AccordionTrigger>
                  <AccordionContent>Content 1</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Accordion 2</AccordionTrigger>
                  <AccordionContent>Content 2</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" disabled>
                  <AccordionTrigger>Disabled</AccordionTrigger>
                  <AccordionContent>Disabled content</AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
            {/* Avatar */}
            <section id="avatar" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Avatar</h2>
              <div className="flex gap-4 items-center">
                <Avatar>
                  <AvatarImage src="/images/avatar-demo.jpg" alt="Jane Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </div>
            </section>
            {/* Tooltip */}
            <section id="tooltip" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Tooltip</h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button>Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>Tooltip content</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </section>
            {/* Theme Toggle */}
            <section id="theme-toggle" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Theme Toggle</h2>
              <ThemeToggle />
            </section>
            {/* Calendar */}
            <section id="calendar" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
              <Calendar />
            </section>
            {/* Bento Grid */}
            <section id="bento-grid" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Bento Grid</h2>
              <BentoGrid>
                <div className="col-span-3 flex items-center justify-center text-muted-foreground">Demo</div>
              </BentoGrid>
            </section>
            {/* Timeline */}
            <section id="timeline" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
              <Timeline data={[{ title: '2020', content: <div>Foundation</div> }, { title: '2021', content: <div>Growth</div> }]} />
            </section>
            {/* Testimonial */}
            <section id="testimonial" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Testimonial</h2>
              <TestimonialCarousel testimonials={[{
                id: 1,
                name: 'Jane Doe',
                role: 'Designer',
                company: 'Acme Inc.',
                rating: 5,
                description: 'This is a testimonial.',
                industry: 'Tech',
                duration: '6 months',
                useCase: 'UI/UX Design',
                location: 'NY, USA',
                isVerified: true,
                linkedIn: '',
                companyLogo: ''
              }]} />
            </section>
            {/* Service Buttons */}
            <section id="service-buttons" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Service Buttons</h2>
              <ServiceButtons />
            </section>
            {/* Logo */}
            <section id="logo" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Logo</h2>
              <Logo className="w-24 h-8" />
            </section>
            {/* Marquee */}
            <section id="marquee" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Marquee</h2>
              <Marquee>Scrolling content here</Marquee>
            </section>
            {/* Flags */}
            <section id="flags" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Flags</h2>
              <div className="flex gap-4 items-center">
                <Flags.GB />
                <Flags.FR />
                <Flags.RO />
              </div>
            </section>
            {/* Language Switcher */}
            <section id="language-switcher" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Language Switcher</h2>
              <LanguageSwitcher />
            </section>
            {/* Timezone Selector */}
            <section id="timezone-selector" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Timezone Selector</h2>
              <TimezoneSelector />
            </section>
            {/* Currency Selector */}
            <section id="currency-selector" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Currency Selector</h2>
              <CurrencySelector />
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 