# AGENTS.md - Quick Reference for AI Coding Agents

## Build & Test Commands
```bash
npm run dev          # Start dev server (port 3001) + run `npx convex dev` in separate terminal
npm run build        # Production build (auto-runs convex codegen)
npm run lint         # ESLint check
npm run lint:strict  # Strict linting for pre-deployment
npm run type-check   # Strict TypeScript checking
npm test             # Run all tests
npm test -- path/to/test.ts  # Run single test file
npm run validate     # Full pre-deployment validation
```

## Code Style & Conventions
- **Error Handling**: Use NeverThrow Result pattern for ALL new code (`import { ok, err } from 'neverthrow'`)
- **Imports**: Use `@/` alias for src imports (e.g., `import { tryCatch } from '@/lib/results'`)
- **Components**: Place in `src/components/`, use shadcn/ui components from `src/components/ui/`
- **Types**: Database types auto-generated in `convex/_generated/`, custom types in `src/types/`
- **Forms**: Use `ValidatedInput`, `CurrencyInput`, `PercentageInput` with react-imask
- **Convex**: All data operations through `convex/*.ts`, use `useQuery`/`useMutation` hooks
- **Testing**: Write tests for new features, use convex-test for backend, Vitest for frontend
- **Security**: Sanitize all inputs using functions from `convex/inputSanitization.ts`
- **Naming**: camelCase for functions/variables, PascalCase for components/types, kebab-case for files