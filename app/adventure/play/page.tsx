"use client"

import { Play } from '@/components/adventure/play'
import { LoadingScreen } from '@/components/loading/loading-screen'
import { useAdventure } from '@/components/adventure/context'
import { redirect } from 'next/navigation'

export default function AdventureSelectPage() {
  const { selectedAdventure, selectedProtagonist } = useAdventure()

  if (!selectedAdventure || !selectedProtagonist) {
    return redirect('/adventure/select')
  }

  return (
    <LoadingScreen>
      <Play selectedAdventure={selectedAdventure} selectedProtagonist={selectedProtagonist} />
    </LoadingScreen>
  );
}