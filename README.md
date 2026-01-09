# Thomas Woodland's Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS. This site showcases my projects, skills, and experience as a developer. The site features a dark/light theme toggle and animated gradient backgrounds.

## 🌐 Live Site

This site is automatically deployed to GitHub Pages using GitHub Actions.

**Visit:** [https://tomwdev.github.io/MyPortfolio/](https://tomwdev.github.io/MyPortfolio/)

## ✨ Features

- Fully responsive across all devices
- Dark/light theme toggle
- Animated gradient backgrounds
- Clean, modern design

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts:** [Geist](https://vercel.com/font) by Vercel
- **Deployment:** GitHub Pages with GitHub Actions

## � Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The workflow is triggered on every push to the `master` branch.

### How it Works:

1. Code is pushed to the `master` branch
2. GitHub Actions workflow (`.github/workflows/nextjs.yml`) is triggered
3. Next.js site is built with static export
4. Built files are deployed to GitHub Pages
5. Site is live at the GitHub Pages URL

The deployment workflow:
- Uses Node.js 20
- Installs dependencies with npm
- Builds the Next.js site with static export
- Uploads and deploys to GitHub Pages

## �📂 Project Structure

```
my-portfolio/
├── .github/
│   └── workflows/
│       └── nextjs.yml          # GitHub Actions deployment workflow
├── public/
│   └── images/                 # Project images and assets
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles
│   │   ├── layout.js           # Root layout with theme provider
│   │   └── page.js             # Home page
│   └── components/
│       ├── About.jsx           # About section with skills
│       ├── Hero.jsx            # Hero/landing section
│       ├── Navbar.jsx          # Navigation bar
│       ├── Projects.jsx        # Projects showcase
│       ├── ThemeProvider.jsx   # Theme context provider
│       └── ThemeToggle.jsx     # Theme toggle button
├── eslint.config.mjs
├── next.config.mjs
├── package.json
└── README.md
```

## 📧 Contact

Thomas Woodland - [@tomwdev](https://github.com/tomwdev)

---

Built with ❤️ using Next.js and Tailwind CSS
