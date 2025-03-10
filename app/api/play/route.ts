import { generateObject } from 'ai';
import { groq } from '@ai-sdk/groq';
import { z } from 'zod';

const gameResponseSchema = z.object({
  adjustedAction: z.string().describe('The last action adjusted based on the dice roll and written from the perspective of the protagonist.'),
  narrative: z.string().describe('A detailed description of the scene.'),
  options: z.array(z.string()).length(4).describe('An array of four action options.'),
});

const determineRollQuality = (value: number) => {
  if (value === 1) return "a critical-fail"
  if (value >= 2 && value <= 7) return "somewhat negative"
  if (value >= 8 && value <= 13) return "neutral"
  if (value >= 14 && value <= 19) return "somewhat positive"
  if (value === 20) return "a critical-success"
  return null
}

export async function POST(req: Request) {
  const { 
    adventure, 
    protagonist, 
    gameHistory, 
    diceResult,
    currentNarrative,
    selectedOption
  } = await req.json();

  const prompt = `Narrator (AI): ${currentNarrative}\n${protagonist.name} (Player): ${selectedOption}`;

  const rollQuality = determineRollQuality(diceResult);

  const gameHistoryText = gameHistory.map((entry: { role: "narrator" | "player"; message: string }) => {
    if (entry.role === 'narrator') {
      return `Narrator (AI): ${entry.message}`;
    } else {
      return `${protagonist.name} (Player): ${entry.message}`;
    }
  }).join('\n\n');

  console.log('Game history:', gameHistoryText);

  const systemPrompt = `
  # ROLE
  You are an expert narrative generator for a text-based RPG.
  
    # TASK
  Generate a JSON object that includes:
  1. **Adjusted User Action:** Reword the player's last action to reflect the impact of the dice roll. For example, if the roll indicates a critical failure, modify the action to show an embarrassing or disastrous outcome. The adjusted action must be written from the perspective of the protagonist.
  2. **Narrative:** Provide a narrative that naturally flows and follows the adjusted action. This narrative should be describe the consequences of the protagonist's action, setting the stage for what happens next and meaningfully progressing the story. Keep the narrative concise and adjust the tone and details based on the dice roll (but do not mention the dice roll in the narrative).
  3. **Action Options:** Offer exactly four new action choices for the player, inspired by the narrative.
  
  # DICE ROLL DETAILS
  - **Roll:** ${diceResult} out of 20  
  - **Quality:** ${rollQuality}  
  Use this dice outcome to adjust the tone and details of the narrative. For instance, a critical success should result in a very favorable outcome, whereas a critical failure should indicate a disastrous outcome.  
  
  # ADVENTURE CONTEXT
  - **Title:** ${adventure.title}
  - **Description:** ${adventure.description}
  - **Genre:** ${adventure.genre.join(', ')}
  - **Setting:** ${adventure.setting}
  - **Tone/Style:** ${adventure.toneStyle}
  - **Difficulty:** ${adventure.difficulty}
  - **Narrator Personality:** ${adventure.narratorPersonality}
  - **Suggested Themes:** ${adventure.suggestedThemes.join(', ')}
  - **Starting Prompt:** ${adventure.initialStoryPrompt}
  
  # PROTAGONIST CONTEXT
  - **Name:** ${protagonist.name}
  - **Description:** ${protagonist.description}
  - **Backstory:** ${protagonist.backstory}
  - **Personality:** ${protagonist.personality}
  - **Abilities:** ${protagonist.abilities.join(', ')}
  - **Flaws:** ${protagonist.flaws.join(', ')}
  
  # GAME HISTORY CONTEXT
  ${gameHistoryText}
  
  # RESPONSE FORMAT
  Return a JSON object that exactly adheres to the provided schema with no additional text.
  `.trim();

  const result = await generateObject({
    model: groq('llama-3.3-70b-versatile'),
    system: systemPrompt,
    prompt: prompt,
    schema: gameResponseSchema,
  });

  return result.toJsonResponse();
}