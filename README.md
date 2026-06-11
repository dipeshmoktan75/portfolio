# Dipesh Moktan's Portfolio

A modern, responsive portfolio website showcasing projects, skills, and contact information.

## Features

- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Smooth scrolling and transitions
- 🧭 Clean and intuitive navigation
- 💼 Project showcase section
- 🛠️ Skills and technologies display
- 📧 Contact links
- 🚀 Deployed on GitHub Pages

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/dipeshmoktan75/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser or use a local server:
```bash
python -m http.server 8000
```

3. Visit `http://localhost:8000`

### Deployment on GitHub Pages

1. Ensure you have a GitHub repository named `portfolio`
2. Push the code to the `main` branch
3. Go to repository Settings → Pages
4. Select `main` branch as the source
5. Your portfolio will be live at `https://dipeshmoktan75.github.io/portfolio/`

## Customization

### Update Your Information

Edit `index.html` and update:
- Your name and title
- Project details (title, description, links, technologies)
- Skills and categories
- Contact information and social links

### Customize Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00a86b;
    --dark-bg: #0f0f0f;
    --light-bg: #1a1a1a;
    /* ... more colors ... */
}
```

### Add or Remove Projects

Duplicate a `.project-card` div in the projects section and update the content.

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use for personal and commercial projects.

## Next Steps

1. ✏️ Update your personal information
2. 📸 Add your projects with links
3. 🎨 Customize colors to match your brand
4. 🚀 Deploy to GitHub Pages
5. 📤 Share your portfolio!