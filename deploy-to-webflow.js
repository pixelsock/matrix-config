#!/usr/bin/env node

/**
 * Webflow Data API v2 Deployment Script
 * Registers built JavaScript files as hosted scripts in Webflow
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables
require('dotenv').config();

// Configuration
const config = {
  // You'll need to get these from your Webflow App settings
  apiToken: process.env.WEBFLOW_API_TOKEN || '',
  siteId: process.env.WEBFLOW_SITE_ID || '', // Your matrix-config site ID
  distPath: path.join(__dirname, 'dist'),
  scriptNames: [
    'main.build.js',
    'productsPage.build.js'
  ]
};

/**
 * Upload file to Webflow as hosted script
 */
async function uploadScript(filePath, scriptName) {
  return new Promise((resolve, reject) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    const postData = JSON.stringify({
      name: scriptName,
      source: fileContent,
      canCopy: false,
      version: 1
    });

    const options = {
      hostname: 'api.webflow.com',
      port: 443,
      path: `/v2/sites/${config.siteId}/hosted-scripts`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiToken}`,
        'accept-version': '1.0.0',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`✅ Successfully uploaded ${scriptName}`);
          resolve(JSON.parse(data));
        } else {
          console.error(`❌ Failed to upload ${scriptName}:`, data);
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      console.error(`❌ Error uploading ${scriptName}:`, error.message);
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

/**
 * Apply hosted script to a page
 */
async function applyScriptToPage(scriptId, pageId) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      hostedScripts: [scriptId]
    });

    const options = {
      hostname: 'api.webflow.com',
      port: 443,
      path: `/v2/sites/${config.siteId}/pages/${pageId}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${config.apiToken}`,
        'accept-version': '1.0.0',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`✅ Successfully applied script to page`);
          resolve(JSON.parse(data));
        } else {
          console.error(`❌ Failed to apply script to page:`, data);
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      console.error(`❌ Error applying script to page:`, error.message);
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

/**
 * Main deployment function
 */
async function deployToWebflow() {
  console.log('🚀 Starting Webflow deployment...');
  
  // Check if required environment variables are set
  if (!config.apiToken || !config.siteId) {
    console.error('❌ Missing required environment variables:');
    console.error('   WEBFLOW_API_TOKEN - Your Webflow API token');
    console.error('   WEBFLOW_SITE_ID - Your matrix-config site ID');
    console.error('\n📖 Get these from your Webflow App settings');
    process.exit(1);
  }

  // Check if dist directory exists
  if (!fs.existsSync(config.distPath)) {
    console.error('❌ Dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  try {
    const uploadedScripts = [];
    
    // Upload each script file
    for (const scriptName of config.scriptNames) {
      const filePath = path.join(config.distPath, scriptName);
      
      if (!fs.existsSync(filePath)) {
        console.warn(`⚠️  Script file not found: ${scriptName}`);
        continue;
      }

      console.log(`📤 Uploading ${scriptName}...`);
      const result = await uploadScript(filePath, scriptName);
      uploadedScripts.push({ name: scriptName, id: result.id });
    }

    console.log('\n🎉 Deployment completed successfully!');
    console.log('📋 Uploaded scripts:');
    uploadedScripts.forEach(script => {
      console.log(`   - ${script.name} (ID: ${script.id})`);
    });

    console.log('\n📝 Next steps:');
    console.log('   1. Go to your Webflow project');
    console.log('   2. Navigate to your /scripts page');
    console.log('   3. Add the hosted scripts to the page');
    console.log('   4. Publish your site');

  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  }
}

// Run deployment if called directly
if (require.main === module) {
  deployToWebflow();
}

module.exports = { deployToWebflow, uploadScript, applyScriptToPage };
