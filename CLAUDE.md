# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the Next.js development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code quality issues

## Architecture Overview

This is a personal portfolio website built with Next.js 14 using the App Router architecture, integrated with Sanity CMS for content management.

### Core Structure

- **App Router**: Uses the new Next.js App Router with layouts in `app/(site)/` and `app/(studio)/`
- **Sanity Integration**: Content management through Sanity Studio mounted at `/admin`
- **Dual Layout System**: 
  - Main site layout with navbar, footer, and smooth scrolling wrapper
  - Studio layout for content management interface

### Key Directories

- `app/(site)/` - Main website pages and layout
- `app/(studio)/admin/` - Sanity Studio interface
- `components/` - React components including UI library and custom components
- `lib/` - Utility functions and Sanity client configuration
- `schemas/` - Sanity schema definitions for content types
- `providers/` - React context providers (theme)
- `action/` - Server actions (email functionality)

### Content Management

The site uses Sanity CMS with the following key schemas:
- Blog posts with rich text content
- Project/portfolio items
- About section content
- Experience and skills data
- Hero section configuration

### Styling & UI

- Tailwind CSS for styling
- Radix UI components for accessibility
- Framer Motion for animations
- Custom UI components in `components/ui/`
- Theme switching with next-themes
- Smooth scrolling with react-lenis

### Email Integration

Server action in `action/send-email.ts` handles contact form submissions using React Email templates and Nodemailer.

### Development Notes

- Sanity client is configured in `lib/sanity.ts` with project ID and dataset
- Environment variables needed: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`
- Uses TypeScript throughout with custom type definitions in `typings.ts`
- Responsive design with mobile-first approach