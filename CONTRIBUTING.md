# Contributing to CareerCraft AI

Thank you for your interest in contributing to CareerCraft AI! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what's best for the community
- Show empathy towards other community members

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/careercraft-ai.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit with conventional commits
6. Push to your fork
7. Open a Pull Request

## Development Setup

See [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed setup instructions.

## Coding Standards

### TypeScript

- Use TypeScript strict mode
- Avoid `any` types (use `unknown` if needed)
- Define proper interfaces and types
- Use type inference when possible

### React/Next.js

- Use functional components with hooks
- Follow Next.js App Router conventions
- Use Server Components by default, Client Components only when needed
- Implement proper loading and error states

### Styling

- Use Tailwind CSS utility classes
- Follow the design system in `globals.css`
- Use shadcn/ui component patterns
- Keep components responsive

### Code Style

- Run `npm run lint` before committing
- Run `npm run format` to format code
- Follow ESLint rules
- Use meaningful variable and function names

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting, missing semicolons, etc.
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

Examples:
```
feat: add resume upload functionality
fix: resolve authentication redirect issue
docs: update API documentation
refactor: simplify tRPC router structure
```

## Pull Request Process

1. **Update Documentation**: Update README.md or other docs if needed
2. **Add Tests**: Include tests for new features (when test infrastructure exists)
3. **Verify Build**: Ensure `npm run build` succeeds
4. **Check Types**: Run `npm run type-check`
5. **Lint Code**: Run `npm run lint` and fix any issues
6. **Update Changelog**: Note your changes (if applicable)

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Manual testing completed
- [ ] No console errors

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
```

## Areas for Contribution

### High Priority

- **File Upload**: Implement resume upload with GCS integration
- **AI Integration**: Add Vertex AI and OpenAI analysis
- **Resume Parsing**: PDF text extraction and parsing
- **Testing**: Unit and integration tests
- **Error Handling**: Comprehensive error handling
- **Rate Limiting**: Upstash Redis integration

### Medium Priority

- **Additional Pages**: Analytics, resume details, settings
- **UI Components**: More shadcn/ui components
- **Email Notifications**: SendGrid integration
- **Stripe Integration**: Payment processing
- **Admin Dashboard**: Admin features

### Nice to Have

- **Cover Letter Generator**: AI-powered cover letter creation
- **Job Matching**: Match resumes to job descriptions
- **Export Features**: PDF export with improvements
- **Dark Mode**: Theme switching
- **Mobile App**: React Native version

## Testing

### Running Tests

```bash
npm test                 # Run tests
npm run test:ci         # CI mode
npm run test:coverage   # Coverage report
```

### Writing Tests

- Use Jest for unit tests
- Use React Testing Library for component tests
- Test user interactions, not implementation details
- Aim for meaningful coverage, not just high percentages

## Documentation

### Code Documentation

- Add JSDoc comments for complex functions
- Document props with TypeScript interfaces
- Include usage examples for new components

### API Documentation

- Document new tRPC procedures
- Include request/response examples
- Note any breaking changes

## Questions?

- Open an issue for questions
- Join our Discord (link in README)
- Email: support@careercraft.ai

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to CareerCraft AI! 🚀
