#!/usr/bin/env node

/**
 * Simple Webflow Deployment Script
 * Creates a deployment package and provides instructions for manual Webflow integration
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  distPath: path.join(__dirname, 'dist'),
  outputPath: path.join(__dirname, 'webflow-deployment'),
  scriptNames: [
    'main.build.js',
    'productsPage.build.js'
  ]
};

/**
 * Create deployment package for Webflow
 */
function createDeploymentPackage() {
  console.log('🚀 Creating Webflow deployment package...\n');

  // Check if dist directory exists
  if (!fs.existsSync(config.distPath)) {
    console.error('❌ Dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Create output directory
  if (fs.existsSync(config.outputPath)) {
    fs.rmSync(config.outputPath, { recursive: true });
  }
  fs.mkdirSync(config.outputPath, { recursive: true });

  let packageInfo = {
    deploymentDate: new Date().toISOString(),
    version: require('./package.json').version,
    files: []
  };

  // Copy script files
  config.scriptNames.forEach(scriptName => {
    const sourcePath = path.join(config.distPath, scriptName);
    const destPath = path.join(config.outputPath, scriptName);
    
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      const stats = fs.statSync(destPath);
      packageInfo.files.push({
        name: scriptName,
        size: stats.size,
        sizeKB: Math.round(stats.size / 1024)
      });
      console.log(`✅ Copied ${scriptName} (${Math.round(stats.size / 1024)} KB)`);
    } else {
      console.warn(`⚠️  Script file not found: ${scriptName}`);
    }
  });

  // Create package info file
  fs.writeFileSync(
    path.join(config.outputPath, 'package-info.json'),
    JSON.stringify(packageInfo, null, 2)
  );

  // Create Webflow integration instructions
  const instructions = `# Webflow Integration Instructions

## 📦 Deployment Package Created
- **Date**: ${packageInfo.deploymentDate}
- **Version**: ${packageInfo.version}

## 📁 Files Included
${packageInfo.files.map(file => `- ${file.name} (${file.sizeKB} KB)`).join('\n')}

## 🔧 Integration Steps

### Option 1: Upload to Webflow Assets (Recommended)

1. **Go to your Webflow project**
2. **Navigate to Site Settings → Assets**
3. **Upload the following files:**
   ${packageInfo.files.map(file => `   - ${file.name}`).join('\n')}

4. **Get the asset URLs** (they'll look like):
   ${packageInfo.files.map(file => `   - ${file.name}: https://uploads-ssl.webflow.com/.../${file.name}`).join('\n')}

5. **Add to your /scripts page:**
   - Go to your /scripts page in Webflow
   - Click the page settings (gear icon)
   - Go to "Custom Code" tab
   - Add the following in the "Head Code" section:

\`\`\`html
<!-- Matrix Config Scripts -->
<script src="[URL_FROM_STEP_4_FOR_main.build.js]"></script>
<script src="[URL_FROM_STEP_4_FOR_productsPage.build.js]"></script>
\`\`\`

### Option 2: External CDN (Alternative)

1. **Upload files to a CDN** (GitHub Pages, Netlify, Vercel, etc.)
2. **Get the public URLs**
3. **Add the script tags to your Webflow page** as shown above

### Option 3: GitHub Pages (Free Option)

1. **Push files to a GitHub repository**
2. **Enable GitHub Pages**
3. **Use URLs like**: https://username.github.io/repo-name/main.build.js

## 🎯 Page Assignment

The scripts should be loaded on:
- **Main scripts page** (where users configure products)
- **Products page** (if separate from main page)

## 🔄 Updating Scripts

To update the scripts:
1. Run \`npm run build\`
2. Run \`npm run deploy:webflow\` to create a new package
3. Upload the new files to replace the old ones
4. Publish your Webflow site

## 📊 Performance Notes

${packageInfo.files.map(file => `- ${file.name}: ${file.sizeKB} KB`).join('\n')}

Consider code splitting or lazy loading for better performance if files are large.

## 🐛 Troubleshooting

- **Scripts not loading**: Check that URLs are correct and accessible
- **Console errors**: Open browser dev tools to see any JavaScript errors
- **CORS issues**: Make sure scripts are served from the same domain or with proper CORS headers
`;

  fs.writeFileSync(
    path.join(config.outputPath, 'INTEGRATION_INSTRUCTIONS.md'),
    instructions
  );

  console.log('\n🎉 Deployment package created successfully!');
  console.log(`📁 Location: ${config.outputPath}`);
  console.log('\n📋 Next steps:');
  console.log('   1. Read INTEGRATION_INSTRUCTIONS.md for detailed setup');
  console.log('   2. Upload the .js files to Webflow Assets or a CDN');
  console.log('   3. Add script tags to your /scripts page');
  console.log('   4. Test and publish your site');
  
  return packageInfo;
}

// Run if called directly
if (require.main === module) {
  createDeploymentPackage();
}

module.exports = { createDeploymentPackage };
