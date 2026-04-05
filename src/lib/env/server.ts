import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    SANITY_STUDIO_DATASET: z.enum(['production', 'development']),
    SANITY_STUDIO_PROJECT_ID: z.string().min(1),
    SANITY_READ_WRITE_TOKEN: z.string().startsWith('sk').min(1),
  },
  experimental__runtimeEnv: process.env,
});
