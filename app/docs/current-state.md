# Current Application State Documentation

## Project Overview
The project is a Next.js 14 application with TypeScript, using the App Router architecture. It's a landing page application with marketing, dashboard, and authentication features.

## Directory Structure
```
landingpage/
├── app/                    # Main application directory (Next.js App Router)
│   ├── (auth)/            # Authentication route group
│   ├── (dashboard)/       # Dashboard route group
│   ├── (marketing)/       # Marketing pages route group
│   ├── components/        # App-specific components
│   ├── lib/              # Utility functions and shared logic
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   └── styles/           # Global styles and CSS modules
├── components/           # Legacy components directory (to be migrated)
├── public/              # Static assets
└── types/               # Global type definitions
```

## Current Functionality

### 1. Core Features
- Landing page with marketing sections
- Authentication system (login/register)
- Dashboard interface
- Interactive features (quiz, AI portraits)
- Blog and resources section

### 2. Component Structure

#### UI Components (Atomic)
- Button
- Card
- Theme Toggle
- Sheet
- Alert

#### Layout Components
- Header with Navigation
- Footer
- Mobile Menu

#### Feature Components
- AI Portraits
- Digital Magic
- Interactive Quiz

#### Section Components
- Hero
- Features
- Pricing
- Testimonials
- Blog Resources
- Social Proof
- FAQ
- Contact Form

### 3. Current Routes

#### Marketing Routes
- `/` - Main landing page
- `/about` - About page
- `/contact` - Contact page
- `/products` - Products listing
- `/resources` - Resources and blog

#### Authentication Routes
- `/login` - User login
- `/register` - User registration

#### Dashboard Routes
- `/dashboard` - Main dashboard
- `/dashboard/profile` - User profile

### 4. Shared Utilities and Services

#### Hooks
- `useScrollAnimation` - Handles scroll-based animations
- `useForm` - Form handling utilities
- `useWindow` - Window-specific utilities
- `useAnimation` - Animation controls

#### Libraries
- Form validations (Zod schemas)
- API utilities
- Authentication helpers
- Data fetching utilities

### 5. Current Dependencies
- Next.js 14
- React 18
- Radix UI components
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Testing libraries (Jest, React Testing Library)

### 6. Build and Development

#### Development Mode
```bash
pnpm dev     # Runs on http://localhost:3000
```

#### Production Build
```bash
pnpm build   # Creates optimized production build
pnpm start   # Serves production build
```

### 7. Testing Setup
- Jest for unit testing
- React Testing Library for component testing
- Test files co-located with components
- Coverage reporting configured

### 8. Known Issues/Technical Debt
1. Duplicate component locations (root and app directories)
2. Inconsistent import patterns
3. Mixed component organization
4. Some components lack proper type definitions
5. Incomplete test coverage
6. Missing error boundaries in some routes
7. Inconsistent loading state implementations

### 9. Performance Considerations
- Current bundle size needs optimization
- Some components could benefit from lazy loading
- Image optimization needed in marketing sections
- Client/Server component separation needs review

### 10. Security Measures
- Authentication implemented
- Form validation in place
- API route protection
- Environment variables used for sensitive data

## Next Steps
This documentation serves as a baseline for the upcoming reorganization. The main goals are:
1. Consolidate component structure
2. Improve type safety
3. Enhance testing coverage
4. Optimize performance
5. Standardize coding patterns

The reorganization should preserve all current functionality while improving code organization and maintainability. 