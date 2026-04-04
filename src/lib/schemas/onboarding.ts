import { z } from 'zod';

export const businessStepSchema = z.object({
  businessName: z.string().min(2),
  legalName: z.string().min(2),
  gstin: z.string().optional(),
});

export const contactStepSchema = z.object({
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
});

export const taxBankStepSchema = z.object({
  pan: z.string().min(5).optional(),
  bankAccount: z.string().min(4).optional(),
  ifsc: z.string().optional(),
});

export type BusinessStep = z.infer<typeof businessStepSchema>;
export type ContactStep = z.infer<typeof contactStepSchema>;
export type TaxBankStep = z.infer<typeof taxBankStepSchema>;
