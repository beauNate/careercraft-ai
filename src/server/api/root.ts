import { createTRPCRouter } from './trpc';
import { resumeRouter } from './routers/resume';
import { analysisRouter } from './routers/analysis';

export const appRouter = createTRPCRouter({
  resume: resumeRouter,
  analysis: analysisRouter,
});

export type AppRouter = typeof appRouter;
