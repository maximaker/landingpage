import React from 'react';

export function MissionVisionValuesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Vision Section - Full-width with diagonal background */}
        <div className="relative mb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent transform -skew-y-6" />
          <div className="relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-12 sm:p-16 rounded-3xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
            <div className="absolute -top-4 left-8 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary font-medium">Our Vision</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-left">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground leading-tight">
                  Empowering Digital <span className="text-primary">Excellence</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a digital landscape where every product reaches its full potential, 
                  creating meaningful experiences that drive innovation and success. Our goal is to 
                  be the catalyst that transforms good products into extraordinary digital solutions.
                </p>
              </div>
              <div className="flex-1 relative aspect-square w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-full animate-pulse opacity-60" />
                <div className="absolute inset-4 bg-gradient-to-tl from-primary/20 to-transparent rounded-full animate-pulse delay-150 opacity-40" />
                <div className="absolute inset-8 bg-gradient-to-tr from-primary/10 to-transparent rounded-full animate-pulse delay-300 opacity-30" />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section - Split layout with geometric patterns */}
        <div className="relative mb-24">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-12 rounded-3xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl order-2 lg:order-1">
              <div className="absolute -top-4 right-8 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-medium">Our Mission</span>
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight">
                  Nurturing Digital <span className="text-primary">Growth</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're committed to providing tailored digital solutions that enhance product health 
                  and drive sustainable growth. Through our innovative "vitamin" approach, we diagnose, 
                  treat, and optimize digital products to ensure they thrive in today's competitive landscape.
                </p>
              </div>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-12 left-12 w-24 h-24 border-2 border-primary rounded-xl transform rotate-45" />
                <div className="absolute bottom-12 right-12 w-32 h-32 border-2 border-primary rounded-full" />
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-primary/5 rounded-3xl transform hover:scale-105 transition-transform duration-300" />
                <div className="bg-primary/10 rounded-3xl transform hover:scale-105 transition-transform duration-300 translate-y-8" />
                <div className="bg-primary/15 rounded-3xl transform hover:scale-105 transition-transform duration-300 -translate-y-8" />
                <div className="bg-primary/5 rounded-3xl transform hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section - Modern grid with hover effects */}
        <div className="relative">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8">
              <span className="text-primary font-medium">Our Values</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight">
              Principles that Drive <span className="text-primary">Us</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation First",
                description: "Constantly pushing boundaries and exploring new solutions to stay ahead of digital trends.",
                gradient: "from-blue-500/10 to-transparent"
              },
              {
                title: "Customer Success",
                description: "Your success is our success. We're dedicated to delivering results that exceed expectations.",
                gradient: "from-green-500/10 to-transparent"
              },
              {
                title: "Continuous Growth",
                description: "Embracing learning and improvement as core elements of our service delivery.",
                gradient: "from-purple-500/10 to-transparent"
              },
              {
                title: "Transparency",
                description: "Building trust through open communication and honest partnerships.",
                gradient: "from-orange-500/10 to-transparent"
              }
            ].map((value, index) => (
              <div key={index} className="group relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary/90 transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 