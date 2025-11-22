import { z } from 'zod';

const envSchema = z.object({
  // App
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_APP_NAME: z.string().default('CareerCraft AI'),

  // Database
  DATABASE_URL: z.string().min(1, 'Database URL is required'),

  // NextAuth
  NEXTAUTH_SECRET: z.string().min(1, 'NextAuth secret is required'),
  NEXTAUTH_URL: z.string().url(),

  // OAuth Providers
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  GITHUB_CLIENT_ID: z.string().optional(),
  GITHUB_CLIENT_SECRET: z.string().optional(),

  // GCP
  GCP_PROJECT_ID: z.string().optional(),
  GCP_REGION: z.string().default('us-central1'),
  GOOGLE_APPLICATION_CREDENTIALS: z.string().optional(),

  // Google Cloud Storage
  GCS_BUCKET_NAME: z.string().optional(),
  GCS_BUCKET_REGION: z.string().default('us-central1'),

  // Vertex AI
  VERTEX_AI_MODEL: z.string().default('gemini-pro'),
  VERTEX_AI_LOCATION: z.string().default('us-central1'),

  // OpenAI (Fallback)
  OPENAI_API_KEY: z.string().optional(),

  // Stripe
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
  STRIPE_PRICE_ID_BASIC: z.string().optional(),
  STRIPE_PRICE_ID_PRO: z.string().optional(),

  // Email (Optional)
  EMAIL_FROM: z.string().email().optional(),
  SENDGRID_API_KEY: z.string().optional(),

  // Redis (Optional)
  REDIS_URL: z.string().url().optional(),

  // Feature Flags
  FEATURE_COVER_LETTER: z
    .string()
    .transform((val) => val === 'true')
    .optional()
    .default('false'),
  FEATURE_JOB_MATCH: z
    .string()
    .transform((val) => val === 'true')
    .optional()
    .default('false'),
  FEATURE_ATS_SCORE: z
    .string()
    .transform((val) => val === 'true')
    .optional()
    .default('true'),
});

export type Env = z.infer<typeof envSchema>;

let cachedEnv: Env | null = null;

export function validateEnv(): Env {
  // Return cached value if already validated
  if (cachedEnv) {
    return cachedEnv;
  }

  try {
    cachedEnv = envSchema.parse(process.env);
    return cachedEnv;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('❌ Environment validation failed:');
      error.errors.forEach((err) => {
        console.error(`  - ${err.path.join('.')}: ${err.message}`);
      });
      throw new Error('Invalid environment variables');
    }
    throw error;
  }
}

// Export a getter function instead of validating at import time
export function getEnv(): Env {
  return validateEnv();
}
