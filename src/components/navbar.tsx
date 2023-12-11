import { Code, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { ThemeMode } from './theme-mode'

const Navbar = () => {
  return (
    <header className="w-full border-b">
      <div className="container flex max-w-4xl py-4">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <Code />
            <span className="inline-block font-bold">shadcn/ui</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href={'/'}
              className="text-foreground transition-colors hover:text-foreground/80"
            >
              Home
            </Link>
            <Link
              href={'/payments'}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Payments
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <ThemeMode />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
