import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create a demo user
  const hashedPassword = await bcrypt.hash('demo123', 10);

  const user = await prisma.user.upsert({
    where: { email: 'demo@careercraft.ai' },
    update: {},
    create: {
      email: 'demo@careercraft.ai',
      name: 'Demo User',
      password: hashedPassword,
      role: 'USER',
    },
  });

  console.log('✅ Created demo user:', user.email);

  // Create a sample resume for the demo user
  const resume = await prisma.resume.create({
    data: {
      userId: user.id,
      fileName: 'sample-resume.pdf',
      fileUrl: 'https://storage.googleapis.com/sample-bucket/sample-resume.pdf',
      fileSize: 102400,
      mimeType: 'application/pdf',
      parsedText: 'Sample resume text content...',
      status: 'READY',
    },
  });

  console.log('✅ Created sample resume:', resume.fileName);

  // Create a sample analysis
  const analysis = await prisma.analysis.create({
    data: {
      userId: user.id,
      resumeId: resume.id,
      type: 'COMPREHENSIVE',
      status: 'COMPLETED',
      overallScore: 85.5,
      strengths: [
        'Strong technical skills section',
        'Clear and concise experience descriptions',
        'Quantifiable achievements',
      ],
      weaknesses: ['Missing action verbs in some bullets', 'Could improve formatting consistency'],
      suggestions: [
        'Add more metrics to demonstrate impact',
        'Consider a professional summary section',
        'Optimize keywords for ATS',
      ],
      keywords: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'AWS'],
      aiModel: 'gemini-pro',
      aiProvider: 'vertex-ai',
      tokensUsed: 1250,
      processingTime: 2300,
    },
  });

  console.log('✅ Created sample analysis with score:', analysis.overallScore);

  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
