# NextWaveAI Website

A modern, responsive website for NextWaveAI, built with React and Tailwind CSS. This project showcases company services, industries served, blog, FAQs, and more, with a clean, professional UI.

## Features

- **Responsive Design:** Fully responsive across desktop, tablet, and mobile.
- **Hero Section:** Eye-catching landing section with video and call-to-action.
- **About Page:** Company story, mission, and team members.
- **Services:** Grid of service cards with icons and descriptions.
- **Industries Served:** Custom image grid layout with carousel navigation and industry features.
- **Blog:** Modern blog layout with featured and grid posts.
- **FAQs:** Accordion-style FAQ section for common questions.
- **Testimonials:** (If implemented) Section for client feedback.
- **Routing:** Uses React Router for seamless navigation.
- **Consistent Branding:** Uses company colors, fonts, and iconography.

## Tech Stack

- **React** (with functional components and hooks)
- **React Router DOM**
- **Tailwind CSS** (utility-first CSS framework)
- **React Icons** (for scalable vector icons)

## Folder Structure

```
src/
  Components/
    Blog.jsx
    FAQs.jsx
    Header.jsx
    HomepageData.jsx
    IndustryServed.jsx
    Services.jsx
    Testimonials.jsx
  Pages/
    AboutPage.jsx
    HomePage.jsx
    LayoutPage.jsx
    MyRoutes.jsx
```

## How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/NextWaveWebsite.git
   cd NextWaveWebsite
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

## Customization

- **Images:** Replace placeholder image URLs in `IndustryServed.jsx`, `Blog.jsx`, etc. with your own.
- **Content:** Update text, features, and team info in the respective components.
- **Branding:** Adjust colors and fonts in Tailwind config or component classes as needed.

## Deployment

You can deploy this project to Vercel, Netlify, or GitHub Pages.  
For example, to deploy to Vercel:

```bash
npm run build
# then follow Vercel's deployment instructions
```

## License

This project is for demonstration and internal company use.  
Feel free to fork and adapt for your own organization.

---

**Made with ❤️ by the NextWaveAI team**