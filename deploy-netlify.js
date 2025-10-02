#!/usr/bin/env node

/**
 * Netlify Deployment Script
 * Creates a deployment package for Netlify Drop
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  distPath: path.join(__dirname, 'dist'),
  netlifyPath: path.join(__dirname, 'netlify-deploy'),
  scriptNames: [
    'main.build.js',
    'productsPage.build.js'
  ]
};

/**
 * Create Netlify deployment package
 */
function createNetlifyPackage() {
  console.log('🚀 Creating Netlify deployment package...\n');

  // Check if dist directory exists
  if (!fs.existsSync(config.distPath)) {
    console.error('❌ Dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Create netlify directory
  if (fs.existsSync(config.netlifyPath)) {
    fs.rmSync(config.netlifyPath, { recursive: true });
  }
  fs.mkdirSync(config.netlifyPath, { recursive: true });

  // Copy script files
  const deployedFiles = [];
  config.scriptNames.forEach(scriptName => {
    const sourcePath = path.join(config.distPath, scriptName);
    const destPath = path.join(config.netlifyPath, scriptName);
    
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

  // Create index.html
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matrix Config Scripts</title>
    <meta name="robots" content="noindex, nofollow">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .script-link { display: block; margin: 10px 0; padding: 10px; background: #f5f5f5; border-radius: 5px; text-decoration: none; color: #333; }
        .script-link:hover { background: #e5e5e5; }
        pre { background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; }
        code { font-family: 'Monaco', 'Menlo', monospace; }
    </style>
</head>
<body>
    <h1>Matrix Config Scripts</h1>
    <p>JavaScript files for the Matrix Config application.</p>
    
    <h2>Available Scripts:</h2>
    ${deployedFiles.map(file => `
    <a href="${file.name}" class="script-link">
        <strong>${file.name}</strong><br>
        <small>Size: ${file.sizeKB} KB</small>
    </a>`).join('')}
    
    <h2>Webflow Integration:</h2>
    <p>Add these script tags to your Webflow page:</p>
    <pre><code>${deployedFiles.map(file => `<script src="[YOUR_NETLIFY_URL]/${file.name}"></script>`).join('\n')}</code></pre>
    
    <h2>Deployment Instructions:</h2>
    <ol>
        <li>Go to <a href="https://app.netlify.com/drop" target="_blank">Netlify Drop</a></li>
        <li>Drag and drop the contents of this folder</li>
        <li>Copy the generated URL</li>
        <li>Replace <code>[YOUR_NETLIFY_URL]</code> in the script tags above</li>
        <li>Add the script tags to your Webflow page</li>
    </ol>
    
    <p><small>Generated: ${new Date().toISOString()}</small></p>
</body>
</html>`;

  fs.writeFileSync(path.join(config.netlifyPath, 'index.html'), indexHtml);

  // Create _redirects file for SPA support
  fs.writeFileSync(path.join(config.netlifyPath, '_redirects'), '/*    /index.html   200');

  console.log('✅ Netlify deployment package created!');
  console.log(`📁 Location: ${config.netlifyPath}`);
  console.log('\n📋 Next steps:');
  console.log('   1. Go to https://app.netlify.com/drop');
  console.log('   2. Drag and drop the contents of the netlify-deploy folder');
  console.log('   3. Copy the generated URL');
  console.log('   4. Add script tags to your Webflow page using the URL');
  console.log('   5. Test and publish your Webflow site');
  
  return deployedFiles;
}

// Run if called directly
if (require.main === module) {
  createNetlifyPackage();
}

module.exports = { createNetlifyPackage };
