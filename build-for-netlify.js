#!/usr/bin/env node

/**
 * Build Script for Netlify Deployment
 * Creates the netlify-deploy directory structure for automated deployment
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
 * Build for Netlify deployment
 */
function buildForNetlify() {
  console.log('🏗️  Building for Netlify deployment...\n');

  // Check if dist directory exists
  if (!fs.existsSync(config.distPath)) {
    console.error('❌ Dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Create netlify-deploy directory
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
      console.log(`✅ Copied ${scriptName} (${Math.round(stats.size / 1024)} KB)`);
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
    <meta name="description" content="JavaScript files for Matrix Config application">
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px; 
            line-height: 1.6;
        }
        .script-link { 
            display: block; 
            margin: 10px 0; 
            padding: 15px; 
            background: #f5f5f5; 
            border-radius: 8px; 
            text-decoration: none; 
            color: #333;
            border: 1px solid #e0e0e0;
            transition: all 0.2s ease;
        }
        .script-link:hover { 
            background: #e5e5e5; 
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        pre { 
            background: #f8f9fa; 
            padding: 20px; 
            border-radius: 8px; 
            overflow-x: auto; 
            border: 1px solid #e9ecef;
        }
        code { 
            font-family: 'Monaco', 'Menlo', 'Consolas', monospace; 
            font-size: 14px;
        }
        .info-box {
            background: #e3f2fd;
            border: 1px solid #2196f3;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
        }
        .warning-box {
            background: #fff3e0;
            border: 1px solid #ff9800;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
        }
        .success-box {
            background: #e8f5e8;
            border: 1px solid #4caf50;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
        }
        .deployment-info {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <h1>🔧 Matrix Config Scripts</h1>
    <p>JavaScript files for the Matrix Config application, automatically deployed from GitHub.</p>
    
    <div class="success-box">
        <strong>✅ Deployment Status:</strong> Active and ready for Webflow integration
    </div>
    
    <h2>📦 Available Scripts:</h2>
    ${deployedFiles.map(file => `
    <a href="${file.name}" class="script-link">
        <strong>${file.name}</strong><br>
        <small>Size: ${file.sizeKB} KB | Type: JavaScript Module</small>
    </a>`).join('')}
    
    <div class="info-box">
        <h3>🌐 Webflow Integration</h3>
        <p>Add these script tags to your Webflow page's <strong>Custom Code → Head Code</strong> section:</p>
    </div>
    
    <pre><code>${deployedFiles.map(file => `<script src="https://matrix-config.netlify.app/${file.name}"></script>`).join('\n')}</code></pre>
    
    <div class="warning-box">
        <h3>⚠️ Important Notes:</h3>
        <ul>
            <li>Make sure your Webflow page is set to <strong>Publish</strong> for changes to take effect</li>
            <li>Test the functionality in a staging environment first</li>
            <li>Monitor browser console for any JavaScript errors</li>
        </ul>
    </div>
    
    <div class="deployment-info">
        <h3>🚀 Deployment Information:</h3>
        <p><strong>Version:</strong> ${require('./package.json').version}</p>
        <p><strong>Generated:</strong> ${new Date().toISOString()}</p>
        <p><strong>Auto-deployment:</strong> Enabled via GitHub integration</p>
        <p><strong>CDN:</strong> Netlify Edge Network</p>
    </div>
    
    <h2>🔄 Updating Scripts:</h2>
    <p>Scripts are automatically updated when you push changes to the main branch of your GitHub repository.</p>
    
    <footer style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 14px;">
        <p>Matrix Config Application • Automated Deployment • <a href="https://netlify.com" target="_blank">Powered by Netlify</a></p>
    </footer>
</body>
</html>`;

  fs.writeFileSync(path.join(config.netlifyPath, 'index.html'), indexHtml);

  // Create _redirects file for SPA support
  fs.writeFileSync(path.join(config.netlifyPath, '_redirects'), '/*    /index.html   200');

  // Create a simple robots.txt
  fs.writeFileSync(path.join(config.netlifyPath, 'robots.txt'), 'User-agent: *\nDisallow: /\n');

  console.log('✅ Netlify deployment package created!');
  console.log(`📁 Location: ${config.netlifyPath}`);
  console.log('\n📋 Files created:');
  deployedFiles.forEach(file => {
    console.log(`   - ${file.name} (${file.sizeKB} KB)`);
  });
  console.log('   - index.html (landing page)');
  console.log('   - _redirects (routing rules)');
  console.log('   - robots.txt (SEO blocking)');
  
  return deployedFiles;
}

// Run if called directly
if (require.main === module) {
  buildForNetlify();
}

module.exports = { buildForNetlify };
