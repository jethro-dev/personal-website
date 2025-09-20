# Jethro Au - Personal Website

A modern, performant personal portfolio website built with Next.js 15, React 19, and Sanity CMS.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **React**: React 19 (latest stable)
- **Styling**: Tailwind CSS
- **CMS**: [Sanity Studio](https://www.sanity.io/)
- **Animation**: Motion v12 (motion.dev)
- **UI Components**: Radix UI + shadcn/ui
- **Package Manager**: pnpm

## Requirements

- Node.js 18.17 or later
- pnpm 8.0 or later

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
```

### 4. Run the development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 5. Access Sanity Studio
Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) to manage content through Sanity Studio.

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
app/
├── (site)/          # Main website routes
├── (studio)/        # Sanity Studio admin
└── api/             # API routes

components/
├── ui/              # Reusable UI components
└── ...              # Feature components

lib/                 # Utilities and configurations
schemas/             # Sanity content schemas
```

## Recent Updates

### Framework Migration (2025-09)
- Upgraded to Next.js 15 with async params support
- Migrated to React 19
- Replaced framer-motion with Motion v12 for React 19 compatibility
- Temporarily disabled Spline 3D components (awaiting React 19 support)

### Upcoming Features
- **Internationalization**: Multi-language support (EN, ZH-TW, ZH-CN, ES, JA, AR)
- **3D Graphics**: Migration to React Three Fiber planned

## Development Notes

- This project uses pnpm as the package manager
- Sanity Studio is integrated at the `/admin` route
- Dark/light theme support via next-themes
- Form submissions handled via server actions

## License

MIT

## Contact

For questions or collaboration, please visit [jethroau.com](https://jethroau.com)