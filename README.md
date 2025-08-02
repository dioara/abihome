# 🏠 Abihomes Professional Website

A modern, responsive website for Abihomes Ltd - Quality Property Development & Accessible Housing specialists based in Manchester, UK.

## 🛠️ Tech Stack

- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **React Router DOM 6.26.1** - Client-side routing for single-page application
- **Vite 5.4.1** - Fast build tool and development server
- **CSS3** - Custom responsive styling
- **ESLint** - Code linting for quality assurance

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/[your-username]/abihomes-website.git
cd abihomes-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality

# Deployment
npm run build        # Creates optimized build in dist/ folder
```

## 📁 Project Structure

```
src/
├── pages/           # React page components
│   ├── Home.jsx     # Homepage with hero and overview
│   ├── About.jsx    # Company information and team
│   ├── Projects.jsx # Project portfolio overview
│   ├── Services.jsx # Service offerings
│   ├── OmegaHouse.jsx    # Omega House project details
│   ├── HaleBarns.jsx     # Hale Barns project details
│   ├── Stretford.jsx     # Stretford project details
│   ├── AccessibleHousing.jsx # Accessible housing services
│   ├── SocialHousing.jsx     # Social housing services
│   ├── Partners.jsx      # Partners and certifications
│   └── Contact.jsx       # Contact information
├── App.jsx          # Main application component with routing
├── App.css          # Global styles and component styles
└── main.jsx         # Application entry point

public/              # Static assets
├── favicon.ico      # Website icon
└── [images]         # Project and company images
```

## 🎨 Styling

### CSS Architecture
- **Component-scoped styles** in App.css
- **CSS custom properties** for consistent theming
- **Mobile-first responsive design**
- **Flexbox and CSS Grid** for layouts

### Color Scheme
```css
:root {
  --primary-blue: #2563eb;
  --dark-gray: #1f2937;
  --medium-gray: #6b7280;
  --light-gray: #f3f4f6;
  --white: #ffffff;
}
```

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📱 Features

### Core Functionality
- **Multi-page navigation** with React Router
- **Responsive design** for all devices
- **Project showcases** with detailed pages
- **Service descriptions** and capabilities
- **Contact information** and company details

### Project Showcases
- **Omega House** - 24-apartment accessible housing development
- **Hale Barns** - 3-bed to 6-bedroom house conversion
- **Stretford** - 5-bedroom new build family home

### Business Positioning
- **Accessible housing specialists**
- **Government scheme alignment**
- **Professional certifications** (ISO 9001)
- **Manchester-based** with local expertise

## 🔧 Development

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `App.jsx`
3. Add navigation links as needed
4. Style in `App.css`

### Modifying Existing Content
- **Text content**: Edit JSX in respective page components
- **Images**: Replace files in `public/` directory
- **Styling**: Modify CSS in `App.css`
- **Navigation**: Update routes in `App.jsx`

### Code Quality
- **ESLint** configuration for consistent code style
- **Component-based** architecture for maintainability
- **Proper prop handling** and React best practices
- **Clean, readable** code structure

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Upload `dist/` contents to GitHub repository
3. Enable GitHub Pages in repository settings
4. Configure custom domain if needed

### Other Hosting Platforms
The built files in `dist/` can be deployed to:
- **Netlify** - Drag and drop deployment
- **Vercel** - Git-based deployment
- **AWS S3** - Static website hosting
- **Any static hosting** service

## 📊 Performance

### Optimizations
- **Code splitting** with Vite
- **Asset optimization** (images, CSS, JS)
- **Tree shaking** to remove unused code
- **Minification** for smaller file sizes

### Best Practices
- **Semantic HTML** for accessibility
- **Optimized images** with proper alt text
- **Fast loading** times with efficient bundling
- **SEO-friendly** structure and meta tags

## 🛡️ Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 📞 Support & Maintenance

### Common Tasks
- **Content updates**: Edit JSX files and rebuild
- **Image updates**: Replace files in public directory
- **Style changes**: Modify App.css
- **New projects**: Add new page components

### Getting Help
- Check the documentation in this README
- Review component code for examples
- Use browser developer tools for debugging
- Contact development team for major changes

## 📄 License

This project is proprietary software for Abihomes Ltd.

## 🤝 Contributing

This is a private project for Abihomes Ltd. For updates or modifications, please contact the development team.

---

**Built with ❤️ for Abihomes Ltd - Quality Property Development & Accessible Housing**

