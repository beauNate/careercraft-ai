import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">🚀 CareerCraft AI</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight">
            Transform Your Resume with AI
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            Get instant AI-powered analysis, ATS scoring, and expert suggestions to land your
            dream job. Built with cutting-edge Vertex AI technology.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link href="/signup">
              <Button size="lg" className="text-lg">
                Start Free Analysis
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        <section className="border-t bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 text-center">
                <div className="mb-4 text-4xl">📄</div>
                <h3 className="mb-2 text-xl font-semibold">PDF Parsing</h3>
                <p className="text-muted-foreground">
                  Upload your resume and let AI extract and analyze every detail
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <div className="mb-4 text-4xl">🎯</div>
                <h3 className="mb-2 text-xl font-semibold">ATS Scoring</h3>
                <p className="text-muted-foreground">
                  Get compatibility scores and optimize for applicant tracking systems
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <div className="mb-4 text-4xl">💡</div>
                <h3 className="mb-2 text-xl font-semibold">Smart Suggestions</h3>
                <p className="text-muted-foreground">
                  Receive actionable recommendations powered by Vertex AI
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 CareerCraft AI. Built with Next.js, TypeScript, and Vertex AI.</p>
        </div>
      </footer>
    </div>
  );
}
