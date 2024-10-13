import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="dark:border-t-green-400/50 relative bottom-0 bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved @ bzohaib754@gmail.com
            </p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <Link href="https://github.com/ZOHAIB7689" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
