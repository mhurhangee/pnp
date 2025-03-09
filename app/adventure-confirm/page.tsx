"use client"

import { useAdventure } from '@/components/adventure/context'
import { notFound } from 'next/navigation'
import { ConfirmAdventure } from '@/components/adventure/confirm'
import { LoadingScreen } from '@/components/loading/loading-screen'

export default function ConfirmAdventurePage() {
  const { selectedAdventure } = useAdventure()

  if (!selectedAdventure) {
    return notFound()
  }

  return (
    <LoadingScreen>
      <ConfirmAdventure selectedAdventure={selectedAdventure} />
    </LoadingScreen>

  )
}