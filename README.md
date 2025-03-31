# Amit Bhalla Marketing Website

A modern React website for Amit Bhalla's marketing services. This website showcases Amit's marketing and career coaching services with a focus on driving customer conversions.

## Features

- Responsive design that works on all device sizes
- Component-based architecture for maintainability
- Dynamic content powered by JSON data files
- Smooth scroll animations with AOS library
- FontAwesome icons for visual appeal
- Contact form with validation
- Clean and professional design that puts customers first

## Tech Stack

- React (with Vite for fast development)
- React Router for navigation
- CSS Modules for styling (No Tailwind)
- AOS (Animate on Scroll) for animations
- FontAwesome for icons
- React Helmet for SEO optimization

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
# Navigate to project folder
cd amit-marketing-site

# Install dependencies
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

This will start the development server at http://localhost:5173 (default Vite port)

### Building for Production

To build the site for production:

```bash
npm run build
```

This will create a `dist` folder with optimized assets ready for deployment.

### Deployment

The static assets in the `dist` folder can be deployed to any static hosting service like Netlify, Vercel, GitHub Pages, etc.

## Project Structure

- `src/` - Main source code
  - `assets/` - Images and other static assets
  - `components/` - Reusable React components
    - `common/` - Small reusable components (buttons, etc.)
    - `layout/` - Layout components (header, footer)
    - `sections/` - Major page sections
  - `data/` - JSON data files for dynamic content
  - `pages/` - Page components
  - `styles/` - CSS files
  - `utils/` - Utility functions

## Data Management

Dynamic content is stored in JSON files in the `src/data` directory:
- `services.json` - Services offered
- `resources.json` - Free resources
- `testimonials.json` - Client testimonials
- `faqs.json` - Frequently asked questions
- `caseStudies.json` - Case studies
- `processes.json` - Process steps

To update content, simply edit these JSON files.

## Future Enhancements

Planned features for future development:
- Admin dashboard for content management
- Blog functionality with categorization
- Email newsletter integration
- Analytics dashboard
- Appointment scheduling integration

## License

This project is proprietary and confidential.

## Author

Amit Bhalla