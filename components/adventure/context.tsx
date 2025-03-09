"use client"

import { createContext, useState, useContext, ReactNode } from 'react';
import { Adventure } from '@/components/adventure-select/adventures';

type AdventureContextType = {
  selectedAdventure: Adventure | null;
  setSelectedAdventure: (adventure: Adventure | null) => void;
};

const AdventureContext = createContext<AdventureContextType | undefined>(undefined);

export function AdventureProvider({ children }: { children: ReactNode }) {
  const [selectedAdventure, setSelectedAdventure] = useState<Adventure | null>(null);

  return (
    <AdventureContext.Provider value={{ selectedAdventure, setSelectedAdventure }}>
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