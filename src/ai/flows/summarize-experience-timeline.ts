'use server';

/**
 * @fileOverview A flow that summarizes a work experience timeline using an LLM.
 *
 * - summarizeExperienceTimeline - A function that takes a work experience timeline as input and returns a summarized version.
 * - SummarizeExperienceTimelineInput - The input type for the summarizeExperienceTimeline function.
 * - SummarizeExperienceTimelineOutput - The return type for the summarizeExperienceTimeline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeExperienceTimelineInputSchema = z.object({
  timeline: z
    .string()
    .describe('A string containing the work experience timeline to summarize.'),
});
export type SummarizeExperienceTimelineInput = z.infer<
  typeof SummarizeExperienceTimelineInputSchema
>;

const SummarizeExperienceTimelineOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summarized version of the work experience timeline.'),
});
export type SummarizeExperienceTimelineOutput = z.infer<
  typeof SummarizeExperienceTimelineOutputSchema
>;

export async function summarizeExperienceTimeline(
  input: SummarizeExperienceTimelineInput
): Promise<SummarizeExperienceTimelineOutput> {
  return summarizeExperienceTimelineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeExperienceTimelinePrompt',
  input: {schema: SummarizeExperienceTimelineInputSchema},
  output: {schema: SummarizeExperienceTimelineOutputSchema},
  prompt: `You are an expert career coach. Please summarize the following work experience timeline, highlighting key achievements and responsibilities.  Be concise and keep the summary to under 200 words.\n\nTimeline: {{{timeline}}}`,
});

const summarizeExperienceTimelineFlow = ai.defineFlow(
  {
    name: 'summarizeExperienceTimelineFlow',
    inputSchema: SummarizeExperienceTimelineInputSchema,
    outputSchema: SummarizeExperienceTimelineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
