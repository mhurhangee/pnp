
export interface Adventure {
    id: string
    emoji: string
    title: string
    description: string
    genre: string[]
    setting: string
    toneStyle: string
    difficulty: string
    narratorPersonality: string
    initialStoryPrompt: string
    suggestedThemes: string[]
}

export const ADVENTURES: Adventure[] = [
    {
      id: "forgotten_ruins",
      emoji: "🏺",
      title: "The Forgotten Ruins",
      description: "Explore ancient ruins that have mysteriously awakened after centuries of dormancy, uncovering secrets of a lost civilization and confronting the dangers that lurk within.",
      genre: ["Fantasy", "Mystery", "Adventure"],
      setting: "A remote wilderness dotted with the remnants of an ancient civilization, centered around the village of Thornbrook.",
      toneStyle: "Mysterious and atmospheric, with moments of tension and wonder.",
      difficulty: "Moderate",
      narratorPersonality: "A wise and slightly mysterious storyteller who creates vivid descriptions and builds suspense.",
      initialStoryPrompt: "The village of Thornbrook has long lived in the shadow of ancient ruins. For generations, these crumbling structures were nothing more than a curiosity. But three nights ago, strange lights began to emanate from the deepest chambers, and villagers report hearing whispers on the wind. As an adventurer passing through, you find yourself drawn to investigate these mysteries...",
      suggestedThemes: ["Discovery", "Ancient Power", "Consequences of the Past", "Choice and Responsibility"],
    },
    {
      id: "crown_of_shadows",
      emoji: "👑",
      title: "Crown of Shadows",
      description: "Navigate the dangerous political landscape of the royal court while uncovering a conspiracy that threatens the kingdom. Your choices will determine who sits on the throne.",
      genre: ["Political Intrigue", "Mystery", "Fantasy"],
      setting: "The medieval kingdom of Aldoria, centered around the capital city and royal palace.",
      toneStyle: "Tense and dramatic, with moments of political maneuvering and personal reflection.",
      difficulty: "Challenging",
      narratorPersonality: "An observant and slightly cynical chronicler who notices the subtle details of court life and human motivation.",
      initialStoryPrompt: "The old king is dead, and the kingdom of Aldoria teeters on the edge of chaos. As a trusted advisor with ties to multiple factions, you find yourself at the center of the succession crisis. Rumors of poison swirl, and dark forces gather in the shadows. The choices you make in the coming days will shape the future of the realm...",
      suggestedThemes: ["Power", "Loyalty", "Deception", "Sacrifice", "Legacy"],
    },
    {
      id: "seafarers_journey",
      emoji: "⛵",
      title: "The Seafarer's Journey",
      description: "Set sail across uncharted waters, discovering new islands, encountering strange creatures, and searching for a legendary treasure that could change the world.",
      genre: ["Adventure", "Exploration", "Fantasy"],
      setting: "A vast ocean world dotted with islands of various cultures and ecosystems.",
      toneStyle: "Adventurous and wondrous, with a sense of discovery and occasional moments of danger.",
      difficulty: "Casual",
      narratorPersonality: "An enthusiastic and vivid storyteller who captures the wonder of exploration and the beauty of new discoveries.",
      initialStoryPrompt: "The maps end where your journey begins. With a sturdy ship beneath your feet and a crew eager for adventure, you set sail beyond the known waters. Tales of islands with impossible wonders and treasures beyond imagination have drawn you to the horizon. What discoveries await, and what dangers lurk beneath the waves?",
      suggestedThemes: ["Discovery", "Freedom", "Facing the Unknown", "Found Family"],
    }
  ]