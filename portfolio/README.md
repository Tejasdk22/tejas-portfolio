# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, modern design, and mobile-first approach.

## ✨ Features

- **Modern Design**: Clean, professional interface with gradient accents
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Custom CSS animations and transitions
- **Interactive Navigation**: Smooth scrolling between sections
- **Project Showcase**: Filterable project gallery with categories
- **Skills Visualization**: Progress bars and skill categorization
- **Contact Form**: Functional contact form with validation
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Next.js for optimal performance

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **Animations**: CSS animations and transitions
- **Responsive Design**: Mobile-first approach

## 📋 Sections

### 1. Hero Section
- Animated typing effect
- Call-to-action buttons
- Floating animation elements

### 2. About Section
- Personal introduction
- Experience metrics
- Core technology progress bars

### 3. Projects Section
- Filterable project gallery
- Project categories (Real-time Processing, ETL/ELT, Data Architecture, Analytics)
- Live demo and GitHub links
- Technology tags

### 4. Skills Section
- Categorized skill sets
- Progress visualization
- Technology icons
- Additional competencies

### 5. Contact Section
- Contact form with validation
- Contact information
- Social media links

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information

#### 1. Update Hero Section
Edit `src/components/Hero.tsx`:
```typescript
// Update name and title
<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
  Your Name Here
</span>

// Update profession
const fullText = "Your Title Here"

// Update description
<p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
  Your personal description here...
</p>
```

#### 2. Update About Section
Edit `src/components/About.tsx`:
- Update personal description
- Modify experience metrics
- Adjust skill levels and technologies

#### 3. Update Projects
Edit `src/components/Projects.tsx`:
- Replace project data in the `projects` array
- Update project titles, descriptions, technologies
- Add your GitHub and demo links

#### 4. Update Skills
Edit `src/components/Skills.tsx`:
- Modify skill categories and levels
- Update technology icons and names
- Adjust competencies list

#### 5. Update Contact Information
Edit `src/components/Contact.tsx`:
- Update email, phone, and location
- Modify social media links
- Customize contact form action

### Styling Customization

#### Colors
The portfolio uses a purple-pink gradient theme. To change colors, update:

1. **Tailwind Classes**: Replace color classes throughout components
2. **CSS Variables**: Modify gradient colors in `src/app/globals.css`
3. **Custom Animations**: Update glow effects and animations

#### Layout
- Modify section spacing in individual components
- Adjust grid layouts and responsive breakpoints
- Update animation timings and effects

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       └── Contact.tsx
├── public/
├── package.json
└── README.md
```

## 🎯 Performance Features

- **Static Generation**: Optimized build output
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic code splitting
- **CSS Optimization**: Tailwind CSS purging
- **Smooth Scrolling**: Hardware-accelerated animations

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repository
- **GitHub Pages**: Use `npm run build` and deploy `/out` folder
- **Traditional Hosting**: Upload build files to server

## 📧 Contact Form Setup

The contact form is currently set up for frontend validation only. To make it functional:

1. **Add backend API route**: Create `src/app/api/contact/route.ts`
2. **Email service**: Integrate with services like:
   - EmailJS
   - Nodemailer
   - SendGrid
   - Resend

3. **Update form handler**: Modify `handleSubmit` in `Contact.tsx`

## 🎨 Color Scheme

The portfolio uses a dark theme with:
- **Primary**: Purple (#a855f7) to Pink (#ec4899) gradient
- **Background**: Slate-900 (#0f172a)
- **Text**: White (#ffffff) and Gray variants
- **Accents**: Various purple and pink shades

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💡 Tips for Customization

1. **Keep it Simple**: Don't overwhelm with too much content
2. **High-Quality Projects**: Showcase your best work
3. **Update Regularly**: Keep skills and projects current
4. **Test Responsiveness**: Check on various devices
5. **Optimize Images**: Use appropriate image formats and sizes
6. **SEO Friendly**: Update meta tags and descriptions

## 🔗 Live Demo

Visit the live demo: [Your Portfolio URL]

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
