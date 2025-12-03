"use client"

import { useState } from "react"

const projectsData = [
  {
    id: 1,
    title: "Stark Legain Analytics",
    description: "A comprehensive analytics platform for data visualization and reporting.",
    link: "https://stark.legain.id",
    tags: ["Analytics", "Dashboard", "Data Viz"],
    icon: "📈",
  },
  {
    id: 2,
    title: "Purabaya Analytics",
    description:
      "Advanced analytics dashboard for Purabaya with interactive visualizations and real-time data processing.",
    link: "https://purabaya-analytics.vercel.app",
    tags: ["React", "Vercel", "Data Analysis"],
    icon: "📊",
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto border-t border-border">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl">
          A selection of my recent work demonstrating expertise in data science, analytics, and web development.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative"
          >
            <div className="relative h-64 bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-6 flex flex-col justify-between hover:border-accent/60 transition-all duration-300 overflow-hidden">
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ↗
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
