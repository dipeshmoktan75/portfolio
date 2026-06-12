# 🚀 Dynamic GitHub Portfolio Website

A fully responsive, feature-rich portfolio website built with **HTML, CSS, and vanilla JavaScript**. No frameworks required! Manage your entire professional profile dynamically with an intuitive admin panel.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)

---

## ✨ Features

### ✅ Core Features
- **🖼️ Profile Photo Upload & Update** - Easily change your profile picture with instant preview
- **📝 About Me Section** - Dynamic about section with editable content
- **💼 Skills Section** - Add, edit, and manage skills with proficiency levels
- **📄 CV/Resume Upload & Download** - Store and download your CV/Resume in any format
- **🌐 Social Media Links** - Connect all your social profiles (LinkedIn, GitHub, Twitter, Instagram)
- **📞 Contact Number** - Display and update your contact information
- **✉️ Email Address** - Manage your professional email
- **📁 Other Documents Upload** - Upload and manage additional documents (certifications, etc.)
- **🎨 Project Showcase** - Display your featured projects with descriptions and links
- **📱 Responsive Design** - Perfect on mobile, tablet, and desktop devices

### 🎯 Additional Features
- 🔐 **Local Storage** - All data persists in browser (no backend required)
- 🎛️ **Admin Panel** - Easy-to-use control panel for managing all content
- 🎨 **Modern UI** - Beautiful, contemporary design with smooth animations
- 📲 **Mobile Optimized** - Fully responsive across all devices
- ⚡ **Fast Performance** - Lightweight and optimized for speed
- 🔄 **Real-time Updates** - See changes instantly on your portfolio
- 🎭 **Smooth Animations** - Polished user experience with CSS animations
- 💾 **Data Persistence** - Information saved between browser sessions

---

## 🎯 Quick Start

### Prerequisites
- ✅ No backend required!
- ✅ Works in all modern browsers
- ✅ No dependencies or build tools needed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dipeshmoktan75/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a live server extension in VS Code
   - No server setup required!

3. **Customize your portfolio**
   - Click the ⚙️ settings button (bottom-right corner)
   - Fill in your information in the Admin Panel
   - See changes update in real-time

---

## 📋 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling & responsive design
├── script.js           # All functionality & interactions
└── README.md           # Documentation
```

---

## 🛠️ How to Use

### 1. **Update Your Profile**
   - Click the settings ⚙️ button (bottom-right)
   - Go to the "Profile" tab
   - Enter your name, title, about section, phone, and email
   - Click "Save Profile"
   - Changes appear instantly!

### 2. **Add Social Links**
   - Open Admin Panel → "Social Links" tab
   - Enter your social media URLs
   - Click "Save Social Links"
   - Icons become clickable links

### 3. **Add Skills**
   - Admin Panel → "Add Skill" tab
   - Enter skill name and proficiency level (0-100%)
   - Choose category (Frontend, Backend, Tools, etc.)
   - Click "Add Skill"
   - Skills display with progress bars

### 4. **Upload Profile Photo**
   - Click the camera 📷 icon on your profile photo
   - Select an image from your computer
   - Photo updates automatically
   - Supports all image formats

### 5. **Manage CV/Resume**
   - Go to "About Me" section
   - Click "Upload CV/Resume" to upload
   - Click "Download CV/Resume" to download
   - Supports PDF, Word, and other formats

### 6. **Upload Documents**
   - Scroll down in "About Me" section
   - Click "Add Document"
   - Upload PDFs, Word files, images, certifications, etc.
   - Documents appear in organized grid layout

### 7. **Add Projects**
   - Admin Panel → "Add Project" tab
   - Fill in project details and description
   - Add technologies used
   - Include live demo and GitHub links
   - Add project image URL
   - Click "Add Project"
   - Projects display in beautiful card layout

### 8. **Contact Form**
   - Visitors can send you messages via Contact section
   - Messages are logged in browser console
   - Extend with backend email integration

---

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;        /* Main theme color */
    --secondary-color: #ec4899;      /* Accent color */
    --dark-bg: #0f172a;              /* Dark background */
    --light-bg: #f1f5f9;             /* Light background */
    --text-dark: #1e293b;            /* Dark text */
    --text-light: #64748b;           /* Light text */
    /* ... more colors ... */
}
```

