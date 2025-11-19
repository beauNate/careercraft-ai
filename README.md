# 🚀 CareerCraft AI

AI-powered SaaS platform for resume analysis, enhancement, and optimization. Built with Next.js 14, TypeScript, Vertex AI, and deployed on Google Cloud Platform.

[![Deploy to GCP](https://img.shields.io/badge/Deploy-GCP%20Cloud%20Run-4285F4?logo=google-cloud)](https://cloud.google.com/run)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ⚡ Quick Start

```bash
# Clone repository
git clone https://github.com/beauNate/careercraft-ai.git
cd careercraft-ai

# Install dependencies (requires pnpm)
pnpm install

# Setup environment
cp .env.example .env
# Edit .env with your credentials

# Initialize database
pnpm db:push
pnpm db:seed

# Run development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Architecture

### Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14, React 18, TypeScript, Tailwind CSS, shadcn/ui |
| **Backend** | Next.js API Routes, tRPC v11, Server Actions |
| **Database** | PostgreSQL, Prisma ORM |
| **Auth** | NextAuth.js v5 (Google, GitHub, Credentials) |
| **AI/ML** | Google Vertex AI (Gemini Pro), OpenAI GPT-4 (fallback) |
| **Storage** | Google Cloud Storage |
| **Payments** | Stripe Subscriptions |
| **Deployment** | Docker, GCP Cloud Run, Cloud Build |
| **CI/CD** | GitHub Actions |

### System Design

```
┌─────────────────┐
│   Next.js App   │
│  (App Router)   │
└────────┬────────┘
         │
    ┌────┴────┐
    │  tRPC   │ (Type-safe API)
    └────┬────┘
         │
    ┌────┴────────────────────┐
    │                         │
┌───▼─────┐          ┌───────▼────┐
│ Prisma  │          │   AI Layer │
│   ORM   │          │  (Vertex)  │
└───┬─────┘          └────────────┘
    │
┌───▼──────────┐
│  PostgreSQL  │
└──────────────┘
```

---

## 📁 Project Structure

```
careercraft-ai/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── (auth)/            # Authentication pages
│   │   ├── (dashboard)/       # Protected dashboard
│   │   ├── (admin)/           # Admin panel
│   │   └── api/               # API routes
│   │       ├── auth/          # NextAuth endpoints
│   │       ├── trpc/          # tRPC handler
│   │       ├── resume/        # Resume upload
│   │       └── webhook/       # Stripe webhooks
│   ├── components/
│   │   ├── ui/                # shadcn/ui base components
│   │   ├── resume/            # Resume-specific components
│   │   ├── layout/            # Layout components
│   │   └── forms/             # Form components
│   ├── lib/
│   │   ├── ai/                # AI integration
│   │   │   ├── vertex-client.ts
│   │   │   ├── openai-client.ts
│   │   │   └── ai-adapter.ts
│   │   ├── auth/              # Auth configuration
│   │   ├── db/                # Database client
│   │   ├── resume/            # Resume parsing
│   │   │   ├── pdf-parser.ts
│   │   │   ├── docx-parser.ts
│   │   │   └── ats-analyzer.ts
│   │   ├── storage/           # GCS integration
│   │   └── stripe/            # Stripe integration
│   ├── server/
│   │   ├── trpc.ts            # tRPC configuration
│   │   └── routers/           # API routers
│   │       ├── resume.ts
│   │       ├── user.ts
│   │       ├── ai.ts
│   │       └── admin.ts
│   └── types/                 # TypeScript types
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Seed data
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .github/
│   └── workflows/             # CI/CD pipelines
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
└── docs/                      # Additional documentation
```

---

## 🔐 Environment Variables

Create `.env` file with:

```bash
# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/careercraft"

# NextAuth
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-secret"

# Google Cloud Platform
GCP_PROJECT_ID="your-project-id"
GCP_REGION="us-central1"
GOOGLE_APPLICATION_CREDENTIALS="./service-account.json"
GCS_BUCKET_NAME="careercraft-resumes"
VERTEX_AI_MODEL="gemini-pro"

# OpenAI (Fallback)
OPENAI_API_KEY="sk-your-openai-key"

# Stripe
STRIPE_SECRET_KEY="sk_test_your-key"
STRIPE_PUBLISHABLE_KEY="pk_test_your-key"
STRIPE_WEBHOOK_SECRET="whsec_your-secret"
STRIPE_PRICE_ID_BASIC="price_basic_id"
STRIPE_PRICE_ID_PRO="price_pro_id"
```

---

## 🎯 Features

### ✅ Resume Analysis
- **Multi-format parsing**: PDF, DOCX, TXT
- **AI-powered analysis**: Overall quality score, ATS compatibility
- **Detailed feedback**: Strengths, weaknesses, actionable suggestions
- **Keyword optimization**: Industry-specific keyword matching

### ✅ Job Matching
- **Job description analysis**: Paste any job posting
- **Match scoring**: 0-100 compatibility score
- **Gap identification**: Missing keywords and skills
- **Optimization recommendations**: Specific improvements for target role

### ✅ AI Cover Letter Generation
- **Context-aware**: Based on resume + job description
- **Personalized**: Company research integration
- **Professional tone**: Industry-appropriate language
- **Instant generation**: <30 seconds

### ✅ Subscription Management
- **Free Tier**: 3 resume analyses
- **Basic**: 10 analyses/month ($9.99)
- **Pro**: 50 analyses/month ($29.99)
- **Stripe integration**: Automated billing

### ✅ Admin Dashboard
- **User management**: View, edit, delete users
- **Analytics**: Usage stats, revenue metrics
- **System health**: Performance monitoring

---

## 🚀 Deployment

### Local Development

```bash
# Start PostgreSQL (Docker)
docker-compose up -d postgres

# Run migrations
pnpm db:push

# Seed database
pnpm db:seed

# Start dev server
pnpm dev
```

### Docker Deployment

```bash
# Build image
docker build -t careercraft-ai .

# Run container
docker run -p 3000:3000 --env-file .env careercraft-ai
```

### GCP Cloud Run

```bash
# Authenticate
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

# Deploy
gcloud run deploy careercraft-ai \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 2Gi \
  --cpu 2 \
  --max-instances 10
```

Or use Cloud Build:

```bash
gcloud builds submit --config cloudbuild.yaml
```

---

## 📊 Database Schema

### Core Models

**User**
- Authentication (email, OAuth)
- Role-based access (USER, ADMIN)
- Subscription relationship

**Resume**
- File metadata (URL, size, format)
- Analysis results (scores, suggestions)
- Job matching data
- Status tracking

**Subscription**
- Stripe integration
- Usage tracking (analyses count/limit)
- Plan tiers (FREE, BASIC, PRO)

**CoverLetter**
- Generated content
- Resume + job context
- Version history

---

## 🔌 API Reference

### tRPC Routers

#### Resume Router

```typescript
// Get all resumes
trpc.resume.getAll.useQuery()

// Get by ID
trpc.resume.getById.useQuery({ id: 'resume-id' })

// Create
trpc.resume.create.useMutation({
  title, content, rawText, fileUrl
})

// Analyze
trpc.resume.analyze.useMutation({ id })

// Optimize for job
trpc.resume.optimizeForJob.useMutation({
  id, jobDescription
})

// Delete
trpc.resume.delete.useMutation({ id })
```

#### AI Router

```typescript
// Generate cover letter
trpc.ai.generateCoverLetter.useMutation({
  resumeId, jobDescription, company
})

// Improve section
trpc.ai.improveSection.useMutation({
  section, context
})
```

#### User Router

```typescript
// Get profile
trpc.user.getProfile.useQuery()

// Update profile
trpc.user.updateProfile.useMutation({ name, email })

// Get stats
trpc.user.getStats.useQuery()
```

### REST Endpoints

**POST** `/api/resume/upload`
- Upload resume file
- Returns parsed text + resume ID

**POST** `/api/webhook/stripe`
- Stripe webhook handler
- Processes subscription events

---

## 🧪 Testing

```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Type checking
pnpm type-check

# Linting
pnpm lint
```

---

## 🛠️ Development

### Prerequisites
- Node.js 18+
- pnpm 8+
- PostgreSQL 15+
- Google Cloud SDK
- Docker (optional)

### Setup GCP

```bash
# Enable APIs
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  storage.googleapis.com \
  aiplatform.googleapis.com

# Create service account
gcloud iam service-accounts create careercraft-sa

# Grant permissions
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:careercraft-sa@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/run.admin"

# Create key
gcloud iam service-accounts keys create service-account.json \
  --iam-account=careercraft-sa@YOUR_PROJECT_ID.iam.gserviceaccount.com
```

### Setup Stripe

1. Create account at [stripe.com](https://stripe.com)
2. Get API keys from Dashboard
3. Create products & prices
4. Setup webhook endpoint: `https://your-domain.com/api/webhook/stripe`
5. Add webhook secret to `.env`

---

## 📚 Additional Documentation

- [Architecture Deep Dive](./docs/ARCHITECTURE.md)
- [API Documentation](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Google Cloud](https://cloud.google.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [tRPC](https://trpc.io/)

---

## 📧 Contact

- **GitHub**: [@beauNate](https://github.com/beauNate)
- **Issues**: [GitHub Issues](https://github.com/beauNate/careercraft-ai/issues)

---

**Built with ❤️ for job seekers everywhere**
