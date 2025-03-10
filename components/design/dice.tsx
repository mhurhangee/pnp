"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"

interface EnhancedStrippedDiceProps {
  onRollComplete?: (result: number) => void
  autoHide?: boolean
  hideDelay?: number
}

export function EnhancedStrippedDice({ onRollComplete, autoHide = true, hideDelay = 3000 }: EnhancedStrippedDiceProps) {
  // Component state
  const [rolling, setRolling] = useState(false)
  const [result, setResult] = useState(0)
  const [rollQuality, setRollQuality] = useState<
    "critical-fail" | "bad" | "average" | "good" | "critical-success" | null
  >(null)

  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const resultRef = useRef(0)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Get color based on roll quality
  const getRollColor = (quality: "critical-fail" | "bad" | "average" | "good" | "critical-success" | null) => {
    switch (quality) {
      case "critical-fail":
        return "#7f1d1d" // Dark red
      case "bad":
        return "#ef4444" // Red
      case "average":
        return "#f59e0b" // Amber
      case "good":
        return "#22c55e" // Green
      case "critical-success":
        return "#15803d" // Dark green
      default:
        return "white"
    }
  }

  // Get background color based on roll quality
  const getRollBackgroundColor = (
    quality: "critical-fail" | "bad" | "average" | "good" | "critical-success" | null,
  ) => {
    switch (quality) {
      case "critical-fail":
        return "#450a0a" // Darker red
      case "bad":
        return "#b91c1c" // Dark red
      case "average":
        return "#92400e" // Dark amber
      case "good":
        return "#15803d" // Dark green
      case "critical-success":
        return "#14532d" // Darker green
      default:
        return "#222" // Default dark gray
    }
  }

  // Get glow color based on roll quality
  const getRollGlowColor = (quality: "critical-fail" | "bad" | "average" | "good" | "critical-success" | null) => {
    switch (quality) {
      case "critical-fail":
        return "rgba(239, 68, 68, 0.8)" // Red glow
      case "bad":
        return "rgba(239, 68, 68, 0.5)" // Light red glow
      case "average":
        return "rgba(245, 158, 11, 0.5)" // Amber glow
      case "good":
        return "rgba(34, 197, 94, 0.5)" // Light green glow
      case "critical-success":
        return "rgba(74, 222, 128, 0.8)" // Green glow
      default:
        return "transparent"
    }
  }

  // Get overlay color based on roll quality
  const getRollOverlayColor = (quality: "critical-fail" | "bad" | "average" | "good" | "critical-success" | null) => {
    switch (quality) {
      case "critical-fail":
        return "rgba(239, 68, 68, 0.4)" // Red overlay
      case "bad":
        return "rgba(239, 68, 68, 0.2)" // Light red overlay
      case "average":
        return "rgba(245, 158, 11, 0.2)" // Amber overlay
      case "good":
        return "rgba(34, 197, 94, 0.2)" // Light green overlay
      case "critical-success":
        return "rgba(74, 222, 128, 0.4)" // Green overlay
      default:
        return "transparent"
    }
  }

  // Draw a specific dice face - using useCallback to avoid dependency issues
  const drawDiceFace = useCallback(
    (ctx: CanvasRenderingContext2D, faceValue: number) => {
      const canvas = ctx.canvas
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      // Clear canvas completely
      ctx.clearRect(0, 0, width, height)

      // Draw background
      ctx.fillStyle = "#333"
      ctx.fillRect(0, 0, width, height)

      // Dice dimensions
      const size = Math.min(width, height) * 0.6
      const x = (width - size) / 2
      const y = (height - size) / 2

      // Draw dice shadow
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
      ctx.beginPath()
      ctx.ellipse(width / 2, y + size + 10, size / 2, size / 8, 0, 0, Math.PI * 2)
      ctx.fill()

      // Draw dice background with color based on roll quality
      ctx.fillStyle = rollQuality ? getRollBackgroundColor(rollQuality) : "#222"
      ctx.fillRect(x, y, size, size)

      // Draw border with color based on roll quality
      ctx.strokeStyle = rollQuality ? getRollColor(rollQuality) : "white"
      ctx.lineWidth = 4
      ctx.strokeRect(x + 2, y + 2, size - 4, size - 4)

      // Add glow effect for critical rolls
      if (rollQuality === "critical-success" || rollQuality === "critical-fail") {
        ctx.shadowColor = getRollGlowColor(rollQuality)
        ctx.shadowBlur = 15
        ctx.strokeRect(x + 2, y + 2, size - 4, size - 4)
        ctx.shadowColor = "transparent"
        ctx.shadowBlur = 0
      }

      // Draw number
      ctx.fillStyle = "white"
      ctx.font = `${size / 2.5}px "VT323"`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Add pixel shadow effect with color based on roll quality
      ctx.fillStyle = rollQuality ? getRollColor(rollQuality) : "#ff6600"
      ctx.fillText(faceValue.toString(), width / 2 + 4, height / 2 + 4)

      // Draw main number
      ctx.fillStyle = "white"
      ctx.fillText(faceValue.toString(), width / 2, height / 2)

      // Add some pixel dots in corners for decoration
      ctx.fillStyle = rollQuality ? getRollColor(rollQuality) : "#ff6600"

      const dotSize = 8
      const margin = 20

      ctx.fillRect(x + margin, y + margin, dotSize, dotSize)
      ctx.fillRect(x + size - margin - dotSize, y + margin, dotSize, dotSize)
      ctx.fillRect(x + margin, y + size - margin - dotSize, dotSize, dotSize)
      ctx.fillRect(x + size - margin - dotSize, y + size - margin - dotSize, dotSize, dotSize)

      // For critical rolls, add extra decorative elements
      if (rollQuality === "critical-success" || rollQuality === "critical-fail") {
        // Add pulsing inner border
        const pulseAmount = 0.5 + Math.sin(Date.now() / 200) * 0.5
        ctx.strokeStyle =
          rollQuality === "critical-success"
            ? `rgba(74, 222, 128, ${pulseAmount})`
            : `rgba(239, 68, 68, ${pulseAmount})`
        ctx.lineWidth = 2
        ctx.strokeRect(x + 15, y + 15, size - 30, size - 30)

        // Add corner highlights
        ctx.fillStyle = rollQuality === "critical-success" ? "rgba(74, 222, 128, 0.8)" : "rgba(239, 68, 68, 0.8)"

        const cornerSize = 12
        // Top-left
        ctx.beginPath()
        ctx.moveTo(x + 10, y + 10)
        ctx.lineTo(x + 10 + cornerSize, y + 10)
        ctx.lineTo(x + 10, y + 10 + cornerSize)
        ctx.fill()

        // Top-right
        ctx.beginPath()
        ctx.moveTo(x + size - 10, y + 10)
        ctx.lineTo(x + size - 10 - cornerSize, y + 10)
        ctx.lineTo(x + size - 10, y + 10 + cornerSize)
        ctx.fill()

        // Bottom-left
        ctx.beginPath()
        ctx.moveTo(x + 10, y + size - 10)
        ctx.lineTo(x + 10 + cornerSize, y + size - 10)
        ctx.lineTo(x + 10, y + size - 10 - cornerSize)
        ctx.fill()

        // Bottom-right
        ctx.beginPath()
        ctx.moveTo(x + size - 10, y + size - 10)
        ctx.lineTo(x + size - 10 - cornerSize, y + size - 10)
        ctx.lineTo(x + size - 10, y + size - 10 - cornerSize)
        ctx.fill()
      }
    },
    [rollQuality],
  )

  // Create color overlay effect
  const createColorOverlayEffect = (quality: "critical-fail" | "bad" | "average" | "good" | "critical-success") => {
    if (containerRef.current) {
      const flashOverlay = document.createElement("div")
      flashOverlay.className = "absolute inset-0 pointer-events-none"
      flashOverlay.style.backgroundColor = getRollOverlayColor(quality)
      flashOverlay.style.zIndex = "10"
      flashOverlay.style.animation = "flash-animation 0.5s ease-out forwards"

      containerRef.current.appendChild(flashOverlay)

      setTimeout(() => {
        if (containerRef.current && containerRef.current.contains(flashOverlay)) {
          containerRef.current.removeChild(flashOverlay)
        }
      }, 500)
    }
  }

  // Initialize canvas when component mounts
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size with proper pixel ratio
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    ctx.scale(dpr, dpr)

    // Draw initial state
    drawDiceFace(ctx, resultRef.current)

    // Clean up on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [drawDiceFace])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Update canvas size
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      ctx.scale(dpr, dpr)

      // Redraw
      drawDiceFace(ctx, resultRef.current)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [drawDiceFace])

  // Determine roll quality based on value
  const determineRollQuality = (value: number) => {
    if (value === 1) return "critical-fail"
    if (value >= 2 && value <= 7) return "bad"
    if (value >= 8 && value <= 13) return "average"
    if (value >= 14 && value <= 19) return "good"
    if (value === 20) return "critical-success"
    return null
  }

  // Roll the dice
  const rollDice = () => {
    // Reset state
    setRollQuality(null)

    // Generate result immediately - D20 only
    const finalResult = Math.floor(Math.random() * 20) + 1
    resultRef.current = finalResult
    setResult(finalResult)

    // Determine roll quality
    const quality = determineRollQuality(finalResult)

    // Make result available immediately for API calls
    if (onRollComplete) {
      onRollComplete(finalResult)
    }

    // Show the component
    setRolling(true)

    // Clear any existing hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }

    // Start animation
    let frameCount = 0
    const totalFrames = 20 // Fixed number of frames for consistency
    const fps = 15 // Frames per second
    let lastFrameTime = 0
    let shakeAmount = 0

    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    // Animation function
    const animate = (timestamp: number) => {
      if (!canvasRef.current) return

      const ctx = canvasRef.current.getContext("2d")
      if (!ctx) return

      // Control frame rate for dice animation
      if (timestamp - lastFrameTime > 1000 / fps) {
        lastFrameTime = timestamp

        // Calculate current frame
        frameCount++

        // Determine which face to show
        if (frameCount < totalFrames) {
          // During animation, cycle through random faces
          const randomFace = Math.floor(Math.random() * 20) + 1

          // Add screen shake
          shakeAmount = 5 * (1 - frameCount / totalFrames)

          // Apply screen shake
          ctx.save()
          if (shakeAmount > 0) {
            ctx.translate((Math.random() - 0.5) * shakeAmount, (Math.random() - 0.5) * shakeAmount)
          }

          // Draw the current random face
          drawDiceFace(ctx, randomFace)

          // Restore context
          ctx.restore()
        } else {
          // At the end, show the final result with appropriate quality
          setRollQuality(quality)

          // Create color overlay effect
          if (quality) {
            createColorOverlayEffect(quality)
          }

          // Draw the final result
          drawDiceFace(ctx, finalResult)

          setRolling(false)

          // Set timeout to hide the component
          if (autoHide) {
            hideTimeoutRef.current = setTimeout(() => {
              setRollQuality(null)
            }, hideDelay)
          }

          return // End animation
        }
      }

      // Continue animation
      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animationRef.current = requestAnimationFrame(animate)
  }

  // Get result text based on roll quality
  const getResultText = () => {
    if (rolling) return "Rolling..."

    let qualityText = ""
    switch (rollQuality) {
      case "critical-fail":
        qualityText = "Critical Fail!"
        break
      case "bad":
        qualityText = "Bad Roll"
        break
      case "average":
        qualityText = "Average Roll"
        break
      case "good":
        qualityText = "Good Roll"
        break
      case "critical-success":
        qualityText = "Critical Success!"
        break
    }

    return `${result} - ${qualityText}`
  }

  return (
    <div className="inline-block">
      <div ref={containerRef} className="bg-gray-800 rounded-lg overflow-hidden pixel-border p-4 w-64 relative">
        <div className="aspect-square w-full relative">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        <div
          className={`dice-result-display pixel-border mt-4 ${
            rollQuality === "critical-success"
              ? "bg-green-900"
              : rollQuality === "critical-fail"
                ? "bg-red-900"
                : "bg-gray-900"
          }`}
        >
          <span
            className={`pixel-text-small ${
              rollQuality === "critical-success" || rollQuality === "critical-fail" ? "animate-pulse" : ""
            }`}
          >
            {result ? getResultText() : ""}
          </span>
        </div>
      </div>

      <div className="pt-6 flex items-center">
        {result === 0 ? (
          <Button onClick={rollDice} size="lg" className="w-full" disabled={rolling}>
            {rolling ? "ROLLING..." : "ROLL D20"}
          </Button>
        ) : (<div className="text-center animate-pulse">Thinking ...</div>)}
      </div>

      <style jsx global>{`
                .pixel-button {
                    font-family: 'VT323', monospace;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 1px;
                    border: 2px solid currentColor;
                }
                
                .pixel-border {
                    border: 4px solid white;
                    box-shadow: 0 0 0 4px black, 0 0 0 8px #555;
                    image-rendering: pixelated;
                }
                
                .dice-result-display {
                    padding: 8px 16px;
                    background-color: #222;
                    color: white;
                    text-align: center;
                    width: 100%;
                }
                
                .pixel-text-small {
                    font-family: 'VT323', monospace;
                    letter-spacing: 0.5px;
                    font-size: 1.2rem;
                }
                
                canvas {
                    image-rendering: pixelated;
                    image-rendering: crisp-edges;
                }
                
                @keyframes flash-animation {
                    0% { opacity: 1; }
                    100% { opacity: 0; }
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                
                .animate-pulse {
                    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
    </div>
  )
}