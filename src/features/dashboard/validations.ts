import { z } from "zod";

// User Profile Update
export const profileSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required!" }).optional(),
  last_name: z.string().min(1, { message: "Last name is required!" }).optional(),
  home_address: z.string().min(1, { message: "Home address is required!" }).optional(),
  city: z.string().min(1, { message: "City is required!" }).optional(),
  state: z.string().min(1, { message: "State is required!" }).optional(),
  country: z.string().min(1, { message: "Country is required!" }).optional(),
  postal_code: z.string().min(1, { message: "Phone number is required!" }).optional(),
  house_number: z.string().min(1, { message: "Phone number is required!" }).optional(),
});

export type ProfileType = z.infer<typeof profileSchema>;


// User KYC update (BVN)
export const kycSchema = z.object({
  id_type: z.string().min(1, {message: 'ID Type is required!'}).optional(),
  id_no: z.string()
  .min(11, { message: 'ID Number must be up to 11 characters!' })
  .max(11, { message: 'ID Number must not be more than 11 characters!' })
  .optional(),
});

export type KYCType = z.infer<typeof kycSchema>;
