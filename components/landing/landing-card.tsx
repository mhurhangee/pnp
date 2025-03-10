"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EmojiRow } from "@/components/design/emoji-row"
import Link from "next/link"

export function LandingCard() {
    return (
        <Card className="card-main" variant="corners">
            <CardHeader>
                <CardTitle className="pix-header">
                    Potions & Prompts
                </CardTitle>
                <EmojiRow emojis={["⚗️", "🌄", "📜"]} />
            </CardHeader>
            <CardContent>
                <p className="cent-text">
                    Welcome to Potions & Prompts, an AI-powered text-based roleplaying game.
                </p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button asChild>
                    <Link href="/adventure/select">Begin your adventure</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}