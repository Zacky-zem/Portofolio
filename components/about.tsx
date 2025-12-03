"use client"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto border-t border-border">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            My name is Zacky Ainul Mustofa, and I am an Applied Data Science student at Politeknik Elektronika Negeri Surabaya (PENS) who is passionate about leveraging data to solve real-world problems.
          </p>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Education</h3>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Applied Data Science</strong>
              <br />
              Politeknik Elektronika Negeri Surabaya (PENS)
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">What I Do</h3>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in data analysis, visualization, and building predictive models. I combine technical
              expertise with creative problem-solving to deliver insights that drive business decisions.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">My Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in the power of clear communication and visual storytelling. Every analysis I create is designed
              to be both technically sound and easy to understand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
