# Personal Portfolio Website

## Overview

This is a modern personal portfolio website built as a full-stack React application showcasing professional experience, skills, education, and projects. The site features a clean, responsive design with a comprehensive tech stack including React frontend, Express.js backend, PostgreSQL database with Drizzle ORM, and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Modular section-based components (HeroSection, ExperienceSection, SkillsSection, etc.)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful API structure with `/api` prefix routing
- **Error Handling**: Centralized error middleware for consistent error responses
- **Request Logging**: Custom middleware for API request logging and performance monitoring
- **Development**: Hot module replacement via Vite integration in development mode

### Data Storage Solutions
- **Database**: PostgreSQL with connection via @neondatabase/serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database schema migrations
- **Storage Interface**: Abstract storage interface with in-memory implementation for development
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL store
- **User Schema**: Defined user model with username/password authentication
- **Storage Layer**: Abstracted user management through IStorage interface
- **Security**: Prepared for secure session handling and user authentication

### Development and Deployment
- **Build Process**: Separate client and server builds using Vite and esbuild
- **Development Server**: Integrated Vite dev server with Express API proxy
- **Environment Configuration**: Environment-based configuration for development/production
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Replit Integration**: Optimized for Replit development environment with specific plugins

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **Backend**: Express.js, TypeScript execution via tsx
- **Database**: PostgreSQL via Neon serverless, Drizzle ORM and Drizzle Kit

### UI and Styling
- **Component Library**: Complete shadcn/ui component suite built on Radix UI
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Font Awesome for comprehensive icon coverage
- **Fonts**: Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)

### Development and Build Tools
- **Build Tools**: Vite for frontend, esbuild for backend bundling
- **Development**: Replit-specific plugins for cartographer and dev banner
- **Utilities**: date-fns for date manipulation, nanoid for ID generation, clsx and class-variance-authority for styling

### State and Data Management
- **Client State**: TanStack React Query for server state caching and synchronization
- **Form Handling**: React Hook Form with Hookform Resolvers for validation
- **Validation**: Zod schema validation with Drizzle-Zod integration

### Additional Integrations
- **Carousel**: Embla Carousel React for image/content carousels
- **Command Interface**: cmdk for command palette functionality
- **Development Enhancement**: Runtime error overlay and development banners for Replit environment