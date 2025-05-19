import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';
import { Switch } from './components/ui/switch';
import { Checkbox } from './components/ui/checkbox';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './components/ui/tooltip';
import { useState } from 'react';

export default function StyleGuidePage() {
  const [checked, setChecked] = useState(false);
  const [switched, setSwitched] = useState(false);

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Style Guide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Button */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Button</h2>
          <div className="flex gap-4 items-center mb-2">
            <Button>Default</Button>
            <Button className="hover:bg-primary/80">Hovered</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>
        {/* Input */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Input</h2>
          <div className="flex flex-col gap-2 mb-2">
            <Input placeholder="Default" />
            <Input className="hover:border-primary" placeholder="Hovered" />
            <Input disabled placeholder="Disabled" />
          </div>
        </section>
        {/* Card */}
        <section>
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
        {/* Badge */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Badge</h2>
          <div className="flex gap-4 mb-2">
            <Badge>Default</Badge>
            <Badge className="hover:bg-primary/80">Hovered</Badge>
            <Badge className="opacity-50">Disabled</Badge>
          </div>
        </section>
        {/* Tabs */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Tab 1 content</TabsContent>
            <TabsContent value="tab2">Tab 2 content</TabsContent>
          </Tabs>
        </section>
        {/* Switch */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Switch</h2>
          <Switch checked={switched} onCheckedChange={val => setSwitched(val === true)} />
        </section>
        {/* Checkbox */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Checkbox</h2>
          <Checkbox checked={checked} onCheckedChange={val => setChecked(val === true)} />
        </section>
        {/* Label */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Label</h2>
          <Label htmlFor="input-demo">Label Example</Label>
          <Input id="input-demo" placeholder="With label" />
        </section>
        {/* Textarea */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Textarea</h2>
          <Textarea placeholder="Default" />
        </section>
        {/* Accordion */}
        <section>
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
          </Accordion>
        </section>
        {/* Avatar */}
        <section>
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
        <section>
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
      </div>
    </main>
  );
} 