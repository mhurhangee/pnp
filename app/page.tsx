import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PixelatedEmoji } from "@/components/pixelated-emoji"

export default function SplashPage() {
  return (

      <Card className="mx-auto max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-4xl text-center uppercase animate-pulse"><PixelatedEmoji emoji="⚗️" className="pr-2" />Potions & Prompts<PixelatedEmoji emoji="📜" className="pl-2" /></CardTitle>
          
        </CardHeader>
        <CardContent>
          <p className="text-center text-2xl uppercase">
            An AI-powered text-based roleplaying game.
          </p>
          <div className="flex justify-center gap-2 pt-4">
            <PixelatedEmoji emoji="🧙‍♂️" /><PixelatedEmoji emoji="🧝" /><PixelatedEmoji emoji="🥷" /><PixelatedEmoji emoji="🧞" /><PixelatedEmoji emoji="🧌" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild size="lg" variant="red">
            <Link href="/dashboard" >Begin your adventure</Link>
          </Button>
        </CardFooter>
      </Card>
  )
}