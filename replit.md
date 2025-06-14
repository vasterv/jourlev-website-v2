# JOURLEV - Empathy-Driven Product Strategy Platform

## Overview

JOURLEV is a full-stack web application built as an empathy-driven product strategy consultancy platform. The application showcases services, team members, insights/blog posts, and includes content management capabilities. It features a modern React frontend with a clean black and green brand aesthetic, backed by an Express.js server with PostgreSQL database integration.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server:

- **Frontend**: React with TypeScript, built using Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Deployment**: Optimized for Replit with autoscale deployment

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite build system
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom JOURLEV brand variables
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for NeonDB serverless)
- **Session Management**: Built-in session handling
- **API**: RESTful API design with proper error handling

### Data Model
The application uses the following main entities:
- **Users**: Authentication and user management
- **Pages**: Dynamic content management for site pages
- **Posts**: Blog posts for the insights section
- **Contact Submissions**: Form submissions from contact page
- **Tastemaker Articles**: Curated articles with metadata

### UI/UX Design System
- **Brand Colors**: Black background with kelly green (#00C66F) accent
- **Typography**: Inter font family with custom font-display class
- **Components**: Consistent spacing system with CSS custom properties
- **Layout**: Responsive design with mobile-first approach

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with database
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Data flows back through the API to update UI state
5. **Real-time Updates**: Query invalidation ensures fresh data display

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **Database**: Drizzle ORM, NeonDB serverless client
- **UI Framework**: Radix UI components, Tailwind CSS
- **State Management**: TanStack Query
- **Validation**: Zod schema validation
- **Date Handling**: date-fns for date manipulation

### Development Tools
- **Build**: Vite with TypeScript plugin
- **Styling**: PostCSS with Tailwind and Autoprefixer
- **Type Checking**: TypeScript with strict configuration
- **Linting**: ESBuild for production bundling

### Third-party Integrations
- **Notion API**: Integration ready for content management
- **Asset Management**: Static assets stored in attached_assets directory
- **Domain Management**: Cloudflare integration setup for custom domain

## Deployment Strategy

The application is configured for Replit deployment with the following setup:

### Build Process
- **Development**: `npm run dev` runs both frontend and backend concurrently
- **Production Build**: `npm run build` creates optimized frontend and server bundles
- **Start Command**: `npm run start` runs the production server

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Sessions**: Session management configured for production
- **Static Assets**: Served from dist/public directory in production

### Domain Setup
- **Primary Domain**: jourlev.com with Cloudflare proxy configuration
- **Replit URL**: jourlev-mvp-vanessa63.replit.app as fallback
- **Redirects**: Automatic redirects from custom domain to working deployment

### Performance Optimizations
- **Code Splitting**: Vite handles automatic code splitting
- **Asset Optimization**: Images and static assets optimized for web
- **Caching**: Query caching via TanStack Query
- **Bundle Analysis**: ESBuild optimization for production

## Changelog
- June 14, 2025: Initial setup with database-backed content management
- June 14, 2025: Applied APA Title Case capitalization across all headlines
- June 14, 2025: Fixed line break issues on About page headlines with optimal spacing
- June 14, 2025: Widened About page CTA card and fixed Services page banner text breaks
- June 14, 2025: Optimized Services page spacing for tighter, launch-ready layout
- June 14, 2025: Enhanced homepage to prominently showcase AI-powered approach with hero-level Zane section and bold navigation links
- June 14, 2025: Streamlined homepage spacing for launch-ready, tight layout while maintaining Zane section prominence
- June 14, 2025: Refined Zane section to balanced prominence and fixed headline/CTA redundancy
- June 14, 2025: Fixed homepage subheadline wording for better flow
- June 14, 2025: Improved homepage spacing and readability - increased icon description text size and added space above empathy quote
- June 14, 2025: Enhanced service card icons from small to large size for better visual impact and prominence
- June 14, 2025: Restored sophisticated design balance - reduced oversized buttons, icons, and links while maintaining readability and adding proper section spacing
- June 14, 2025: Added proper spacing between "Let's Begin the Journey" button and human/robot icons below
- June 14, 2025: Improved services section with proper button styling and refined CTA text from awkward phrases to clean, action-oriented language
- June 14, 2025: Fixed "Explore All Services" button centering to align properly with service cards grid layout
- June 14, 2025: Fixed team page bio text colors using muted-foreground for readability and updated email functionality with pre-populated template
- June 14, 2025: Restored Tastemakers 2025 content from original specification with proper article data and card-based design
- June 14, 2025: Commented out Tastemakers section on Insights page for recuration while preserving admin functionality
- June 14, 2025: Restored homepage Zane section with proper "See How We Collaborate" CTA text and refined styling
- June 14, 2025: Completed database-driven blog system with 6 posts fully manageable through admin panel
- June 14, 2025: Finalized email functionality with pre-populated subject and body template
- June 14, 2025: Site ready for deployment with complete content management capabilities

## User Preferences

Preferred communication style: Simple, everyday language.