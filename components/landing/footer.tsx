import Link from "next/link"
import { Github, Globe, Mail } from "lucide-react"
import { PixelatedEmoji } from "@/components/design/pixelated-emoji"

export default function Footer() {
  return (
    <footer className="w-full height-2rem bg-background flex items-center justify-center pt-4 text-muted-foreground">
        <span>Made with <PixelatedEmoji emoji="💚" size={24} /> by m.hurhangee</span>
        <div className="flex items-center gap-3 pl-2">
          <Link
            href="https://github.com/mhurhangee"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://aiconsult.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Globe className="h-4 w-4" />
          </Link>
          <Link
           href="mailto:michael@aiconsult.uk"
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
    </footer>
  )
}
