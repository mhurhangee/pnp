import { PixelatedEmoji } from "@/components/design/pixelated-emoji"

interface EmojiRowProps {
    emojis: string[]
    size?: number
    pixelSize?: number
    className?: string
}

export function EmojiRow({emojis, size, pixelSize, className}: EmojiRowProps){
    return (
        <div className={`flex justify-center gap-2 py-2 ${className}`}>
            {emojis.map((emoji) => (
                <PixelatedEmoji key={emoji} emoji={emoji} size={size} pixelSize={pixelSize} />
            ))}
        </div>
    )
}