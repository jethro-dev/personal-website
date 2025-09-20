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
- **Framework**: Next.js 15 with App Router (TypeScript)
- **React**: React 19 (latest stable)
- **Styling**: Tailwind CSS with custom animations
- **CMS**: Sanity Studio (headless CMS) integrated at `/admin` route
- **UI Components**: Radix UI primitives with shadcn/ui patterns
- **Email**: Nodemailer with React Email templates
- **Forms**: React Hook Form with Zod validation
- **Animation**: Motion v12 (motion.dev) for React 19 compatibility
- **3D Graphics**: Temporarily disabled (Spline incompatible with React 19)

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

## Migration History

### Next.js 15 & React 19 Migration (2025-09)
Successfully migrated from Next.js 14 to 15 and React 18 to 19 with the following changes:

#### Breaking Changes Addressed
1. **Async Params in Dynamic Routes**: Next.js 15 now requires params to be awaited in dynamic routes
   - Pattern: `const { slug } = await params;` in `[slug]/page.tsx`

2. **Animation Library Migration**: Migrated from framer-motion to Motion v12
   - framer-motion incompatible with React 19
   - Motion v12 (motion.dev) provides full React 19 support
   - Updated all imports from 'framer-motion' to 'motion/react'

3. **Hydration Fixes**: Updated next-themes from 0.2.1 to 0.4.6
   - Added `suppressHydrationWarning` to root html element
   - Resolved theme hydration mismatches

4. **TypeScript Fixes**: Updated useRef types throughout components
   - Pattern: `useRef<HTMLDivElement>(null)` with proper element typing

### Known Issues

#### Spline 3D Incompatibility
- **Issue**: @splinetool/react-spline not compatible with React 19
- **Error**: `TypeError: Cannot read properties of undefined (reading 'ReactCurrentDispatcher')`
- **Status**: Component temporarily disabled in `components/cubic-model.tsx`
- **Future Plan**: Migrate to React Three Fiber v9 when ready

## Upcoming Features

### Internationalization (i18n)
Planning to implement multi-locale support with:
- **Supported Locales**:
  - English (en) - Default
  - Traditional Chinese (zh-TW)
  - Simplified Chinese (zh-CN)
  - Spanish (es)
  - Japanese (ja)
  - Arabic (ar) with RTL support

- **Architecture**:
  - next-intl for UI string translations
  - @sanity/document-internationalization for CMS content
  - Locale-based routing with [locale] segments
  - Language switcher in navbar

### 3D Graphics Future
- **Plan**: Migrate to React Three Fiber v9 (React 19 compatible)
- **Libraries**: @react-three/fiber, @react-three/drei, three
- **Timeline**: After i18n implementation complete