"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { container, item } from "@/lib/animation"
import { PixelatedEmoji } from "@/components/design/pixelated-emoji"

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container space-y-24 text-center"
      >
        <motion.div className="space-y-8">
          <motion.div variants={item} className="flex justify-center">
            <PixelatedEmoji emoji="👻" className="h-16 w-16 text-primary animate-pulse" size={96} pixelSize={4} />
          </motion.div>
          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold"
          >
            404
          </motion.h1>
          <motion.div variants={item}>
            <p className="text-4xl sm:text-5xl">
              Lost in the void
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={item}>
          <Link href="/">
            <Button size="lg" className="text-lg px-8 py-6 space-x-2">
              <PixelatedEmoji emoji="⚗️" className="h-5 w-5" />
              <span>Go home</span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