### Fonts
Edit in `styles.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Layout & Spacing
Adjust responsive breakpoints in the media queries section of `styles.css`

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above - Full featured layout
- **Tablet**: 768px - 1199px - Optimized grid layout
- **Mobile**: 480px - 767px - Single column layout
- **Small Mobile**: Below 480px - Minimalist layout

---

## 🔒 Data Storage

Your data is stored locally in your browser using **localStorage**. This means:
- ✅ **No server required** - Works completely offline
- ✅ **Data persists** - Information saved between sessions
- ✅ **Private** - Your data stays on your computer
- ⚠️ **Local only** - Clearing browser cache will reset data

### Backup Your Data
```javascript
// In browser console:
const data = localStorage.getItem('portfolioData');
console.log(JSON.parse(data));
```

---

## 🚀 Deployment

### GitHub Pages (Free & Easy)
1. Push your code to GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/root" folder
5. ✅ Your portfolio is live at `https://yourusername.github.io/portfolio`

### Netlify (Also Free)
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `.`
4. Deploy!

### Vercel
1. Import your GitHub repository
2. Framework: None
3. Deploy!

### Any Web Server
- Simply upload the three files to any web host
- Works on shared hosting, VPS, or dedicated servers

---

## 🔧 Advanced Usage

### Backend Integration
To connect with a backend for email functionality:

```javascript
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
    });
    
    if (response.ok) {
        showNotification('Email sent successfully!');
    }
});
```

### Exporting Data
```javascript
function exportData() {
    const data = localStorage.getItem('portfolioData');
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(data);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "portfolio-data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
```

### Importing Data
```javascript
function importData(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const data = JSON.parse(e.target.result);
        localStorage.setItem('portfolioData', JSON.stringify(data));
        location.reload();
    };
    reader.readAsText(file);
}
```

---

## 📊 Browser Support

| Browser | Version | Support |
|---------|---------|----------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Mobile Browsers | Latest | ✅ Full |

---

## 🤝 Contributing

Want to improve this portfolio? Here are some ideas:

- [ ] Dark mode toggle
- [ ] Multiple language support
- [ ] Blog/Articles section
- [ ] Testimonials/Reviews section
- [ ] Analytics integration
- [ ] Email integration
- [ ] Animation library integration
- [ ] SEO optimization
- [ ] Search functionality
- [ ] Download portfolio as PDF

**Steps to contribute:**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🙏 Acknowledgments

- 🎨 Icons from [Font Awesome](https://fontawesome.com)
- 💡 Inspired by modern portfolio best practices
- ❤️ Built with passion for developers

---

## 📞 Support & Contact

Have questions or found a bug? Let me know!

- 📧 **Email**: dipeshmoktan75@gmail.com
- 🐙 **GitHub**: [@dipeshmoktan75](https://github.com/dipeshmoktan75)
- 💼 **LinkedIn**: [Dipesh Moktan](https://linkedin.com/in/dipeshmoktan)
- 🌐 **Portfolio**: [dipeshmoktan.com](https://dipeshmoktan75.github.io/portfolio)

---

## ⭐ Show Your Support

If you find this portfolio template useful:
- ⭐ **Star** this repository on GitHub
- 🍴 **Fork** and use it for your portfolio
- 📢 **Share** it with your friends and fellow developers
- 🐛 **Report issues** if you find any
- 💬 **Suggest features** via GitHub issues

---

## 📝 Changelog

### v1.0.0 (2024 - Current)
- ✅ Complete portfolio functionality
- ✅ Dynamic admin panel for easy management
- ✅ Full responsive design (mobile-first)
- ✅ Local storage for data persistence
- ✅ All core features implemented
- ✅ Beautiful UI with animations
- ✅ Comprehensive documentation

### Planned Features
- [ ] Backend email integration
- [ ] Analytics dashboard
- [ ] Dark mode
- [ ] Multi-language support
- [ ] Blog section
- [ ] PDF export
- [ ] Search functionality

---

## 🎯 Tips & Tricks

### Make It Your Own
1. Update the colors in `:root` to match your brand
2. Add your own fonts from Google Fonts
3. Customize the hero gradient
4. Add your own icons and emojis

### Performance Tips
- Optimize images before uploading
- Use webp format for faster loading
- Minimize animations on mobile devices
- Lazy load images if using many projects

### SEO Optimization
- Update meta tags in `index.html`
- Add proper title and description
- Use semantic HTML tags
- Add Schema markup for better indexing

### Security Tips
- Never store sensitive data in localStorage
- Always validate forms on backend
- Use HTTPS when deployed
- Regularly backup your data

---

**Happy building! 🚀**

Made with ❤️ by **Dipesh Moktan**

---

*Last updated: 2024 | Version: 1.0.0*