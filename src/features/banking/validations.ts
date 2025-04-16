import { z } from "zod";

export const paystackFundingInitializationSchema = z.object({
    amount: z.string().min(1, { message: "Amount must be at least 1 number long!" }),
});

export type PaystackFundingInitializationType = z.infer<typeof paystackFundingInitializationSchema>;
