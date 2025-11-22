import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../trpc';
import { prisma } from '@/lib/db';

export const analysisRouter = createTRPCRouter({
  getByResumeId: protectedProcedure
    .input(z.object({ resumeId: z.string() }))
    .query(async ({ ctx, input }) => {
      const analyses = await prisma.analysis.findMany({
        where: {
          resumeId: input.resumeId,
          userId: ctx.session.user.id,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
      return analyses;
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const analysis = await prisma.analysis.findUnique({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
        include: {
          resume: true,
        },
      });
      return analysis;
    }),

  create: protectedProcedure
    .input(
      z.object({
        resumeId: z.string(),
        type: z.enum([
          'COMPREHENSIVE',
          'ATS_SCAN',
          'GRAMMAR_CHECK',
          'KEYWORD_OPTIMIZATION',
          'FORMAT_REVIEW',
        ]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const analysis = await prisma.analysis.create({
        data: {
          userId: ctx.session.user.id,
          resumeId: input.resumeId,
          type: input.type,
          status: 'PENDING',
        },
      });
      return analysis;
    }),
});
