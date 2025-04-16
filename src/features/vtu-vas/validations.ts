import { z } from "zod";

// Airtime purchase
export const airtimeSchema = z.object({
  phone_number: z.string().min(1, {message: 'ID Type is required!'}),
  amount: z.string()
});

export type AirtimeType = z.infer<typeof airtimeSchema>;


// Internet data purchase
export const internetDataSchema = z.object({
  phone_number: z.string().min(1, {message: 'ID Type is required!'}),
});

export type InternetDataType = z.infer<typeof internetDataSchema>;
