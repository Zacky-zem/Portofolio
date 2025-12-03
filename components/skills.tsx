"use client"

const skillsCategories = [
  {
    category: "Data Analysis",
    skills: ["Python", "Pandas", "NumPy", "Statistical Analysis"],
  },
  {
    category: "Visualization",
    skills: ["Tableau", "Power BI", "Matplotlib", "Plotly"],
  },
  {
    category: "Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "Predictive Modeling", "Classification"],
  },
  {
    category: "Web Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Databases",
    skills: ["SQL", "PostgreSQL", "MongoDB", "Data Warehousing"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Jupyter Notebook", "Google Colab", "Vercel"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto border-t border-border">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground max-w-2xl">
          A diverse toolkit for solving complex data challenges with precision and creativity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillsCategories.map((category) => (
          <div
            key={category.category}
            className="border border-accent/30 rounded-xl p-6 hover:border-accent/60 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-4 text-accent">{category.category}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium hover:bg-accent/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
