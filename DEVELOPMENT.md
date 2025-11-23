# CareerCraft AI - Development Guide

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm 8+
- PostgreSQL 15+ (or Docker for local development)

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/beauNate/careercraft-ai.git
cd careercraft-ai
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
- Add your database connection string
- Set up NextAuth secret (`openssl rand -base64 32`)
- Add OAuth credentials (Google)
- Configure GCP credentials if using Vertex AI

4. **Set up the database**
```bash
# Generate Prisma Client
npm run db:generate

# Push schema to database
npm run db:push

# Seed with demo data
npm run db:seed
```

5. **Start development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Demo Account

After seeding, you can use:
- **Email**: demo@careercraft.ai
- **Password**: demo123

## Development Workflow

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript validation
npm run format       # Format code with Prettier
npm run db:push      # Push schema changes
npm run db:studio    # Open Prisma Studio
```

### Code Quality

- TypeScript strict mode enabled
- ESLint with Next.js config
- Prettier for formatting
- Pre-commit hooks (if configured)

### Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── (auth)/          # Auth pages (signin, signup)
│   ├── api/             # API routes
│   │   ├── auth/        # NextAuth endpoints
│   │   └── trpc/        # tRPC endpoints
│   ├── dashboard/       # Dashboard page
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # UI components (Button, Card, Input, Label)
│   └── providers.tsx   # App providers
├── lib/                 # Utilities & configs
│   ├── trpc/           # tRPC client setup
│   ├── db.ts           # Prisma client
│   └── utils.ts        # Shared utilities
├── server/              # Server-side code
│   ├── api/            # tRPC routers
│   │   ├── routers/    # Feature routers
│   │   ├── root.ts     # Root router
│   │   └── trpc.ts     # tRPC config
│   └── auth.ts         # NextAuth config
└── types/               # TypeScript types
```

## Docker Development

### Using Docker Compose

```bash
# Start all services (app + database + adminer)
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down
```

Access:
- App: http://localhost:3000
- Adminer (DB UI): http://localhost:8080

## Database Management

### Prisma Commands

```bash
# Create a migration
npm run db:migrate -- --name your-migration-name

# Reset database (caution: deletes all data)
npx prisma migrate reset

# Open Prisma Studio
npm run db:studio
```

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Change PORT in `.env` or kill the process using port 3000

2. **Database connection failed**
   - Verify PostgreSQL is running
   - Check DATABASE_URL in `.env`

3. **Prisma Client not found**
   - Run `npm run db:generate`

4. **OAuth errors**
   - Verify OAuth credentials in `.env`
   - Check callback URLs in provider settings

## Testing

```bash
# Run tests (when implemented)
npm test

# Run tests in CI mode
npm run test:ci
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run linting and type checking
4. Test your changes
5. Submit a pull request

## License

MIT © [beauNate](https://github.com/beauNate)
