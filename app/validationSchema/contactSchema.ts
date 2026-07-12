import {z} from 'zod'

export const createContactSchema = z.object({
    nom: z.string().min(1, 'Nom est requis').max(255),
    email: z.string().min(1, 'Address-email est requis').max(255),
    school: z.string().min(1, 'École / Établissement est requis').max(255),
    message: z.string().min(1, 'Message est requis').max(255),
})