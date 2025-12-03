"use client"

import DataScienceCard from "./data-science-card"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <p className="text-accent text-sm md:text-base font-medium mb-2">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold text-balance">Data Science & Analytics</h1>
            <p className="text-xl text-muted-foreground mt-4 text-balance">
              Transforming raw data into actionable insights through advanced analytics and machine learning.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative h-64 md:h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-accent/30 flex items-center justify-center">
          <DataScienceCard />
        </div>
      </div>
    </section>
  )
}
