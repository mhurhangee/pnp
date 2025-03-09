import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Adventure } from "./adventures"
import { PixelatedEmoji } from "@/components/design/pixelated-emoji"
import { Badge } from "@/components/ui/badge"

export function ConfirmAdventure({ selectedAdventure }: { selectedAdventure: Adventure }) {
    return (
      <Card className="max-w-3xl mx-auto mt-8 bg-slate-950 border-2">
          <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-center text-3xl font-bold">
                  <PixelatedEmoji emoji={selectedAdventure.emoji} className="mr-3" />
                  <span className="text-center">{selectedAdventure.title}</span>
                  <PixelatedEmoji emoji={selectedAdventure.emoji} className="ml-3 hidden lg:block" />
              </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <p className="text-lg italic text-slate-300">{selectedAdventure.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 transition-all hover:bg-slate-900">
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                          <span className="bg-slate-800 p-1 rounded mr-2 text-xs">SETTING</span>
                      </h3>
                      <p>{selectedAdventure.setting}</p>
                  </div>
                  
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 transition-all hover:bg-slate-900">
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                          <span className="bg-slate-800 p-1 rounded mr-2 text-xs">TONE/STYLE</span>
                      </h3>
                      <p>{selectedAdventure.toneStyle}</p>
                  </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 transition-all hover:bg-slate-900">
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                          <span className="bg-slate-800 p-1 rounded mr-2 text-xs">DIFFICULTY</span>
                      </h3>
                      <p>{selectedAdventure.difficulty}</p>
                  </div>
                  
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 transition-all hover:bg-slate-900">
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                          <span className="bg-slate-800 p-1 rounded mr-2 text-xs">NARRATOR</span>
                      </h3>
                      <p>{selectedAdventure.narratorPersonality}</p>
                  </div>
              </div>
              
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 transition-all hover:bg-slate-900">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <span className="bg-slate-800 p-1 rounded mr-2 text-xs">STORY PROMPT</span>
                  </h3>
                  <p className="italic">{selectedAdventure.initialStoryPrompt}</p>
              </div>
              
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 transition-all hover:bg-slate-900">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <span className="bg-slate-800 p-1 rounded mr-2 text-xs">THEMES</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                      {selectedAdventure.suggestedThemes.map((theme, index) => (
                          <Badge key={index} variant="outline" className="bg-slate-800/50">{theme}</Badge>
                      ))}
                  </div>
              </div>
          </CardContent>
          <CardFooter className="flex justify-between mt-4 pt-4 border-t border-slate-800">
              <Link href="/adventure-select">
                  <Button className="border-slate-700 hover:bg-slate-800">Go Back</Button>
              </Link>
              <Link href="/character-select">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">Confirm Adventure</Button>
              </Link>
          </CardFooter>
      </Card>
    )
}