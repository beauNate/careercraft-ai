import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../trpc';
import { prisma } from '@/lib/db';

export const resumeRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(10),
      })
    )
    .query(async ({ ctx, input }) => {
      const resumes = await prisma.resume.findMany({
        where: {
          userId: ctx.session.user.id,
        },
        take: input.limit,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          analyses: {
            take: 1,
            orderBy: {
              createdAt: 'desc',
            },
          },
        },
      });
      return resumes;
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const resume = await prisma.resume.findUnique({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
        include: {
          analyses: {
            orderBy: {
              createdAt: 'desc',
            },
          },
        },
      });
      return resume;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await prisma.resume.delete({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
      });
      return { success: true };
    }),
});
