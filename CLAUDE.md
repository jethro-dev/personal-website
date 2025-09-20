# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start Next.js development server on http://localhost:3000
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks

### Dependencies
This project uses `pnpm` as the package manager. Use `pnpm install` to install dependencies.

## Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router (TypeScript)
- **Styling**: Tailwind CSS with custom animations
- **CMS**: Sanity Studio (headless CMS) integrated at `/admin` route
- **UI Components**: Radix UI primitives with shadcn/ui patterns
- **Email**: Nodemailer with React Email templates
- **Forms**: React Hook Form with Zod validation
- **Animation**: Framer Motion for animations
- **3D Graphics**: Spline for 3D models

### Project Structure

#### Route Groups
- `app/(site)/` - Main website pages
- `app/(studio)/` - Sanity Studio admin interface at `/admin`

#### Key Directories
- `components/` - React components including UI components (`components/ui/`)
- `lib/` - Utility functions and Sanity client configuration
- `schemas/` - Sanity schema definitions for CMS content types
- `action/` - Server actions (e.g., email sending)
- `providers/` - React context providers (theme provider)
- `hooks/` - Custom React hooks

### Data Flow
1. **Content Management**: Sanity Studio provides a CMS interface for managing blogs, projects, experiences, and page sections
2. **Data Fetching**: Content is fetched from Sanity using the client in `lib/sanity.ts` and utility functions in `lib/sanity-utils.ts`
3. **Server Actions**: Form submissions (like contact forms) are handled via server actions in the `action/` directory
4. **Theming**: Dark/light mode is managed through `next-themes` with a ThemeProvider wrapper

### Environment Variables
The project requires Sanity environment variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

### Content Types
Main Sanity schema types include:
- `blog` - Blog posts with rich text content
- `project` - Portfolio projects
- `experience` - Work experience timeline items
- `skill` - Technical skills
- Various section schemas for page content management