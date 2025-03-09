"use client"

import { useAdventure } from '@/components/adventure/context';

export default function ViewAdventurePage() {
  const { selectedAdventure } = useAdventure();
  
  if (!selectedAdventure) {
    return <div>No adventure selected</div>;
  }
  
  return (
    <div>
      <h1>{selectedAdventure.title}</h1>
      <p>{selectedAdventure.description}</p>
      <p>{selectedAdventure.setting}</p>
      <p>{selectedAdventure.toneStyle}</p>
      <p>{selectedAdventure.difficulty}</p>
      <p>{selectedAdventure.narratorPersonality}</p>
      <p>{selectedAdventure.initialStoryPrompt}</p>
      <p>{selectedAdventure.suggestedThemes.join(', ')}</p>
    </div>
  );
}