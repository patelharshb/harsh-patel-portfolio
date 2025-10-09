# Harsh Patel - Portfolio Website

A modern, responsive portfolio website showcasing software engineering experience, technical skills, and finance interests. Built with React, TypeScript, and a full-stack architecture designed to attract recruiters and demonstrate professional capabilities.

## 🌟 Features

- **Responsive Design**: Fully optimized for desktop and mobile devices
- **Mobile Navigation**: Collapsible hamburger menu for easy mobile browsing
- **Modern UI**: Clean, professional design using shadcn/ui components
- **Dark/Light Theme**: Supports both light and dark modes
- **Smooth Animations**: Fade-in animations and smooth scrolling navigation
- **Interactive Elements**: Hover effects and responsive interactions
- **Professional Sections**:
  - Hero section with contact information
  - Education background
  - Technical skills with organized categories
  - Work experience
  - Project showcase
  - Finance interests and personal hobbies
  - Contact footer

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Wouter** - Lightweight client-side routing
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling with validation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **Drizzle ORM** - Type-safe database operations
- **PostgreSQL** - Production database

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Drizzle Kit** - Database migrations
- **Font Awesome** - Icon library

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # shadcn/ui components
│   │   │   ├── education-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── finance-section.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── navigation.tsx
│   │   │   ├── projects-section.tsx
│   │   │   └── skills-section.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main app component
│   │   ├── index.css      # Global styles and theme
│   │   └── main.tsx       # App entry point
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Storage interface
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schemas
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file with necessary variables
   SESSION_SECRET=your-session-secret-here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000` to view the portfolio

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server (frontend + backend)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Development Features

- **Hot Module Replacement (HMR)** - Instant updates during development
- **TypeScript Support** - Full type checking and IntelliSense
- **Linting** - Automated code quality checks
- **Responsive Design** - Mobile-first approach with Tailwind CSS

### Customization

1. **Personal Information**: Update content in component files
2. **Styling**: Modify `client/src/index.css` for theme customization
3. **Components**: Add or modify sections in `client/src/components/`
4. **Colors**: Adjust theme colors in CSS variables

## 📱 Mobile Features

- **Responsive Navigation**: Hamburger menu for mobile devices
- **Touch-Friendly**: Optimized for touch interactions
- **Mobile-First Design**: Optimized layouts for all screen sizes
- **Fast Loading**: Optimized assets and code splitting

## 🎨 Design System

- **Color Scheme**: Professional blue and gray palette with light/dark mode support
- **Typography**: Inter font family for clean, readable text
- **Components**: Consistent styling using shadcn/ui design system
- **Animations**: Subtle fade-in effects and smooth transitions
- **Accessibility**: Semantic HTML and ARIA attributes

## 🌐 Deployment

The application is designed to be deployed on Replit with automatic handling of:
- Static file serving
- API routing
- Environment variable management
- Database connections

For other platforms:
1. Build the application: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Set up environment variables
4. Configure database connection

## 📋 Features Overview

### Professional Sections
- **About**: Personal introduction and career summary
- **Education**: Academic background and achievements
- **Skills**: Technical skills organized by category (Languages, Frameworks, Tools, AWS)
- **Experience**: Work history and accomplishments
- **Projects**: Showcase of development projects
- **Interests**: Finance focus and personal hobbies

### Technical Features
- **Performance**: Optimized loading and rendering
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant design
- **Cross-Browser**: Compatible with modern browsers

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use this as a template:

1. Fork the repository
2. Update personal information in the components
3. Customize styling and colors
4. Add your own projects and experience

## 📄 License

This project is for personal use. Feel free to use as inspiration for your own portfolio.

## 📞 Contact

- **Email**: harshbpatel1781@gmail.com
- **GitHub**: [harshpatel010202](https://github.com/harshpatel010202)
- **LinkedIn**: [Harsh Patel](https://www.linkedin.com/in/harsh-patel2020/)

---

Built with ❤️ using React, TypeScript, and modern web technologies.