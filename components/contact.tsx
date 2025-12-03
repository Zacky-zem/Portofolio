"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, Linkedin, Instagram, Github } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    console.log("[v0] Opening social link:", url)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contact" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
        <p className="text-muted-foreground mb-8 md:mb-12 text-sm sm:text-base">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mb-12 md:mb-16">
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-input border border-input rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm sm:text-base"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-input border border-input rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm sm:text-base"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-input border border-input rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none text-sm sm:text-base"
              placeholder="Tell me about your project or inquiry..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>

        <div className="border-t border-border pt-8 md:pt-12">
          <p className="text-muted-foreground mb-6 text-sm sm:text-base font-medium">Other ways to connect:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <a
              href="mailto:zackymustafa7@gmail.com"
              className="flex items-center gap-3 text-accent hover:opacity-80 transition-opacity group p-3 rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
              <Mail size={20} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base truncate">zackymustafa7@gmail.com</span>
            </a>
            <a
              href="tel:+6287761044433"
              className="flex items-center gap-3 text-accent hover:opacity-80 transition-opacity group p-3 rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
              <Phone size={20} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base truncate">+62 877-6104-433</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zacky-ainul-mustofa/"
              onClick={(e) => handleSocialClick(e, "https://www.linkedin.com/in/zacky-ainul-mustofa/")}
              className="flex items-center gap-3 text-accent hover:opacity-80 transition-opacity group p-3 rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
              <Linkedin size={20} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base truncate">LinkedIn Profile</span>
            </a>
            <a
              href="https://instagram.com/zckymustafa"
              onClick={(e) => handleSocialClick(e, "https://instagram.com/zckymustafa")}
              className="flex items-center gap-3 text-accent hover:opacity-80 transition-opacity group p-3 rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
              <Instagram size={20} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base truncate">@zckymustafa</span>
            </a>
            <a
              href="https://github.com/Zacky-zem"
              onClick={(e) => handleSocialClick(e, "https://github.com/Zacky-zem")}
              className="flex items-center gap-3 text-accent hover:opacity-80 transition-opacity group p-3 rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
              <Github size={20} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base truncate">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
