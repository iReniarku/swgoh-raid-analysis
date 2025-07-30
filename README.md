# SWGoH Raid Analysis Tool

> 📋 **This is a template repository** - Click "Use this template" to create your own guild analysis

A web application for analyzing guild raid data from Star Wars: Galaxy of Heroes using Wookiebot.

🚀 **Live Demo**: [https://dennisbecker.github.io/swgoh-raid-analysis/](https://dennisbecker.github.io/swgoh-raid-analysis/) (Example with sample guild data)

## Features

- 📊 Interactive charts for visualizing raid performance
- 🏆 Performance points tracking over time
- 📈 Detailed player statistics
- 🔍 Filterable and sortable tables
- 📥 Data export as CSV
- 🌟 Star Wars-inspired dark design

## Getting Started

### 1. Use This Template
1. Click the **"Use this template"** button at the top of this repository
2. Choose **"Create a new repository"**
3. Give your repository a name (e.g., `my-guild-raids`, `guild-name-analysis`)
4. Make sure it's set to **Public** (required for GitHub Pages)
5. Click **"Create repository from template"**

### 2. Enable GitHub Pages
1. Go to your new repository on GitHub
2. Navigate to **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **"GitHub Actions"**
4. The workflow will be automatically detected

### 3. Add Your Guild Data
1. In Star Wars: Galaxy of Heroes, use the Wookiebot command:
   ```
   /raid guild
   ```
   Add your desired parameters (effort level, etc.)
2. Download the generated CSV file from Wookiebot

### 4. Upload Your Data
1. In your GitHub repository, navigate to the `/data` folder
2. Click **"Add file"** → **"Upload files"**
3. Upload your downloaded CSV file(s)
4. Commit the changes with a message like "Add raid data"

### 5. Automatic Deployment
- GitHub Actions will automatically build and deploy your site
- Your analysis will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`
- The build process takes 2-3 minutes

### 6. Adding More Data
- Repeat steps 3-4 whenever you want to add new raid data
- The site automatically updates with each new CSV file upload

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

CSV files from Wookiebot should follow this format:
```csv
name,allycode,estimatedScore,lastActualScore,diff,diffPercent
"Player Name",123456789,1500000,1450000,-50000,-3.33
```

### Wookiebot Command Examples
```
/raid guild
/raid guild effort:high
```

**Parameters:**
- `effort`: Analysis effort level - `low`, `medium` (default), `high`

## Troubleshooting

### Site Not Loading
- Check that GitHub Pages is enabled in your repository settings
- Verify that GitHub Actions completed successfully (check the "Actions" tab)
- Wait 2-3 minutes after upload for the build to complete

### No Data Showing
- Ensure CSV files are uploaded to the `/data` folder (not the root)
- Check that CSV files follow the Wookiebot format
- Verify that the CSV files contain actual data (not empty)

### Build Failures
- Check the "Actions" tab in your GitHub repository for error details
- Ensure CSV files are valid and not corrupted
- Try re-uploading the CSV files

## Technology Stack

- **Astro.js 5.12.2** - Static Site Generator
- **Chart.js 4.4.0** - Data visualization
- **TypeScript** - Type safety
- **GitHub Actions** - Automatic deployment
- **GitHub Pages** - Hosting

## License

This project is intended for private use.
