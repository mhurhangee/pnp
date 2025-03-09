"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Adventure } from "./adventures"
import { PixelatedEmoji } from "@/components/design/pixelated-emoji"
import { Badge } from "@/components/ui/badge"
import { PROTAGONISTS } from "@/components/adventure/protagonists"
import { useAdventure } from "@/components/adventure/context"

export function ConfirmAdventure({ selectedAdventure }: { selectedAdventure: Adventure }) {
  // Get the list of protagonists for the selected adventure.
  const protagonists = PROTAGONISTS[selectedAdventure.id] || []
  // Assume your adventure context now includes a method to set the chosen protagonist.
  const { setSelectedProtagonist } = useAdventure()

  const [selectedIndex, setSelectedIndex] = useState(0)
  const currentProtagonist = protagonists[selectedIndex]

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + protagonists.length) % protagonists.length)
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % protagonists.length)
  }

  return (
    <Card className="max-w-3xl mx-auto mt-8 bg-slate-950 border-2">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-center text-3xl font-bold">
          <PixelatedEmoji emoji={selectedAdventure.emoji} className="mr-3" />
          <span className="text-center">{selectedAdventure.title}</span>
          <PixelatedEmoji emoji={selectedAdventure.emoji} className="ml-3 hidden lg:block" />
        </CardTitle>
        <CardDescription className="text-center">{selectedAdventure.description}</CardDescription>
        <div className="flex justify-between items-center mt-1">
          <div className="flex flex-wrap gap-1">
            {selectedAdventure.genre.map((genre) => (
              <Badge key={genre} variant="secondary">
                {genre}
              </Badge>
            ))}
          </div>
          <Badge variant="outline">{selectedAdventure.difficulty}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          <PixelatedEmoji emoji="🌍" size={24} className="mr-2" /> {selectedAdventure.setting}
        </p>
        <p className="text-muted-foreground">
          <PixelatedEmoji emoji="🎭" size={24} className="mr-2" /> {selectedAdventure.narratorPersonality}
        </p>
        <p className="text-muted-foreground">
          <PixelatedEmoji emoji="🎨" size={24} className="mr-2" /> {selectedAdventure.toneStyle}
        </p>


        {/* Protagonist Carousel */}
        <div className="mt-6">
          <h2 className="text-center text-xl font-semibold mb-2">Select Your Protagonist</h2>
          <div className="flex items-center justify-center">
            <Button onClick={handlePrev}>
              &lt;
            </Button>
            <div className="mx-4 p-4 border bg-zinc-950 space-y-2 text">
                <h3 className="flex items-center gap-2 text-center text-xl font-semibold items-center justify-center"><PixelatedEmoji emoji={currentProtagonist.emoji} /> {currentProtagonist.name}</h3>
              <p><PixelatedEmoji emoji="📜" size={24} /> {currentProtagonist.description}</p>
              <p><PixelatedEmoji emoji="🔮" size={24} /> {currentProtagonist.backstory}</p>
              <div className="mt-2 text-sm">
                <p><PixelatedEmoji emoji="💪" size={24} /> {currentProtagonist.abilities.join(", ")}</p>
                <p><PixelatedEmoji emoji="💔" size={24} /> {currentProtagonist.flaws.join(", ")}</p>
              </div>
            </div>
            <Button onClick={handleNext}>
              &gt;
            </Button>
          </div>
        </div>
        <div className="bg-zinc-950 p-4 border text-center">
          <p className="italic">{selectedAdventure.initialStoryPrompt}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between mt-2 pt-2">
        <Link href="/adventure/select">
          <Button>Go Back</Button>
        </Link>
        <Link href="/adventure/play">
          <Button onClick={() => setSelectedProtagonist(currentProtagonist)}>
            Begin with {currentProtagonist.name}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}