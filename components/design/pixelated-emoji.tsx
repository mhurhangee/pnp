"use client"

import React, { useEffect, useRef, useState, useMemo } from "react"
import { useLoadingContext } from "@/components/loading/loading-context"

interface PixelatedEmojiProps {
  emoji: string
  size?: number
  pixelSize?: number
  className?: string
  onLoad?: () => void
}

const PixelatedEmoji = React.memo(
  ({ emoji, size = 32, pixelSize = 2, className = "", onLoad }: PixelatedEmojiProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isRendered, setIsRendered] = useState(false)
    const { addLoadingItem, removeLoadingItem } = useLoadingContext()
    const loadingId = useRef(`emoji-${emoji}-${size}-${pixelSize}`)

    // Calculate grid size based on the pixel size
    const gridSize = useMemo(() => Math.floor(size / pixelSize), [size, pixelSize])

    useEffect(() => {
      // Capture the current value of the ref at the time this effect runs
      const currentLoadingId = loadingId.current

      // Register this emoji as loading
      addLoadingItem(currentLoadingId)

      const canvas = canvasRef.current
      if (!canvas) {
        // If no canvas, still need to clean up
        removeLoadingItem(currentLoadingId)
        return
      }

      const ctx = canvas.getContext("2d")
      if (!ctx) {
        // If no context, still need to clean up
        removeLoadingItem(currentLoadingId)
        return
      }

      // Clear canvas
      ctx.clearRect(0, 0, size, size)

      // Create an offscreen canvas to render the emoji first
      const offscreenCanvas = document.createElement("canvas")
      offscreenCanvas.width = size
      offscreenCanvas.height = size

      const offscreenCtx = offscreenCanvas.getContext("2d")
      if (!offscreenCtx) {
        // If no offscreen context, still need to clean up
        removeLoadingItem(currentLoadingId)
        return
      }

      // Draw the emoji on the offscreen canvas
      offscreenCtx.font = `${size * 0.8}px Arial` // Reduce font size slightly to prevent clipping
      offscreenCtx.textAlign = "center"
      offscreenCtx.textBaseline = "middle"
      offscreenCtx.fillText(emoji, size / 2, size / 2)

      // Get the image data
      const imageData = offscreenCtx.getImageData(0, 0, size, size)
      const data = imageData.data

      // Sample the image at regular intervals to create pixelated effect
      for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
          // Sample from the center of each grid cell
          const sampleX = Math.floor(x * pixelSize + pixelSize / 2)
          const sampleY = Math.floor(y * pixelSize + pixelSize / 2)

          // Get the pixel index
          const pixelIndex = (sampleY * size + sampleX) * 4

          // Get the color at this position
          const r = data[pixelIndex]
          const g = data[pixelIndex + 1]
          const b = data[pixelIndex + 2]
          const a = data[pixelIndex + 3]

          // Skip transparent pixels
          if (a === 0) continue

          // Draw a rectangle for this pixel
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`
          ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
        }
      }

      setIsRendered(true)
      removeLoadingItem(currentLoadingId)
      onLoad?.()

      // Cleanup function uses the captured value
      return () => {
        removeLoadingItem(currentLoadingId)
      }
    }, [emoji, size, pixelSize, gridSize, addLoadingItem, removeLoadingItem, onLoad])

    return (
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className={`pixelated-emoji ${className}`}
        aria-label={`Pixelated version of emoji: ${emoji}`}
        style={{
          imageRendering: "pixelated",
          display: isRendered ? "inline-block" : "none",
        }}
      />
    )
  },
)

PixelatedEmoji.displayName = "PixelatedEmoji"

export { PixelatedEmoji }

