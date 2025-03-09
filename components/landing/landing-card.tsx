"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PixelatedEmoji } from "@/components/design/pixelated-emoji"
import Link from "next/link"

export function LandingCard() {
    return (
        <Card className="mx-auto max-w-lg w-full bg-slate-950">
            <CardHeader>
                <CardTitle><PixelatedEmoji emoji="⚗️" className="mx-auto mb-2" />Potions & Prompts<PixelatedEmoji emoji="📜" className="pl-2" /></CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-center text-2xl uppercase">
                    Welcome to Potions & Prompts, an AI-powered text-based roleplaying game.
                </p>
                <div className="flex justify-center gap-2 pt-4">
                    <PixelatedEmoji emoji="🧙‍♂️" /><PixelatedEmoji emoji="🧝" /><PixelatedEmoji emoji="🥷" /><PixelatedEmoji emoji="🧞" /><PixelatedEmoji emoji="🧌" />
                </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button asChild size="lg" variant="red">
                    <Link href="/adventure/select" >Begin your adventure</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}