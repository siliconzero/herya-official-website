import { z } from 'zod';

export const sendMeSchema = z.object({
    username: z
        .string()
        .min(3, { message: 'Username minimal 3 karakter' })
        .max(30, { message: 'Username maksimal 30 karakter' })
        .regex(/^[a-zA-Z0-9_]+$/, {
            message: 'Username hanya boleh huruf, angka, dan underscore',
        }),
    message: z
        .string()
        .min(13, { message: 'Pesan minimal 13 karakter' })
        .max(500, { message: 'Pesan maksimal 500 karakter' }),
});
