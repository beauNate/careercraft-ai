'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-muted/50">
      <header className="border-b bg-card">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold text-primary">🚀 CareerCraft AI</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">{session.user?.email}</span>
            <Button variant="outline" onClick={() => signOut({ callbackUrl: '/' })}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold">
            Welcome back, {session.user?.name || 'User'}!
          </h2>
          <p className="text-muted-foreground">
            Upload a resume to get started with AI-powered analysis
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
              📤
            </div>
            <h3 className="mb-2 text-lg font-semibold">Upload Resume</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Upload your resume in PDF format for AI analysis
            </p>
            <Button className="w-full">Upload New Resume</Button>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
              📊
            </div>
            <h3 className="mb-2 text-lg font-semibold">My Resumes</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              View and manage your uploaded resumes
            </p>
            <Button variant="outline" className="w-full">
              View Resumes
            </Button>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
              🎯
            </div>
            <h3 className="mb-2 text-lg font-semibold">Analytics</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Track your resume improvements over time
            </p>
            <Button variant="outline" className="w-full">
              View Analytics
            </Button>
          </div>
        </div>

        <div className="mt-8 rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-xl font-semibold">Recent Activity</h3>
          <p className="text-muted-foreground">No recent activity. Upload a resume to begin!</p>
        </div>
      </main>
    </div>
  );
}
