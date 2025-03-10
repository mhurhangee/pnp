import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  variant = 'default',
  className,
  ...props
}: React.ComponentProps<"div"> & { variant?: 'corners' | 'default' }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm relative",
        className
      )}
      {...props}
    >
      {variant === 'corners' && (
        <>
          <div className="absolute top-0 left-0 w-4 h-4 bg-white border-b-2 border-r-2 border-b-purple-950 border-r-purple-950"></div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-white border-b-2 border-l-2 border-b-purple-950 border-l-purple-950"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-white border-t-2 border-r-2 border-t-purple-950 border-r-purple-950"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-white border-t-2 border-l-2 border-t-purple-950 border-l-purple-950"></div>
        </>
      )}
      {props.children}
    </div>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 px-6", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold text-4xl md:text-6xl text-center", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
