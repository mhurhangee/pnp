import { generateObject } from 'ai';
import { groq } from '@ai-sdk/groq';
import { z } from 'zod';

const gameResponseSchema = z.object({
  narrative: z.string().describe('A detailed description of the scene.'),
  options: z.array(z.string()).length(4).describe('An array of four action options.'),
});

export async function POST(req: Request) {
  const { adventure, protagonist, gameHistory } = await req.json();

  const gameHistoryText = gameHistory.map((entry: { narrative?: string; selectedOption?: string } | string) => {
    if (typeof entry === 'object' && 'narrative' in entry && 'selectedOption' in entry) {
      return `NARRATOR: ${entry.narrative}\n${protagonist.name}: ${entry.selectedOption}`;
    } else {
      return String(entry);
    }
  }).join('\n\n');

  console.log('Game history:', gameHistoryText);

  const prompt = `
# ROLE
You are a creative narrative generator for a text-based RPG.

# TASK
Generate a narrative and four action options for the protagonist based on the current scene in the adventure.

# CONTEXT
## ADVENTURE CONTEXT
- **Title:** ${adventure.title}
- **Description:** ${adventure.description}
- **Genre:** ${adventure.genre.join(', ')}
- **Setting:** ${adventure.setting}
- **Tone/Style:** ${adventure.toneStyle}
- **Difficulty:** ${adventure.difficulty}
- **Narrator Personality:** ${adventure.narratorPersonality}
- **Suggested Themes:** ${adventure.suggestedThemes.join(', ')}
- **Starting Prompt:** ${adventure.initialStoryPrompt}

## PROTAGONIST CONTEXT
- **Name:** ${protagonist.name}
- **Description:** ${protagonist.description}
- **Backstory:** ${protagonist.backstory}
- **Personality:** ${protagonist.personality}
- **Abilities:** ${protagonist.abilities.join(', ')}
- **Flaws:** ${protagonist.flaws.join(', ')}

## GAME PROGRESSION
- **Game History:** ${gameHistory.map((entry: { narrative?: string; selectedOption?: string } | string) => {
  if (typeof entry === 'object' && 'narrative' in entry && 'selectedOption' in entry) {
    return `NARRATOR: ${entry.narrative}\n${protagonist.name}: ${entry.selectedOption}`;
  } else {
    return String(entry);
  }
}).join('\n\n')}

# RESPONSE FORMAT
Your output must be a JSON object that follows the given schema exactly. 

Based on the scene above, generate a narrative describing the current moment in the adventure and four action options for the player.

Respond with a JSON object that exactly follows this schema:
  {
    "narrative": "A detailed description of the scene.",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"]
  }
  `.trim();

  const result = await generateObject({
    model: groq('llama-3.3-70b-versatile'),
    system: prompt,
    prompt: `You are a creative narrative generator for a text-based RPG. Your output must be a JSON object that follows the given schema exactly.`,
    schema: gameResponseSchema,
  });

  return result.toJsonResponse();
}