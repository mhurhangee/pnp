"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Adventure } from "./adventures"
import { PixelatedEmoji } from "@/components/design/pixelated-emoji"
import { PROTAGONISTS } from "@/components/adventure/protagonists"
import { useAdventure } from "@/components/adventure/context"
import { cn } from "@/lib/utils"

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
    <Card className={cn(`card-adventure`, `${selectedAdventure.color}`)} variant="corners">
      <CardHeader>
        <CardTitle className="pix-header">
          <PixelatedEmoji emoji={selectedAdventure.emoji} className="mr-3" />
          <span className="text-center">{selectedAdventure.title}</span>
          <span className="hidden lg:inline-block"><PixelatedEmoji emoji={selectedAdventure.emoji} className="pl-2" /></span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          <PixelatedEmoji emoji="📖" size={24} /> <span className="pix-header text-lg">Description</span><br /> {selectedAdventure.description}
        </p>


        <p>
          <PixelatedEmoji emoji="🌍" size={24} /> <span className="pix-header text-lg">Setting</span><br /> {selectedAdventure.setting}
        </p>
        <p>
          <PixelatedEmoji emoji="🎭" size={24} /><span className="pix-header text-lg">Narrator</span><br /> {selectedAdventure.narratorPersonality}
        </p>
        <p>
          <PixelatedEmoji emoji="🎨" size={24} /> <span className="pix-header text-lg">Tone</span><br /> {selectedAdventure.toneStyle}
        </p>
        <p>
          <PixelatedEmoji emoji="🎬" size={24} /> <span className="pix-header text-lg">Genres</span><br /> {selectedAdventure.genre.join(', ')}
        </p>
        <p>
          <PixelatedEmoji emoji="🎯" size={24} /> <span className="pix-header text-lg">Difficulty</span><br /> {selectedAdventure.difficulty}
        </p>
        <p>
          <PixelatedEmoji emoji="💡" size={24} /> <span className="pix-header text-lg">Themes</span><br /> {selectedAdventure.suggestedThemes.join(', ')}.
        </p>


        {/* Protagonist Carousel */}

        <Card className="bg-slate-950">
          <CardHeader>
            <CardTitle className="pix-header">
              <div className="flex justify-between">
                <Button onClick={handlePrev} size="sm">&lt;</Button>
                <span className="text-xl">{currentProtagonist.name}</span>
                <Button onClick={handleNext} size="sm">&gt;</Button>
              </div>

            </CardTitle>
            <CardDescription className="flex justify-center items-center">
              <PixelatedEmoji emoji={currentProtagonist.emoji} size={48} className="mr-3" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="pb-2"><PixelatedEmoji emoji="📜" size={24} /> <span className="pix-header text-lg">Description</span><br /> {currentProtagonist.description}</p>
            <p className="pb-2"><PixelatedEmoji emoji="🔮" size={24} /> <span className="pix-header text-lg">Backstory</span><br /> {currentProtagonist.backstory}</p>
            <p className="pb-2"><PixelatedEmoji emoji="💪" size={24} /> <span className="pix-header text-lg">Abilities</span><br /> {currentProtagonist.abilities.join(", ")}</p>
            <p className="pb-2"><PixelatedEmoji emoji="💔" size={24} /> <span className="pix-header text-lg">Flaws</span><br /> {currentProtagonist.flaws.join(", ")}</p>
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row flex-1 justify-between gap-4">
        <Link href="/adventure/select" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto">Go Back</Button>
        </Link>
        <Link href="/adventure/play" className="w-full sm:w-auto">
          <Button 
            onClick={() => setSelectedProtagonist(currentProtagonist)}
            className="w-full sm:w-auto"
          >
            Begin as {currentProtagonist.name}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}