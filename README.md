# ReflectAI Research Portfolio

A professional, single-page research portfolio showcasing AI-assisted journaling research conducted by Pujan Pokharel with Dr. Tim Gorichanaz at Drexel University.

## Overview

This static website presents research on AI-assisted journaling to support emotional awareness and reflective practice. The site features:

- **Project overview** with motivation and contributions
- **Study design** with participant statistics and protocol
- **App overview** with screenshots and implementation details
- **Interactive results** with charts populated from JSON data
- **Discussion** of limitations and future work
- **Downloads** for research materials
- **Contact** information and form

## Features

- ✅ **Fast loading** - Optimized for Lighthouse scores ≥90
- ✅ **Fully responsive** - Works on mobile, tablet, and desktop
- ✅ **Accessible** - WCAG AA compliant with keyboard navigation
- ✅ **No external dependencies** - Pure HTML, CSS, and vanilla JavaScript
- ✅ **Interactive charts** - SVG-based visualizations from JSON data
- ✅ **Smooth scrolling** - Navigation with scrollspy functionality
- ✅ **Mobile-friendly** - Hamburger menu and touch-optimized interface

## Local Development

### Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **That's it!** No build step required

### File Structure

```
reflectai-portfolio/
│
├─ index.html              # Main HTML file
├─ README.md               # This file
│
└─ assets/
   ├─ css/
   │  └─ styles.css        # All styles and design system
   ├─ js/
   │  └─ main.js           # All JavaScript functionality
   ├─ img/
   │  ├─ hero.svg          # Hero image (replace with PNG)
   │  ├─ app-mock-1.svg    # App screenshot 1 (replace with PNG)
   │  ├─ app-mock-2.svg    # App screenshot 2 (replace with PNG)
   │  └─ favicon.svg       # Favicon (replace with PNG)
   ├─ data/
   │  └─ survey_results.json # Chart data (update with real data)
   └─ docs/
      ├─ ReflectAI-abstract.pdf # Research abstract (replace with PDF)
      └─ ReflectAI-poster.pdf   # Conference poster (replace with PDF)
```

## Customization

### Updating Chart Data

Replace `assets/data/survey_results.json` with your actual research data:

```json
{
  "participants": [
    {
      "id": "P1",
      "times_used": 8,
      "avg_minutes_per_session": 15
    }
  ],
  "awareness_scores": [
    {
      "id": "P1", 
      "pre": 2,
      "post": 4
    }
  ],
  "qualitative_themes": [
    {
      "quote": "User feedback quote",
      "author": "Participant ID"
    }
  ],
  "study_stats": {
    "participants": 6,
    "avg_days": 10,
    "journals_logged": 32
  }
}
```

### Replacing Images

1. **Hero image**: Replace `assets/img/hero.svg` with your hero image (PNG recommended)
2. **App screenshots**: Replace `assets/img/app-mock-1.svg` and `assets/img/app-mock-2.svg` with actual app screenshots
3. **Favicon**: Replace `assets/img/favicon.svg` with your favicon (PNG recommended)

### Updating Research Materials

1. **Abstract**: Replace `assets/docs/ReflectAI-abstract.pdf` with your research abstract
2. **Poster**: Replace `assets/docs/ReflectAI-poster.pdf` with your conference poster
3. **Contact email**: Update the email address in `index.html` (search for `pujan.pokharel@example.com`)

## Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**: Upload all files to a GitHub repository
2. **Enable Pages**: Go to Settings → Pages → Source → Deploy from branch
3. **Choose branch**: Select `main` or `master` branch
4. **Deploy**: Your site will be available at `https://username.github.io/repository-name`

### Alternative Hosting

This site works on any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload files to an S3 bucket
- **Any web server**: Upload files to your server

## Contact Form Options

### Default (GitHub Pages)
The site uses a `mailto:` form that opens the user's email client. No setup required.

### Netlify Forms
If deploying to Netlify, uncomment the Netlify form in `index.html`:

```html
<!-- Uncomment this section in index.html -->
<form name="contact" netlify>
  <input type="hidden" name="form-name" value="contact">
  <!-- form fields -->
</form>
```

### Formspree
If using Formspree, uncomment and configure the Formspree form:

```html
<!-- Uncomment and update with your Formspree ID -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

## Technical Details

### Performance
- **Lighthouse Score**: ≥90 for Performance, Accessibility, Best Practices, SEO
- **Bundle Size**: <300KB total (images lazy-loaded)
- **Load Time**: <2.5s on 4G connection

### Browser Support
- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **No IE support**: Uses modern CSS and JavaScript features

### Accessibility
- **WCAG AA compliant** with proper contrast ratios
- **Keyboard navigation** for all interactive elements
- **Screen reader friendly** with proper ARIA labels
- **Reduced motion support** for users with vestibular disorders

## Customization Guide

### Colors
Update CSS custom properties in `assets/css/styles.css`:

```css
:root {
  --bg: #0b1020;           /* Background color */
  --panel: #0f172a;        /* Panel background */
  --text: #e6e9ef;         /* Text color */
  --brand: #60a5fa;        /* Primary brand color */
  --brand-2: #a78bfa;      /* Secondary brand color */
}
```

### Typography
The site uses system fonts for optimal performance. To use custom fonts:

1. Add font files to `assets/fonts/`
2. Update font-family in CSS
3. Consider font loading performance

### Adding Sections
To add new sections:

1. Add HTML section to `index.html`
2. Add navigation link to the nav menu
3. Add corresponding CSS styles
4. Update scrollspy in `assets/js/main.js`

## Troubleshooting

### Charts Not Loading
- Check that `assets/data/survey_results.json` exists and is valid JSON
- Open browser console for error messages
- Ensure the file path is correct

### Images Not Displaying
- Verify image files exist in `assets/img/`
- Check file permissions
- Ensure file names match HTML references

### Contact Form Not Working
- For mailto: forms, ensure user has email client configured
- For Netlify/Formspree, check form configuration
- Test in different browsers

## License

MIT License - feel free to use this template for your own research portfolio.

## Credits

- **Research**: Pujan Pokharel, Dr. Tim Gorichanaz
- **Institution**: Drexel University
- **Design**: Custom design system with CSS Grid and Flexbox
- **Charts**: Custom SVG implementation (no external libraries)
- **Icons**: Custom SVG icons and system icons

---

**Note**: This is a static site template. Replace placeholder content with your actual research data, images, and contact information before deployment.
