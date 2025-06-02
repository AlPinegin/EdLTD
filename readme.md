# EduardLTD Landing Page

A modern, iOS-styled landing page for EduardLTD - a retail business specializing in spare parts for cars, agricultural machinery, consumables, and seals.

## 🌟 Features

### Design & User Experience
- **iOS-inspired Design**: Clean, modern interface with smooth animations and rounded corners
- **Glassmorphism Effects**: Translucent header with backdrop blur
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth transitions, and engaging animations

### Accessibility & SEO
- **WCAG Compliant**: Proper ARIA labels, semantic HTML, and keyboard navigation
- **SEO Optimized**: Meta tags, structured headings, and search engine friendly
- **Reduced Motion Support**: Respects user's motion preferences
- **Screen Reader Friendly**: Comprehensive accessibility features

### Internationalization
- **Bilingual Support**: Russian and English languages
- **Auto-Detection**: Automatically detects browser language preference
- **Theme Support**: Light and dark themes with system preference detection
- **Persistent Settings**: Remembers user's language and theme choices

### Business Features
- **Contact Integration**: Multiple phone numbers and WhatsApp integration
- **Service Showcase**: 6 clickable service sections with image placeholders
- **Google Maps**: Embedded map showing business location in Kostanay, Kazakhstan
- **WhatsApp Button**: Floating action button for instant customer contact

## 🚀 Quick Start

1. **Download**: Save the HTML file to your local machine
2. **Open**: Double-click the file or serve it through a web server
3. **Customize**: Replace image placeholders with actual images
4. **Deploy**: Upload to your web hosting service

## 📱 Service Sections

The landing page includes 6 interactive service sections:

1. **HTZ, T-150, HTA, BTZ Parts** (Запчасти ХТЗ, Т-150, ХТА, БТЗ)
2. **Sprayer Parts** (Запчасти к опрыскивателю)
3. **Hydraulic Cylinder Seals** (Уплотнители для ремонта гидроцилиндров)
4. **Rubber Rings** (Кольца резиновые)
5. **Oil Seals** (Сальники)
6. **Gaskets & Seals** (Уплотнения)

All sections are clickable and redirect to WhatsApp chat for customer inquiries.

## 🛠️ Technical Specifications

### Technologies Used
- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Advanced styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **Google Fonts**: Inter font family for modern typography
- **Google Maps**: Embedded maps for location display

### Browser Support
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- **Lightweight**: Minimal external dependencies
- **Fast Loading**: Optimized CSS and JavaScript
- **Smooth Animations**: Hardware-accelerated transitions
- **Efficient Rendering**: Optimized for 60fps performance

## 📞 Contact Information

**EduardLTD**
- **Address**: 30 Karbyshev st, Kostanay, Kazakhstan
- **Phone Numbers**: 
  - +7 701 896 8628
  - +7 701 475 2715
  - +7 701 395 5427 (WhatsApp)

## 🎨 Customization Guide

### Replacing Image Placeholders

Replace the placeholder content in the following sections:

```html
<!-- Hero Image -->
<div class="hero-image">
    <img src="your-hero-image.jpg" alt="EduardLTD spare parts" />
</div>

<!-- Service Images -->
<div class="service-image">
    <img src="service-1.jpg" alt="HTZ parts" />
</div>
```

### Color Scheme Customization

Modify CSS custom properties in the `:root` selector:

```css
:root {
    --primary-color: #007AFF;    /* Main brand color */
    --secondary-color: #5856D6;  /* Secondary brand color */
    --accent-color: #FF9500;     /* Accent color */
    /* ... other variables */
}
```

### Adding New Services

1. Add a new service card in the HTML:
```html
<div class="service-card" onclick="openWhatsApp()">
    <div class="service-image">
        <img src="new-service.jpg" alt="New service" />
    </div>
    <h3 class="service-title">
        <span class="lang-en">New Service</span>
        <span class="lang-ru">Новая услуга</span>
    </h3>
</div>
```

2. Update the grid layout if needed in CSS.

### Language Customization

Add new text content with language-specific classes:

```html
<span class="lang-en">English text</span>
<span class="lang-ru">Русский текст</span>
```

## 🔧 Configuration Options

### WhatsApp Integration

Update the WhatsApp number in two places:

```javascript
// WhatsApp function
function openWhatsApp() {
    window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank');
}
```

```html
<!-- WhatsApp button href -->
<a href="https://wa.me/YOUR_WHATSAPP_NUMBER" class="whatsapp-btn">
```

### Google Maps Integration

Replace the iframe src with your specific location:

```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"></iframe>
```

## 📊 Analytics & Tracking

To add analytics tracking, insert your tracking code before the closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Deployment

### Static Hosting Options
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for static sites
- **Traditional Web Hosting**: Upload via FTP/SFTP

### Deployment Checklist
- [ ] Replace all image placeholders with actual images
- [ ] Test all contact links and phone numbers
- [ ] Verify Google Maps location accuracy
- [ ] Test WhatsApp integration
- [ ] Validate HTML and CSS
- [ ] Test on multiple devices and browsers
- [ ] Set up analytics tracking (optional)
- [ ] Configure domain and SSL certificate

## 🐛 Troubleshooting

### Common Issues

**WhatsApp Button Not Working**
- Ensure the phone number format is correct (+country code)
- Check that the link opens in a new tab/window

**Maps Not Loading**
- Verify the Google Maps embed URL is correct
- Check internet connectivity
- Ensure iframe is not blocked by browser settings

**Theme Not Switching**
- Check browser's local storage support
- Ensure JavaScript is enabled
- Verify CSS custom properties support

**Language Not Changing**
- Confirm JavaScript is enabled
- Check for console errors
- Verify language detection logic

## 📝 License

This project is created for EduardLTD. All rights reserved.

## 🤝 Support

For technical issues or customization requests, please contact the development team or refer to the comments in the source code.

---

**Last Updated**: June 2025
**Version**: 1.0.0