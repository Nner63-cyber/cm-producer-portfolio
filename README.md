# Film Producer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring the Open Set color scheme.

## 🎨 Design Features

- **Open Set Color Palette**: Blue primary, peach secondary, green tertiary
- **Single-page scroll experience** with smooth navigation
- **Responsive design** that works on all devices
- **Smooth animations** using Framer Motion
- **Modern UI/UX** inspired by Matty Matheson's site

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Adding Your Content

### 1. Profile Image
- **Location**: `src/components/About.tsx` (around line 40)
- **Replace**: The placeholder div with your actual image
- **Format**: JPG, PNG, or WebP recommended
- **Size**: Square aspect ratio (1:1) works best

### 2. Film Posters & Stills
- **Location**: `src/components/SeriesFilms.tsx` (around line 15)
- **Replace**: The placeholder projects array with your actual projects
- **Image Paths**: Place your images in `public/images/` folder
- **Format**: JPG or PNG, maintain 3:4 aspect ratio for best results

### 3. Client Logos
- **Location**: `src/components/CommercialClients.tsx` (around line 15)
- **Replace**: The placeholder clients array with your actual clients
- **Image Paths**: Place logos in `public/logos/` folder
- **Format**: PNG with transparent background recommended

### 4. Personal Information
- **About Section**: Update the text in `src/components/About.tsx`
- **Contact Info**: Update email, phone, location in `src/components/Contact.tsx`
- **Social Links**: Update social media URLs in `src/components/Contact.tsx`

## 🎯 Section Structure

1. **About** - Hero section with your photo and bio
2. **Series & Films** - Grid of your film projects
3. **Commercial Clients** - Logos of brands you've worked with
4. **Skills & Services** - Four production phases breakdown
5. **Contact** - Contact form and information

## 🚀 Deploying to Render

1. **Push to GitHub**: Commit and push your changes
2. **Connect to Render**: Link your GitHub repository
3. **Auto-deploy**: Render will automatically build and deploy your site
4. **Custom Domain**: Add your domain in Render dashboard

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Create React App
- **Deployment**: Render (Static Site)

## 📱 Responsive Design

The site is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized layouts for all screen sizes
- Smooth scrolling on mobile devices

## 🎨 Customization

### Colors
The Open Set color scheme is defined in `tailwind.config.js`:
- Primary: `#42a6c4` (Blue)
- Secondary: `#ff8981` (Peach)
- Tertiary: `#a1b986` (Green)

### Typography
- Font: Inter (Google Fonts)
- Responsive text sizing
- Consistent hierarchy system

## 🔧 Development

- **Hot Reload**: Changes reflect immediately in development
- **TypeScript**: Full type safety and IntelliSense
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting

## 📞 Support

For questions or customization help, feel free to reach out!

---

Built with ❤️ using modern web technologies
