# replit.md

## Overview

This is a modern full-stack web application built as a professional portfolio for Aashritha Mogalluru, an Industrial & Systems Engineering graduate. The application is designed as a single-page application (SPA) showcasing education, experience, projects, skills, and contact information in an elegant, responsive interface.

## System Architecture

The application follows a client-server architecture with the following key components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in session handling with PostgreSQL store

### Development Environment
- **Runtime**: Node.js 20
- **Package Manager**: npm
- **Development Server**: Concurrent frontend (Vite) and backend (Express) servers

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling to sections
- **Hero Section**: Animated counters and professional introduction
- **Education Section**: Academic credentials and coursework
- **Experience Section**: Professional experience with achievements
- **Projects Section**: Key projects with technical details and metrics
- **Skills Section**: Technical skills categorized by domain
- **Contact Section**: Contact form with mailto functionality

### Backend Infrastructure
- **Database Schema**: User management system with authentication ready
- **Storage Layer**: Abstracted storage interface supporting both in-memory and database persistence
- **API Structure**: RESTful API endpoints ready for extension
- **Static File Serving**: Integrated static file serving for production builds

### UI Component System
- **Design System**: shadcn/ui components with consistent theming
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Color Scheme**: Professional color palette with CSS custom properties
- **Typography**: Inter font family for modern, readable text

## Data Flow

1. **Client Request**: Browser requests the application
2. **Server Response**: Express serves the React SPA
3. **Component Rendering**: React components render portfolio content
4. **User Interactions**: Navigation, form submissions, and animations
5. **Contact Form**: mailto links for direct email communication

### Database Integration
- **Schema Definition**: PostgreSQL tables defined using Drizzle ORM
- **Migration System**: Database migrations managed through drizzle-kit
- **Environment Configuration**: Database URL configuration for different environments

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Form Handling**: React Hook Form with Zod validation
- **Utilities**: date-fns for date formatting

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin and error overlay
- **Code Quality**: TypeScript strict mode, ESLint configuration
- **Development Experience**: Hot module replacement, runtime error handling

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Assets**: All assets optimized and fingerprinted

### Production Configuration
- **Server**: Node.js production server serving both API and static files
- **Database**: PostgreSQL database with connection pooling
- **Environment**: Environment variables for database and configuration
- **Port Configuration**: Configurable port binding for cloud deployment

### Replit Integration
- **Auto-deployment**: Configured for Replit's autoscale deployment
- **Development Mode**: Integrated with Replit's development environment
- **Module System**: ESM modules throughout the application

## Changelog

Changelog:
- June 27, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.