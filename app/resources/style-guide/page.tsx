import { Heading, Subheading, Body, Label } from "../../components/ui/typography";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "../../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";

export default function StyleGuide() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-8">
      <Heading size="3xl" className="mb-8">Style Guide</Heading>

      {/* Typography */}
      <section className="mb-12">
        <Subheading className="mb-4">Typography</Subheading>
        <div className="space-y-2">
          <Heading size="3xl">Heading 3xl</Heading>
          <Heading size="2xl">Heading 2xl</Heading>
          <Heading size="xl">Heading xl</Heading>
          <Subheading>Subheading Example</Subheading>
          <Body size="lg">Body Large</Body>
          <Body>Body Base</Body>
          <Body size="sm">Body Small</Body>
          <Label>Label Example</Label>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-12">
        <Subheading className="mb-4">Buttons</Subheading>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* Badges */}
      <section className="mb-12">
        <Subheading className="mb-4">Badges</Subheading>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-12">
        <Subheading className="mb-4">Cards</Subheading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here.</CardDescription>
            </CardHeader>
            <CardContent>
              <Body>This is the card content area. Use for text, images, or actions.</Body>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Another Card</CardTitle>
            </CardHeader>
            <CardContent>
              <Body size="sm">Small body text for a different card style.</Body>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Avatars */}
      <section className="mb-12">
        <Subheading className="mb-4">Avatars</Subheading>
        <div className="flex gap-6 items-center">
          <Avatar>
            <AvatarImage src="/images/photo-1.jpg" alt="Avatar 1" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/images/photo-2.jpg" alt="Avatar 2" />
            <AvatarFallback>MC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </div>
  );
} 