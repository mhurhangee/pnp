export interface Protagonist {
    id: string;
    name: string;
    emoji: string;
    description: string;
    backstory: string;
    personality: string;
    abilities: string[];
    flaws: string[];
}

export const PROTAGONISTS: Record<string, Protagonist[]> = {
    forgotten_ruins: [
        {
            id: "protagonist_forgotten_ruins_1",
            name: "Elara Windwalker",
            emoji: "🧙‍♀️",
            description:
                "A determined explorer with a penchant for uncovering ancient secrets, though haunted by impulsiveness.",
            backstory:
                "Raised in the village of Thornbrook, she has always been drawn to the mysteries of the past. Her quick wit and arcane intuition have led her into as many scrapes as they have opened hidden doors.",
            personality:
                "Courageous and passionate, yet prone to rash decisions when excitement overtakes her caution.",
            abilities: ["Arcane intuition", "Linguistic decoding", "Stealth"],
            flaws: ["Impulsive", "Overconfident", "Haunted by past failures"],
        },
        {
            id: "protagonist_forgotten_ruins_2",
            name: "Talon Emberfoot",
            emoji: "🦊",
            description:
                "A resourceful scavenger with a rough exterior, seeking redemption amid ruins of a lost era.",
            backstory:
                "Once a common thief in Thornbrook, Talon turned his back on petty crime after a personal tragedy. His street smarts and nimble fingers now serve him on a quest for a second chance.",
            personality:
                "Cunning and resilient, yet struggles to trust others and commit fully to a cause.",
            abilities: ["Lockpicking", "Quick reflexes", "Street smarts"],
            flaws: ["Distrustful", "Cynical", "Reluctant to commit"],
        },
    ],
    crown_of_shadows: [
        {
            id: "protagonist_crown_of_shadows_1",
            name: "Sir Garrick Blackwood",
            emoji: "🛡️",
            description:
                "A cunning court advisor with a hidden agenda, skilled in deception and intrigue.",
            backstory:
                "Born into nobility, Garrick learned early that power comes at a steep price. His struggle between duty and ambition often leaves him morally conflicted.",
            personality:
                "Calculating and charming, yet his manipulative nature and secretive tendencies can isolate him from those he wishes to protect.",
            abilities: ["Persuasion", "Tactical planning", "Espionage"],
            flaws: ["Manipulative", "Paranoid", "Secretive"],
        },
        {
            id: "protagonist_crown_of_shadows_2",
            name: "Lady Isolde Ravenscroft",
            emoji: "👩‍⚖️",
            description:
                "A sharp-witted noblewoman with a rebellious streak, determined to reshape the kingdom.",
            backstory:
                "Haunted by the scandals and rigid traditions of the royal court, Isolde champions reform—even if it means defying established authority.",
            personality:
                "Intelligent and passionate, though her idealism and occasional recklessness often put her at odds with courtly decorum.",
            abilities: ["Diplomacy", "Strategic insight", "Public speaking"],
            flaws: ["Reckless", "Idealistic", "Vengeful"],
        },
    ],
    seafarers_journey: [
        {
            id: "protagonist_seafarers_journey_1",
            name: "Captain Marina Storm",
            emoji: "⚓",
            description:
                "A fearless sea captain with a daring spirit, whose ambition is as vast as the ocean—but her temper can be as turbulent.",
            backstory:
                "Born on the rugged coastline, Marina learned early the unpredictable nature of the sea. Her bold leadership has earned her respect, even if her impatience sometimes invites danger.",
            personality:
                "Bold and charismatic, yet her stubbornness and quick temper often complicate alliances at sea.",
            abilities: ["Navigation", "Seamanship", "Swordsmanship"],
            flaws: ["Hot-headed", "Impatient", "Overconfident"],
        },
        {
            id: "protagonist_seafarers_journey_2",
            name: "Finnian Tidecaller",
            emoji: "🐟",
            description:
                "A weathered sailor with a deep connection to the ocean's mysteries, burdened by loss and regret.",
            backstory:
                "After losing his family to a vicious storm, Finnian roams the seas seeking solace and answers in the whispering tides.",
            personality:
                "Thoughtful and introspective, though his melancholic nature and lingering grief often make him risk-averse.",
            abilities: ["Tide reading", "Fishing expertise", "Survival skills"],
            flaws: ["Melancholic", "Risk-averse", "Distracted by memories"],
        },
    ],
    mystic_labyrinth: [
        {
            id: "protagonist_mystic_labyrinth_1",
            name: "Lorian the Riddlekeeper",
            emoji: "🔮",
            description:
                "An enigmatic wanderer with a penchant for puzzles, whose wisdom is shadowed by crippling self-doubt.",
            backstory:
                "Years spent deciphering ancient riddles and navigating shifting corridors have left Lorian burdened with uncertainty—every solved puzzle deepens his inner conflict.",
            personality:
                "Calm and perceptive, yet his insecurity and tendency to withdraw socially often hamper decisive action.",
            abilities: ["Puzzle solving", "Arcane knowledge", "Intuition"],
            flaws: ["Insecure", "Overly cautious", "Socially withdrawn"],
        },
        {
            id: "protagonist_mystic_labyrinth_2",
            name: "Seraphine Nightglade",
            emoji: "🌿",
            description:
                "A daring scholar whose passion for the unknown drives her into the labyrinth, despite a turbulent past.",
            backstory:
                "Seraphine's relentless curiosity was born from a personal tragedy. She now risks everything in pursuit of knowledge that might heal old wounds.",
            personality:
                "Determined and curious, though her impulsiveness and unresolved grief sometimes lead her into peril.",
            abilities: ["Historical insight", "Herbal remedies", "Quick thinking"],
            flaws: ["Reckless", "Haunted by grief", "Impulsive"],
        },
    ],
    dragons_ascent: [
        {
            id: "protagonist_dragons_ascent_1",
            name: "Kael Emberborn",
            emoji: "🐲",
            description:
                "A fierce warrior with a mysterious heritage, driven to prove himself while wrestling with inner demons.",
            backstory:
                "Ever since rumors of a dragon bloodline haunted his childhood, Kael has battled not only external foes but also the self-doubt that shadows his every step.",
            personality:
                "Passionate and determined, yet his bouts of anger and stubbornness can lead him astray.",
            abilities: ["Swordsmanship", "Fire resistance", "Combat intuition"],
            flaws: ["Hot-headed", "Stubborn", "Haunted by insecurities"],
        },
        {
            id: "protagonist_dragons_ascent_2",
            name: "Lyra Silverwing",
            emoji: "🦅",
            description:
                "An agile archer with a keen eye and a secret fear of heights, making her climb as much a battle of inner resolve as physical endurance.",
            backstory:
                "Lyra's early life was marked by tragedy when a failed flight shattered her confidence. Now she seeks redemption by facing both the treacherous peaks and her deepest fears.",
            personality:
                "Observant and calm, though her inner conflict and self-criticism often hold her back from fully embracing leadership.",
            abilities: ["Archery", "Stealth", "Eagle-eyed perception"],
            flaws: ["Fearful of heights", "Self-critical", "Reluctant to lead"],
        },
    ],
    shattered_kingdom: [
        {
            id: "protagonist_shattered_kingdom_1",
            name: "Lady Rowan Ashford",
            emoji: "👑",
            description:
                "A resilient noble determined to restore her fractured kingdom, even as self-doubt gnaws at her resolve.",
            backstory:
                "Once destined for greatness, Rowan now fights to unite a divided realm while grappling with the heavy legacy of her family's fall from grace.",
            personality:
                "Diplomatic and compassionate, yet burdened by insecurity and the weight of overwhelming responsibility.",
            abilities: ["Leadership", "Tactical acumen", "Diplomacy"],
            flaws: ["Insecure", "Overburdened by responsibility", "Perfectionist"],
        },
        {
            id: "protagonist_shattered_kingdom_2",
            name: "Darian Ironhart",
            emoji: "⚔️",
            description:
                "A battle-hardened soldier with unwavering loyalty, though the scars of war leave him emotionally distant.",
            backstory:
                "Darian has witnessed the ravages of conflict firsthand. His steely resolve is matched only by the ghosts of lost comrades that haunt him.",
            personality:
                "Stoic and brave, but his rigidity and emotional distance often alienate those around him.",
            abilities: ["Combat prowess", "Survival instincts", "Inspiring courage"],
            flaws: ["Haunted", "Rigid", "Emotionally distant"],
        },
    ],
    echoes_of_the_past: [
        {
            id: "protagonist_echoes_of_the_past_1",
            name: "Thalia Moonwhisper",
            emoji: "🌙",
            description:
                "A sensitive bard whose soulful melodies unveil hidden histories, though her deep empathy can become a burden.",
            backstory:
                "Growing up among ancient ruins filled with forgotten songs, Thalia learned that every note carries both beauty and pain—a lesson that now shapes her every performance.",
            personality:
                "Empathetic and artistic, yet prone to melancholy and paralyzing self-doubt.",
            abilities: ["Musical enchantment", "Historical knowledge", "Empathy"],
            flaws: ["Overly sensitive", "Indecisive", "Easily overwhelmed"],
        },
        {
            id: "protagonist_echoes_of_the_past_2",
            name: "Orin Silvernote",
            emoji: "🎻",
            description:
                "A passionate musician whose soul-searching tunes echo with the weight of lost dreams and personal turmoil.",
            backstory:
                "Once driven by lofty aspirations, a tragic turn of events transformed Orin into a wandering minstrel—each performance a mix of tribute and a cry for redemption.",
            personality:
                "Brooding and introspective, yet his impulsive streak sometimes derails his creative brilliance.",
            abilities: ["Instrument mastery", "Lyrical storytelling", "Charm"],
            flaws: ["Self-destructive", "Insecure", "Impulsive"],
        },
    ],
    cursed_forest: [
        {
            id: "protagonist_cursed_forest_1",
            name: "Corbin Nightshade",
            emoji: "🌑",
            description:
                "A brooding outcast with a knack for surviving the darkest woods, battling inner demons as fiercely as forest curses.",
            backstory:
                "Exiled under mysterious circumstances, Corbin finds a grim mirror of his own turmoil in the cursed forest, where survival demands both grit and sacrifice.",
            personality:
                "Intense and resilient, yet his pessimism and tendency to isolate himself can leave him emotionally scarred.",
            abilities: ["Tracking", "Stealth", "Herbal lore"],
            flaws: ["Distrustful", "Pessimistic", "Self-isolating"],
        },
        {
            id: "protagonist_cursed_forest_2",
            name: "Eira Greenbloom",
            emoji: "🌿",
            description:
                "A gentle healer with deep ties to nature, determined to lift the forest's ancient curse despite her own vulnerabilities.",
            backstory:
                "Once a revered village healer, Eira’s empathy for both people and nature drives her to confront the dark magic infecting the woods—even when her own strength falters.",
            personality:
                "Kind and intuitive, though her naïveté and physical frailty can sometimes leave her exposed to danger.",
            abilities: ["Healing arts", "Botanical knowledge", "Empathy"],
            flaws: ["Naïve", "Overly trusting", "Physically fragile"],
        },
    ],
    times_paradox: [
        {
            id: "protagonist_times_paradox_1",
            name: "Aeron Chronos",
            emoji: "⏱️",
            description:
                "A brilliant scholar tormented by the chaos of fractured time, striving to repair history even as his own heart unravels.",
            backstory:
                "Aeron’s obsessive research into temporal anomalies has cost him dearly. Now, guilt and the pressure of duty push him to attempt what few dare—mending the very fabric of time.",
            personality:
                "Analytical and determined, yet his obsessive nature and emotional detachment leave him isolated.",
            abilities: ["Temporal analysis", "Strategic foresight", "Mathematical genius"],
            flaws: ["Obsessive", "Detached", "Haunted by regrets"],
        },
        {
            id: "protagonist_times_paradox_2",
            name: "Maris Timeweaver",
            emoji: "⏳",
            description:
                "A visionary mystic who senses the ebb and flow of time, though her unpredictable nature leaves her often out of sync with reality.",
            backstory:
                "Touched by a mysterious force that entwined her fate with the currents of time, Maris now battles emotional volatility while trying to harness her power for good.",
            personality:
                "Empathetic and intuitive, yet her erratic moods and impulsiveness can destabilize even the best-laid plans.",
            abilities: ["Chrono-sense", "Mystic intuition", "Temporal healing"],
            flaws: ["Impulsive", "Erratic", "Easily overwhelmed"],
        },
    ],
    celestial_tournament: [
        {
            id: "protagonist_celestial_tournament_1",
            name: "Valor Starwind",
            emoji: "🌟",
            description:
                "A celebrated warrior with the ambition to shine among the stars, though his inner insecurities often dim his brilliance.",
            backstory:
                "Trained from youth in both combat and diplomacy, Valor carries the weight of expectations. His numerous accolades are shadowed by the fear of never truly living up to his legacy.",
            personality:
                "Charismatic and brave, yet his need for approval and bouts of self-doubt frequently undermine his confidence.",
            abilities: ["Martial prowess", "Leadership", "Celestial navigation"],
            flaws: ["Insecure", "Egotistical at times", "Overly competitive"],
        },
        {
            id: "protagonist_celestial_tournament_2",
            name: "Cassia Moonblade",
            emoji: "🗡️",
            description:
                "A nimble fighter with a mysterious past, whose lethal skill is tempered by inner conflict and lingering scars.",
            backstory:
                "Forged in hardship, Cassia battles not only in the arena but also with the ghosts of her past. Every swing of her blade is an effort to break free from old chains.",
            personality:
                "Resilient and resourceful, yet her distrust and impulsiveness sometimes cost her dearly in critical moments.",
            abilities: ["Dual wielding", "Agility", "Stealth"],
            flaws: ["Haunted", "Distrustful", "Impulsive"],
        },
    ],
    beneath_the_iron_sea: [
        {
            id: "protagonist_beneath_the_iron_sea_1",
            name: "Marinus Deepwalker",
            emoji: "🐙",
            description:
                "An intrepid deep-sea explorer driven by curiosity, though his resolve is shadowed by the ghosts of loss.",
            backstory:
                "Captivated by legends of sunken cities and forgotten technologies, Marinus plunges into the abyss seeking both discovery and a way to come to terms with his troubled past.",
            personality:
                "Curious and courageous, yet his introspection and caution often isolate him from his crew.",
            abilities: ["Underwater navigation", "Diving expertise", "Mechanical repair"],
            flaws: ["Reserved", "Overly cautious", "Haunted by loss"],
        },
        {
            id: "protagonist_beneath_the_iron_sea_2",
            name: "Nerida Wavecaller",
            emoji: "🐚",
            description:
                "A spirited marine biologist turned adventurer, whose scientific mind battles lingering superstitions about the ocean's dark mysteries.",
            backstory:
                "When inexplicable phenomena began to plague her coastal town, Nerida abandoned academia for adventure. Now she dives into the iron sea in search of both answers and redemption.",
            personality:
                "Analytical and spirited, though her skepticism and emotional guardedness sometimes hinder her connection with others.",
            abilities: ["Marine biology", "Problem-solving", "Adaptability"],
            flaws: ["Skeptical of magic", "Overly analytical", "Emotionally guarded"],
        },
    ],
    phantom_carnival: [
        {
            id: "protagonist_phantom_carnival_1",
            name: "Jasper Specter",
            emoji: "🎭",
            description:
                "A mysterious drifter drawn to the spectral carnival, whose enigmatic nature conceals deep emotional scars.",
            backstory:
                "Jasper’s past is a mosaic of fragmented memories and lost dreams. The eerie carnival mirrors his internal struggles, making every encounter a bittersweet reflection.",
            personality:
                "Introspective and enigmatic, yet his detached demeanor and self-doubt keep him from fully embracing life.",
            abilities: ["Illusion manipulation", "Quick thinking", "Adaptability"],
            flaws: ["Detached", "Brooding", "Self-doubting"],
        },
        {
            id: "protagonist_phantom_carnival_2",
            name: "Lilith Raven",
            emoji: "🦇",
            description:
                "A rebellious performer with a tragic past, determined to rewrite her fate despite the ever-looming shadows.",
            backstory:
                "Once part of the carnival’s troupe, a catastrophic accident shattered Lilith’s world. Now, she channels the dark energy of the carnival to forge her own path—one marked by both defiance and vulnerability.",
            personality:
                "Bold and creative, yet her impulsiveness and emotional volatility often lead her into dangerous territory.",
            abilities: ["Acrobatics", "Persuasion", "Mystical performance"],
            flaws: ["Impulsive", "Reckless", "Emotionally volatile"],
        },
    ],
};
