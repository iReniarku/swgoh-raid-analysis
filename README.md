# Order 66 Raid Analysis - SWGoH

A web application for analyzing Order 66 raid data from Star Wars: Galaxy of Heroes.

🚀 **Live Demo**: [https://dennisbecker.github.io/order66/](https://dennisbecker.github.io/order66/)

## Features

- 📊 Interactive charts for visualizing raid performance
- 🏆 Performance ranking over time
- 📈 Detailed player statistics
- 🔍 Filterable and sortable tables
- 📥 Data export as CSV
- 🌟 Star Wars-inspired dark design

## GitHub Pages Setup

### 1. Repository Setup
1. Create a new GitHub repository named `order66` (or any name you prefer)
2. Push this code to the repository

### 2. GitHub Pages Configuration
1. Go to your repository settings on GitHub
2. Navigate to the "Pages" section in the left sidebar
3. Under "Source" select "GitHub Actions"
4. The workflow file `.github/workflows/deploy.yml` will be automatically detected

### 3. Configuration Adjustment
1. Open `astro.config.mjs`
2. Replace `YOUR_GITHUB_USERNAME` with your GitHub username
3. If your repository has a different name than `order66`, adjust the `base` path accordingly

**Note for local development:**
- For local development, `base: '/'` is automatically used (no `/order66` in the URL)
- For production/GitHub Pages, `base: '/order66'` is used
- The configuration automatically adapts to the environment

### 4. Adding CSV Files
**Automatic workflow with Astro Collections:**

1. **Add new CSV files**: Copy new CSV files to the `data/` directory in the project root
2. **Automatic conversion**: During the build process (`npm run build`), CSV files are automatically converted to Astro Collections
3. **Deployment**: Commit and push changes - GitHub Actions will automatically run the build with conversion

**Manual workflow (optional):**
```bash
# Manually convert CSV files to collections
npm run convert-csv

# Start development server (converts automatically)
npm run dev
```

### 5. Deployment
After pushing, the GitHub Action will run automatically and the site will be available at:
```
https://YOUR_GITHUB_USERNAME.github.io/order66/
```

## Project Structure

```
order66/
├── data/                         # CSV source files (not part of the website)
│   ├── order66_..._2025-07-03.csv
│   ├── order66_..._2025-07-16.csv
│   └── order66_..._2025-07-23.csv
├── src/
│   ├── content/
│   │   ├── config.ts             # Astro Collections definition
│   │   └── raids/                # Auto-generated JSON files (recreated on each build)
│   │       ├── order66_..._2025-07-03.json
│   │       ├── order66_..._2025-07-16.json
│   │       └── order66_..._2025-07-23.json
│   └── pages/
│       └── index.astro           # Main application (uses Collections)
├── scripts/
│   └── convert-csv-to-collections.js  # CSV → JSON converter
├── public/                       # Static assets (no CSV files anymore)
│   ├── favicon.svg
│   └── .nojekyll
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages deployment
├── package.json                  # With convert-csv script
├── astro.config.mjs
└── README.md
```

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Data Format

CSV files should follow this format:
```csv
name,allycode,estimatedScore,lastActualScore,diff,diffPercent
"Player Name",123456789,1500000,1450000,-50000,-3.33
```

## Technology Stack

- **Astro.js 5.12.2** - Static Site Generator
- **Chart.js 4.4.0** - Data visualization
- **TypeScript** - Type safety
- **GitHub Actions** - Automatic deployment
- **GitHub Pages** - Hosting

## License

This project is intended for private use.
