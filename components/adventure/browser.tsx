"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { item } from "@/lib/animation"
import { useAdventure } from "@/components/adventure/context"
import { ADVENTURES } from "@/components/adventure/adventures"
import Link from "next/link"
import { EmojiRow } from "../design/emoji-row"
import { PixelatedEmoji } from "../design/pixelated-emoji"
import { cn } from "@/lib/utils"

export function AdventureBrowser() {
  const { setSelectedAdventure } = useAdventure()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  // Get all unique genres across all stories
  const allGenres = Array.from(new Set(ADVENTURES.flatMap((adventure) => adventure.genre))).sort()

  // Get all unique difficulties
  const allDifficulties = Array.from(new Set(ADVENTURES.map((adventure) => adventure.difficulty))).sort()

  // Filter stories based on search query and filters
  const filteredAdventures = ADVENTURES.filter((adventure) => {
    // Search query filter
    const matchesSearch =
      searchQuery === "" ||
      adventure.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      adventure.description.toLowerCase().includes(searchQuery.toLowerCase())

    // Genre filter
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.some((genre) => adventure.genre.includes(genre))

    // Difficulty filter
    const matchesDifficulty = !selectedDifficulty || adventure.difficulty === selectedDifficulty

    return matchesSearch && matchesGenre && matchesDifficulty
  })

  // Toggle genre selection
  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre))
    } else {
      setSelectedGenres([...selectedGenres, genre])
    }
  }

  // Handle difficulty selection
  const handleDifficultyChange = (value: string) => {
    setSelectedDifficulty(value === "all" ? null : value)
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedGenres([])
    setSelectedDifficulty(null)
    setSearchQuery("")
  }

  // Check if any filters are applied
  const hasActiveFilters = selectedGenres.length > 0 || selectedDifficulty !== null

  // Create an array of all active filters
  const activeFilters = [...(selectedDifficulty ? [selectedDifficulty] : []), ...selectedGenres]

  // Number of filters to show before "more" button
  const visibleFiltersCount = 2
  const hiddenFiltersCount = activeFilters.length - visibleFiltersCount

  return (
    <Card className="card-main" variant="corners">
      <CardHeader>
        <CardTitle className="pix-header">
          Adventures
          <EmojiRow emojis={["🗺️", "🏕️", "⚔️", "🧙‍♂️", "🐉"]} />
        </CardTitle>
        <CardDescription className="cent-text">Choose an adventure to begin your journey.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="search adventures..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Popover >
              <PopoverTrigger asChild>
                <Button size="icon" className="shrink-0 relative">
                  <PixelatedEmoji emoji="🏷️" className="h-4 w-4" />
                  <span
                    className={`absolute -top-1 -right-1 h-3 w-3 border-1 transition-opacity ${hasActiveFilters ? "opacity-100 bg-green-500" : "opacity-0"}`}
                  ></span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-60" align="end">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Filters</h4>
                      <Button
                        size="sm"
                        onClick={clearFilters}
                        className="h-auto p-0 text-xs text-muted-foreground"
                      >
                        Clear all
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="difficulty">Difficulty</Label>
                      <Select value={selectedDifficulty || "all"} onValueChange={handleDifficultyChange}>
                        <SelectTrigger id="difficulty">
                          <SelectValue placeholder="ALL" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">ALL</SelectItem>
                          {allDifficulties.map((difficulty) => (
                            <SelectItem key={difficulty} value={difficulty}>
                              {difficulty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Genres</Label>
                      <ScrollArea>
                        {allGenres.map((genre) => (
                          <div key={genre} className="flex items-center space-x-2">
                            <Checkbox
                              id={`genre-${genre}`}
                              checked={selectedGenres.includes(genre)}
                              onCheckedChange={() => toggleGenre(genre)}
                            />
                            <Label htmlFor={`genre-${genre}`} className="text-sm cursor-pointer">
                              {genre}
                            </Label>
                          </div>
                        ))}
                      </ScrollArea>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Active filters display with truncation */}
          <div className="flex items-center gap-1 h-6">
            {!hasActiveFilters ? (
              <Badge variant="outline" className="text-md">
                All Adventures
              </Badge>
            ) : (
              <>
                {/* Show first few filters */}
                {activeFilters.slice(0, visibleFiltersCount).map((filter, index) => (
                  <Badge key={index} className="text-xs">
                    {filter}
                    <button
                      className="ml-1 hover:text-primary"
                      onClick={() => {
                        if (selectedDifficulty === filter) {
                          setSelectedDifficulty(null)
                        } else {
                          toggleGenre(filter)
                        }
                      }}
                    >
                      ×
                    </button>
                  </Badge>
                ))}

                {/* Show "more" button if there are additional filters */}
                {hiddenFiltersCount > 0 && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Badge variant="outline" className="text-xs cursor-pointer">
                        +{hiddenFiltersCount} more
                      </Badge>
                    </PopoverTrigger>
                    <PopoverContent className="w-60 p-2">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">Active Filters</h4>
                          <Button size="sm" onClick={clearFilters} className="h-6 px-2 text-xs">
                            Clear all
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                          {activeFilters.map((filter, index) => (
                            <Badge key={index} className="text-md">
                              {filter}
                              <button
                                className="ml-1 hover:text-primary"
                                onClick={() => {
                                  if (selectedDifficulty === filter) {
                                    setSelectedDifficulty(null)
                                  } else {
                                    toggleGenre(filter)
                                  }
                                }}
                              >
                                ×
                              </button>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                )}

                {/* Clear all button */}
                {activeFilters.length > 0 && (
                  <Button size="sm" onClick={clearFilters} className="h-6 w-6 p-0 ml-auto">
                    <X className="h-3 w-3" />
                    <span className="sr-only">Clear filters</span>
                  </Button>
                )}
              </>
            )}
          </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredAdventures.length > 0 ? (
                filteredAdventures.map((adventure) => (
                  <motion.div key={adventure.id} variants={item}>
                    <Card className={cn(`${adventure.color}`)}>
                      <CardHeader>
                        <CardTitle className="pix-header">
                          <PixelatedEmoji emoji={adventure.emoji} className="pr-2" />
                          {adventure.title}
                          <span className="hidden lg:inline-block"><PixelatedEmoji emoji={adventure.emoji} className="pl-2" /></span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p>{adventure.description}</p>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <div className="flex w-full items-center justify-between">
                          <Badge variant="outline">{adventure.difficulty}</Badge>
                          <Link href={`/adventure/confirm`}>
                            <Button size="sm" onClick={() => setSelectedAdventure(adventure)}>
                              Begin
                            </Button>
                          </Link>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-muted-foreground">
                  No adventures match your search criteria.
                </div>
              )}
            </div>
        </div>
      </CardContent>
    </Card>
  )
}