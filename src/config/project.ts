// Project configuration - dynamically set from environment variables
export const PROJECT_CONFIG = {
  // Repository name (e.g., "swgoh-raid-analysis")
  name: import.meta.env.PROJECT_NAME || import.meta.env.GITHUB_REPOSITORY_NAME || 'swgoh-raid-analysis',
  
  // Full GitHub repository path (e.g., "DennisBecker/swgoh-raid-analysis")
  repository: import.meta.env.GITHUB_REPOSITORY || 'DennisBecker/swgoh-raid-analysis',
  
  // Repository owner (e.g., "DennisBecker")
  owner: import.meta.env.GITHUB_REPOSITORY_OWNER || 'DennisBecker',
  
  // GitHub URL (e.g., "https://github.com/DennisBecker/swgoh-raid-analysis")
  githubUrl: import.meta.env.GITHUB_URL || 'https://github.com/DennisBecker/swgoh-raid-analysis',
  
  // Base URL for deployment (GitHub Pages)
  baseUrl: import.meta.env.BASE_URL || (import.meta.env.PROD ? '/swgoh-raid-analysis/' : '/'),
  
  // Project title
  title: `SWGoH Raid Analysis`,
  
  // Project description
  description: 'Advanced Guild Raid Analytics for Star Wars: Galaxy of Heroes',
};
