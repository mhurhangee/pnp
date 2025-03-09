import type { ReactNode } from "react"

interface CenteredLayoutProps {
  children: ReactNode
}

export default function CenteredLayout({ children }: CenteredLayoutProps) {
  return <div className="container">{children}</div>
}