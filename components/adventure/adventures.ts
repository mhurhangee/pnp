
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
    initialOptions: string[]
    color: string //tailwind color
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
    initialOptions: ["Approach the villagers and ask what they know about the lights and whispers.", "Head toward the ruins and observe them from a safe distance.", "Visit the local inn to gather rumors and hear what other travelers think.", "Check your equipment to make sure you're prepared before making any decisions."],
    color: "bg-orange-950"
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
    initialOptions: ["Attend the royal council meeting to assess the current state of affairs.", "Meet privately with a trusted ally to discuss the crisis.", "Investigate the rumors of poison and see if there’s any truth to them.", "Head to a local inn to gather more information."],
    color: "bg-purple-950"
  },

  {
    id: "mystic_labyrinth",
    emoji: "🌀",
    title: "Mystic Labyrinth",
    description: "Venture into an ever-changing maze of illusions and riddles, where every turn brings you closer to an ancient secret hidden deep within its walls.",
    genre: ["Fantasy", "Puzzle", "Adventure"],
    setting: "A sprawling labyrinth beneath an enchanted forest, filled with shifting corridors and magical traps.",
    toneStyle: "Enigmatic and surreal, with an underlying sense of urgency.",
    difficulty: "Challenging",
    narratorPersonality: "A cryptic guide who speaks in riddles and metaphors.",
    initialStoryPrompt: "Legends speak of a labyrinth that rearranges itself with each heartbeat of the earth. As you step into its shadowed entrance, the walls seem to whisper secrets of a forgotten magic...",
    suggestedThemes: ["Mystery", "Illusion", "Courage", "Discovery"],
    initialOptions: ["Examine the entrance carefully before stepping inside.", "Listen to the whispers and try to understand their meaning.", "Mark your path to keep track of where you’ve been.", "Take a cautious step forward and see how the labyrinth responds"],
    color: "bg-emerald-950"
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
    initialOptions: ["Scan the horizon for any sign of land or unusual sights.", "Talk to your crew to gauge their mood and readiness.", "Check your navigation charts and ensure you’re heading in the right direction.", "Keep watch on the sea—something about these waters feels different."],
    color: "bg-blue-950"
  },
  {
    id: "shattered_kingdom",
    emoji: "🏰",
    title: "The Shattered Kingdom",
    description: "In the aftermath of a catastrophic war, navigate a fractured realm where factions vie for power and old alliances crumble, with the fate of the kingdom hanging in the balance.",
    genre: ["Political Intrigue", "Fantasy", "Drama"],
    setting: "A war-torn land of crumbling fortresses, divided regions, and restless citizens.",
    toneStyle: "Somber and strategic, filled with political maneuvering and personal dilemmas.",
    difficulty: "Difficult",
    narratorPersonality: "A veteran chronicler who has witnessed the rise and fall of empires, offering measured and reflective commentary.",
    initialStoryPrompt: "The kingdom lies in ruins, its former glory shattered by conflict. As rival factions rise and fall, your intervention could be the spark to unite—or further divide—this broken realm. How will you restore order amid chaos?",
    suggestedThemes: ["Redemption", "Reconstruction", "Power Struggles", "Hope vs. Despair"],
    initialOptions: ["Assess the current factions and their power dynamics.", "Seek an audience with a faction leader to understand their position.", "Travel to the capital ruins to see the devastation firsthand.", "Stay hidden for now and gather information on who to trust."],
    color: "bg-red-950"
  },
  {
    id: "dragons_ascent",
    emoji: "🐉",
    title: "The Dragon's Ascent",
    description: "Embark on a daring quest to ascend a mountain rumored to be the dwelling of a mighty dragon, where legends and peril converge at every turn.",
    genre: ["Fantasy", "Adventure", "Mythic"],
    setting: "A rugged mountain range with treacherous paths, mystical caves, and ancient dragon lore.",
    toneStyle: "Epic and exhilarating, with moments of awe and danger.",
    difficulty: "Challenging",
    narratorPersonality: "A seasoned adventurer with a booming voice and a taste for high-stakes challenges.",
    initialStoryPrompt: "High above the valley, a peak shrouded in swirling mists beckons. Tales of a slumbering dragon and a hoard of untold riches lure you upward, despite the perilous journey that lies ahead...",
    suggestedThemes: ["Bravery", "Legend", "Ambition", "Mythic Beasts"],
    initialOptions: ["Survey the mountain for the best route upward.", "Check your supplies before beginning the ascent.", "Ask local villagers if they know any legends about the dragon.", "Take your first steps toward the towering peak."],
    color: "bg-green-950"
  },
  {
    id: "echoes_of_the_past",
    emoji: "🎶",
    title: "Echoes of the Past",
    description: "Embark on a journey through time where mystical melodies unlock forgotten memories, guiding you through hidden realms of history and magic.",
    genre: ["Fantasy", "Time Travel", "Mystery"],
    setting: "A realm where time flows irregularly, with ancient ruins resonating with enchanting music and ghostly echoes.",
    toneStyle: "Melancholic yet hopeful, blending nostalgia with wonder.",
    difficulty: "Moderate",
    narratorPersonality: "A reflective and poetic storyteller who weaves the past and present into a tapestry of sound and memory.",
    initialStoryPrompt: "In a secluded valley where the air hums with an ethereal melody, you realize that every note holds a secret from a bygone era. What stories will the music reveal as you follow its call?",
    suggestedThemes: ["Time", "Memory", "Legacy", "Mystical Connection"],
    initialOptions: ["Explore the valley's hidden paths and search for the past.", "Investigate the ruins of old fortresses and search for hidden treasures.", "Search for hidden paths and traps that might lead you closer to the secret.", "Check your equipment to make sure you're prepared before making any decisions."],
    color: "bg-indigo-950"
  },
  {
    id: "cursed_forest",
    emoji: "🌲",
    title: "The Cursed Forest",
    description: "Step into a dense, shadowy forest where dark magic lingers and every rustle of leaves hints at ancient curses and vengeful spirits.",
    genre: ["Horror", "Fantasy", "Adventure"],
    setting: "An ancient, overgrown forest known for its twisted trees, eerie silence, and supernatural occurrences.",
    toneStyle: "Foreboding and intense, with a constant sense of impending danger.",
    difficulty: "Challenging",
    narratorPersonality: "A somber voice, haunted by memories of the forest's past, guiding you through its perilous depths.",
    initialStoryPrompt: "Locals whisper of a curse that plagues the forest—of wandering spirits and eternal twilight. As you venture beneath its canopy, every shadow and sound raises your heartbeat. What dark secrets lie within?",
    suggestedThemes: ["Fear", "Mystery", "Supernatural", "Survival"],
    initialOptions: ["Examine your surroundings for signs of danger or movement.", "Light a torch to push back the eerie darkness.", "Listen carefully to distinguish natural sounds from unnatural ones.", "Press forward cautiously despite the unsettling atmosphere."],
    color: "bg-lime-950"
  },
  {
    id: "times_paradox",
    emoji: "⏳",
    title: "Time's Paradox",
    description: "Encounter a rift in time where past, present, and future collide. Solve temporal puzzles and alter events to mend the fractured flow of time.",
    genre: ["Sci-Fi", "Fantasy", "Adventure"],
    setting: "A surreal landscape where historical epochs blend together, featuring futuristic cities alongside ancient ruins.",
    toneStyle: "Intriguing and cerebral, with moments of high tension and wonder.",
    difficulty: "Challenging",
    narratorPersonality: "An enigmatic guide, pondering the complexities of fate and the fragile nature of time.",
    initialStoryPrompt: "A shimmering rift in the fabric of time opens before you, melding eras into a single, chaotic reality. Stepping through, you are tasked with restoring the balance of history. Can you mend the past to secure the future?",
    suggestedThemes: ["Time", "Causality", "Decision Making", "The Ripple Effect"],
    initialOptions: ["Examine the rift and try to understand its nature.", "Step through cautiously and observe the world beyond.", "Look around for artifacts that might help stabilize time.", "Listen for voices—perhaps someone (or something) is trying to communicate."],
    color: "bg-yellow-950"
  },
  {
    id: "celestial_tournament",
    emoji: "✨",
    title: "The Celestial Tournament",
    description: "Enter a cosmic arena where warriors from across the realms compete in contests of skill, magic, and destiny. Victory here could bestow celestial favor upon you.",
    genre: ["Fantasy", "Competition", "Adventure"],
    setting: "A vast celestial arena adrift in the cosmos, where stars twinkle as spectators and ancient deities oversee the battles.",
    toneStyle: "Grand and vibrant, with an air of epic competition and mystical spectacle.",
    difficulty: "Moderate",
    narratorPersonality: "A flamboyant and charismatic chronicler who revels in the drama and heroism of the tournament.",
    initialStoryPrompt: "The heavens have opened a stage for champions from every world. Amid cheers and the crackle of cosmic energy, you take your place in the arena. What destiny awaits as you vie for glory among the stars?",
    suggestedThemes: ["Competition", "Destiny", "Honor", "Mythical Challenges"],
    initialOptions: ["Size up your opponents before the tournament begins.", "Stretch and prepare for the upcoming battles.", "Seek out the tournament organizers for more details on the rules.", "Step confidently into the arena and await your first challenge."],
    color: "bg-cyan-950"
  },
  {
    id: "phantom_carnival",
    emoji: "🎪",
    title: "The Phantom Carnival",
    description: "Unravel the secrets of a ghostly carnival that appears only under the light of the full moon, where spectral performers and eerie attractions conceal a tragic past.",
    genre: ["Horror", "Mystery", "Fantasy"],
    setting: "A surreal carnival ground materializing under moonlight, with faded attractions, abandoned rides, and an undercurrent of melancholy.",
    toneStyle: "Spine-chilling yet whimsical, blending macabre humor with unsettling suspense.",
    difficulty: "Casual",
    narratorPersonality: "A quirky and macabre storyteller whose dark humor lightens the eerie atmosphere.",
    initialStoryPrompt: "As the full moon rises, the carnival emerges from the mists like a mirage. Stepping through creaking gates, you are enveloped by the ghostly laughter and spectral sights. What hidden sorrows lie beneath the carnival’s enchanting façade?",
    suggestedThemes: ["Mystery", "Haunting Past", "Duality of Joy and Sorrow", "Spectral Encounters"],
    initialOptions: ["Survey the attractions and see what catches your attention.", "Approach a spectral performer and try to speak with them.", "Listen closely to the eerie music playing throughout the carnival.", "Step deeper inside and allow the carnival to reveal its secrets."],
    color: "bg-pink-950"
  },
  {
    id: "beneath_the_iron_sea",
    emoji: "🐙",
    title: "Beneath the Iron Sea",
    description: "Dive into the depths of a mysterious ocean, where a lost civilization thrives amid iron-wrought ruins and creatures of unimaginable design.",
    genre: ["Adventure", "Exploration", "Sci-Fi", "Fantasy"],
    setting: "An underwater realm of towering metallic structures, glowing flora, and ancient secrets hidden in the abyss.",
    toneStyle: "Eerie and awe-inspiring, with an undercurrent of exploration and wonder.",
    difficulty: "Moderate",
    narratorPersonality: "A thoughtful and cautious guide who illuminates the mysteries of the deep with curiosity and respect.",
    initialStoryPrompt: "Your journey takes a startling turn as you descend into a dark, iron-clad underwater world. Relics of a bygone era shimmer in the gloom. What marvels and dangers await beneath the crushing depths?",
    suggestedThemes: ["Exploration", "Mystery", "Ancient Civilization", "Survival"],
    initialOptions: ["Observe the surroundings to get a sense of the environment.", "Check your oxygen levels and ensure your gear is functional.", "Examine a nearby relic to see if it holds any secrets.", "Swim deeper into the unknown and explore further."],
    color: "bg-sky-950"
  }
];
