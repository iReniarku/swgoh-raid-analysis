// Project configuration - dynamically set from environment variables
export const PROJECT_CONFIG = {
  // Repository name (e.g., "order66")
  name: import.meta.env.PROJECT_NAME || import.meta.env.GITHUB_REPOSITORY_NAME || 'order66',
  
  // Full GitHub repository path (e.g., "DennisBecker/order66")
  repository: import.meta.env.GITHUB_REPOSITORY || 'DennisBecker/order66',
  
  // Repository owner (e.g., "DennisBecker")
  owner: import.meta.env.GITHUB_REPOSITORY_OWNER || 'DennisBecker',
  
  // GitHub URL (e.g., "https://github.com/DennisBecker/order66")
  githubUrl: import.meta.env.GITHUB_URL || 'https://github.com/DennisBecker/order66',
  
  // Base URL for deployment (GitHub Pages)
  baseUrl: import.meta.env.BASE_URL || (import.meta.env.PROD ? '/order66/' : '/'),
  
  // Project title
  title: `${import.meta.env.PROJECT_NAME || import.meta.env.GITHUB_REPOSITORY_NAME || 'Order 66'} Raid Analysis`,
  
  // Project description
  description: 'Advanced Guild Analytics for Star Wars: Galaxy of Heroes',
};
