# Sputhnik Gundu - Portfolio Website

A modern, lightweight portfolio website built with React and Vite, showcasing my experience as a Software Engineer specializing in React, TypeScript, and Micro Frontend Architecture.

## Features

- **Responsive Design** - Optimized for all devices
- **Modern UI** - Clean, animated interface with smooth transitions
- **Performance Optimized** - Built with Vite for fast loading
- **Interactive Sections** - Hero, Experience, Skills, and Contact sections
- **Resume Download** - Direct PDF download functionality
- **Appointment Booking** - Integrated Calendly for scheduling meetings
- **Special Highlight** - Emphasis on startup experience at Scaler Academy

## Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite** - Ultra-fast build tool
- **CSS3** - Modern styling with animations and gradients
- **GitHub Pages** - Free hosting with automatic deployment

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sputhnik-portfolio.git
cd sputhnik-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. **Add Your Resume PDF:**
   - Place your resume PDF file named `Sputhnik_React.pdf` in the `/public` folder
   - The file should be located at: `public/Sputhnik_React.pdf`

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

The repository is configured with GitHub Actions for automatic deployment.

1. Push your code to the `main` branch:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. Enable GitHub Pages in your repository:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**

3. The workflow will automatically build and deploy your site
4. Your site will be available at: `https://yourusername.github.io/sputhnik-portfolio/`

### Option 2: Manual Deployment

Deploy manually using the gh-pages package:
```bash
npm run deploy
```

This will build the project and push to the `gh-pages` branch.

## Configuration

### Updating Base URL

If your repository name is different, update the `base` in `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

### Customizing Content

- Update personal information in the component files:
  - `src/components/Hero.jsx` - Introduction and summary
  - `src/components/Experience.jsx` - Work experience
  - `src/components/Skills.jsx` - Technical skills
  - `src/components/Contact.jsx` - Contact information

### Updating Calendly Link

Replace the Calendly URL in `src/components/Contact.jsx`:
```javascript
href="https://calendly.com/your-username"
```

## Project Structure

```
sputhnik-portfolio/
├── public/
│   └── Sputhnik_React.pdf     # Your resume (add this file)
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── index.html
├── vite.config.js
└── package.json
```

## Performance

- **Bundle Size:** Optimized with Vite's tree-shaking
- **Load Time:** Fast initial load with code splitting
- **Animations:** GPU-accelerated CSS animations
- **Assets:** Lazy loading for optimal performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email:** sputhnikiwnl@gmail.com
- **Phone:** +1 (716) 495-3942
- **LinkedIn:** [linkedin.com/in/sputhnik](https://www.linkedin.com/in/sputhnik/)
- **Location:** Richardson, TX

---

Built with React + Vite | Deployed on GitHub Pages
