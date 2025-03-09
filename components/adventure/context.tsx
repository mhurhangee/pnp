"use client"

import { createContext, useState, useContext, ReactNode } from 'react';
import { Adventure } from '@/components/adventure/adventures';
import { Protagonist } from '@/components/adventure/protagonists';
import { GameState } from '@/components/adventure/game-state';

type AdventureContextType = {
  selectedAdventure: Adventure | null;
  setSelectedAdventure: (adventure: Adventure | null) => void;
  selectedProtagonist: Protagonist | null;
  setSelectedProtagonist: (protagonist: Protagonist | null) => void;
  gameState: GameState | null;
  setGameState: (gameState: GameState | null) => void;
};

const AdventureContext = createContext<AdventureContextType | undefined>(undefined);

export function AdventureProvider({ children }: { children: ReactNode }) {
  const [selectedAdventure, setSelectedAdventure] = useState<Adventure | null>(null);
  const [selectedProtagonist, setSelectedProtagonist] = useState<Protagonist | null>(null);
  const [ gameState, setGameState ] = useState<GameState | null>(null);

  return (
    <AdventureContext.Provider value={{ selectedAdventure, setSelectedAdventure, selectedProtagonist, setSelectedProtagonist, gameState, setGameState }}>
      {children}
    </AdventureContext.Provider>
  );
}

export function useAdventure() {
  const context = useContext(AdventureContext);
  if (context === undefined) {
    throw new Error('useAdventure must be used within an AdventureProvider');
  }
  return context;
}