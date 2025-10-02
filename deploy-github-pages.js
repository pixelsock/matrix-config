#!/usr/bin/env node

/**
 * GitHub Pages Deployment Script
 * Deploys built JavaScript files to GitHub Pages for Webflow integration
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  distPath: path.join(__dirname, 'dist'),
  ghPagesPath: path.join(__dirname, 'gh-pages'),
  scriptNames: [
    'main.build.js',
    'productsPage.build.js'
  ]
};

/**
 * Deploy to GitHub Pages
 */
function deployToGitHubPages() {
  console.log('🚀 Deploying to GitHub Pages...\n');

  // Check if dist directory exists
  if (!fs.existsSync(config.distPath)) {
    console.error('❌ Dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Check if we're in a git repository
  try {
    execSync('git status --porcelain', { stdio: 'pipe' });
  } catch (error) {
    console.error('❌ Not in a git repository. Initialize git first.');
    process.exit(1);
  }

  // Create gh-pages directory
  if (fs.existsSync(config.ghPagesPath)) {
    fs.rmSync(config.ghPagesPath, { recursive: true });
  }
  fs.mkdirSync(config.ghPagesPath, { recursive: true });

  // Copy script files
  const deployedFiles = [];
  config.scriptNames.forEach(scriptName => {
    const sourcePath = path.join(config.distPath, scriptName);
    const destPath = path.join(config.ghPagesPath, scriptName);
    
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      const stats = fs.statSync(destPath);
      deployedFiles.push({
        name: scriptName,
        size: stats.size,
        sizeKB: Math.round(stats.size / 1024)
      });
      console.log(`✅ Prepared ${scriptName} (${Math.round(stats.size / 1024)} KB)`);
    } else {
      console.warn(`⚠️  Script file not found: ${scriptName}`);
    }
  });

  // Create index.html for GitHub Pages
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matrix Config - Scripts</title>
    <meta name="robots" content="noindex, nofollow">
</head>
<body>
    <h1>Matrix Config Scripts</h1>
    <p>This page hosts the JavaScript files for the Matrix Config application.</p>
    <p>These files are automatically deployed from the main repository.</p>
    
    <h2>Available Scripts:</h2>
    <ul>
        ${deployedFiles.map(file => `<li><a href="${file.name}">${file.name}</a> (${file.sizeKB} KB)</li>`).join('\n        ')}
    </ul>
    
    <h2>Usage in Webflow:</h2>
    <p>Add these script tags to your Webflow page:</p>
    <pre><code>${deployedFiles.map(file => `<script src="https://[YOUR_USERNAME].github.io/matrix-config/${file.name}"></script>`).join('\n')}</code></pre>
    
    <p><small>Last updated: ${new Date().toISOString()}</small></p>
</body>
</html>`;

  fs.writeFileSync(path.join(config.ghPagesPath, 'index.html'), indexHtml);

  // Get repository URL
  let repoUrl;
  try {
    const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
    if (remoteUrl.includes('github.com')) {
      const match = remoteUrl.match(/github\.com[:/]([^/]+)\/([^/]+?)(?:\.git)?$/);
      if (match) {
        const [, username, repoName] = match;
        repoUrl = `https://${username}.github.io/${repoName.replace('.git', '')}`;
      }
    }
  } catch (error) {
    console.warn('⚠️  Could not determine repository URL');
  }

  // Deploy to gh-pages branch
  try {
    console.log('\n📤 Deploying to GitHub Pages...');
    
    // Initialize git in gh-pages directory
    execSync('git init', { cwd: config.ghPagesPath, stdio: 'pipe' });
    execSync('git add .', { cwd: config.ghPagesPath });
    execSync('git commit -m "Deploy Matrix Config scripts"', { cwd: config.ghPagesPath });
    
    // Add remote and push to gh-pages branch
    execSync(`git remote add origin ${execSync('git remote get-url origin', { encoding: 'utf8' }).trim()}`, { 
      cwd: config.ghPagesPath, 
      stdio: 'pipe' 
    });
    execSync('git push -f origin HEAD:gh-pages', { cwd: config.ghPagesPath });
    
    console.log('✅ Successfully deployed to GitHub Pages!');
    
    if (repoUrl) {
      console.log(`\n🌐 Your scripts are available at:`);
      deployedFiles.forEach(file => {
        console.log(`   ${repoUrl}/${file.name}`);
      });
      
      console.log(`\n📝 Add these script tags to your Webflow page:`);
      deployedFiles.forEach(file => {
        console.log(`   <script src="${repoUrl}/${file.name}"></script>`);
      });
    }
    
  } catch (error) {
    console.error('❌ Failed to deploy to GitHub Pages:', error.message);
    console.log('\n📋 Manual deployment steps:');
    console.log('   1. Go to your GitHub repository');
    console.log('   2. Go to Settings → Pages');
    console.log('   3. Select "Deploy from a branch"');
    console.log('   4. Select "gh-pages" branch');
    console.log('   5. Save the settings');
    console.log('   6. Upload the files from:', config.ghPagesPath);
    process.exit(1);
  }

  return deployedFiles;
}

// Run if called directly
if (require.main === module) {
  deployToGitHubPages();
}

module.exports = { deployToGitHubPages };
