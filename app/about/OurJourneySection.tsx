import { Timeline } from '@/components/ui/timeline';

export function OurJourneySection() {
  const timelineData = [
    {
      title: "2020",
      content: (
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Foundation</h3>
          <p className="text-muted-foreground">Digital Vitamins was founded with a vision to revolutionize digital product development.</p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Growth & Innovation</h3>
          <p className="text-muted-foreground">Expanded our services and built a strong team of digital experts.</p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Global Expansion</h3>
          <p className="text-muted-foreground">Started serving clients worldwide and launched innovative digital solutions.</p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Industry Leadership</h3>
          <p className="text-muted-foreground">Became a leading force in digital transformation and product development.</p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From our humble beginnings to industry leadership, every step has been driven by our passion for digital excellence.
          </p>
        </div>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
} 