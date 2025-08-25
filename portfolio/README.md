# Sumit Kumar - Portfolio Website

A modern, responsive React portfolio website built with TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Features

✨ **Modern Design**
- Clean, minimal, and professional layout
- Smooth animations with Framer Motion
- Responsive design for all devices

🌓 **Dark/Light Mode**
- Toggle between dark and light themes
- System preference detection
- Persistent theme selection

📱 **Responsive Sections**
- Hero section with animated introduction
- About me with statistics and profile
- Skills showcase with interactive progress bars
- Projects grid with hover effects
- Experience timeline
- Testimonials carousel
- Contact form with validation
- Footer with quick navigation

🚀 **Performance & SEO**
- Optimized for search engines
- Fast loading with lazy loading
- Semantic HTML structure
- Meta tags for social sharing

## Tech Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui components
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Create React App

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── switch.tsx
│   ├── about.tsx          # About section
│   ├── contact.tsx        # Contact section
│   ├── experience.tsx     # Experience timeline
│   ├── footer.tsx         # Footer component
│   ├── hero.tsx           # Hero section
│   ├── navbar.tsx         # Navigation bar
│   ├── projects.tsx       # Projects showcase
│   ├── skills.tsx         # Skills section
│   ├── testimonials.tsx   # Testimonials carousel
│   └── theme-provider.tsx # Theme context
├── lib/
│   └── utils.ts           # Utility functions
├── App.tsx                # Main app component
├── index.css              # Global styles
└── index.tsx              # App entry point
```

## Customization

### Personal Information
Update the following files with your information:
- `src/components/hero.tsx` - Name, title, and introduction
- `src/components/about.tsx` - Personal background and statistics
- `src/components/skills.tsx` - Your technical skills
- `src/components/projects.tsx` - Your projects and demos
- `src/components/experience.tsx` - Work experience and timeline
- `src/components/testimonials.tsx` - Client testimonials
- `src/components/contact.tsx` - Contact information and social links

### Styling
- Colors and themes: `src/index.css`
- Component styles: Individual component files
- Tailwind config: `tailwind.config.js`

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update navigation in `src/components/navbar.tsx`

## Deployment

The portfolio can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically build and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Sumit Kumar - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/your-username/portfolio](https://github.com/your-username/portfolio)