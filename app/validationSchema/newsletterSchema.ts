import {z} from 'zod'

export const createNewsletterSchema = z.object({
    nom: z.string().min(1, 'Nom est requis').max(255),
    telephone: z.string().min(1, 'Telephone est requis').max(255),
    email: z.string().min(1, 'Address-email est requis').max(255),
})