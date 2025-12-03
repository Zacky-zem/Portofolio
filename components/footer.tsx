"use client"

import { Github, Linkedin, Instagram } from "lucide-react"
import AnimatedFooterBg from "./animated-footer-bg"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary/20 via-secondary/10 to-secondary/20 overflow-hidden">
      <AnimatedFooterBg />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-accent mb-2">Zacky Dev</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Applied Data Science | PENS Student</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground text-sm sm:text-base">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Zacky-zem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors hover:scale-125 transform duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/zacky-ainul-mustofa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors hover:scale-125 transform duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com/zckymustafa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors hover:scale-125 transform duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8">
          <p className="text-center text-muted-foreground text-xs sm:text-sm">
            © {currentYear} Zacky Ainul Mustofa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
