'use server';

/**
 * @fileOverview A flow for sending a contact email.
 *
 * - sendContactEmail - A function that sends an email with the contact form data.
 * - ContactFormInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { personalData } from '@/lib/data';
import { Resend } from 'resend';
import { z } from 'genkit';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  message: z.string().describe('The content of the message.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export async function sendContactEmail(input: ContactFormInput): Promise<void> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // This must be a verified domain on Resend
      to: personalData.contact.email,
      subject: `New message from ${input.name} via your portfolio`,
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${input.name}</p>
        <p><strong>Email:</strong> ${input.email}</p>
        <p><strong>Message:</strong></p>
        <p>${input.message}</p>
      `,
    });
  }
);
