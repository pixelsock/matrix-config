#!/usr/bin/env node

/**
 * Test Webflow API Connection
 * Verifies that your API token and site ID are working
 */

const https = require('https');

// Load environment variables
require('dotenv').config();

const config = {
  apiToken: process.env.WEBFLOW_API_TOKEN || '',
  siteId: process.env.WEBFLOW_SITE_ID || ''
};

async function testApiConnection() {
  console.log('🔍 Testing Webflow API connection...\n');

  // Check environment variables
  if (!config.apiToken || !config.siteId) {
    console.error('❌ Missing environment variables:');
    if (!config.apiToken) console.error('   WEBFLOW_API_TOKEN');
    if (!config.siteId) console.error('   WEBFLOW_SITE_ID');
    console.error('\n📖 Please check your .env file');
    return false;
  }

  console.log('✅ Environment variables found');
  console.log(`   API Token: ${config.apiToken.substring(0, 10)}...`);
  console.log(`   Site ID: ${config.siteId}`);

  // Test site access
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.webflow.com',
      port: 443,
      path: `/v2/sites/${config.siteId}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.apiToken}`,
        'accept-version': '1.0.0'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const siteData = JSON.parse(data);
          console.log('\n✅ API connection successful!');
          console.log(`   Site Name: ${siteData.name}`);
          console.log(`   Site Domain: ${siteData.domain}`);
          console.log(`   Last Published: ${siteData.lastPublished || 'Never'}`);
          resolve(true);
        } else {
          console.error('\n❌ API connection failed:');
          console.error(`   Status: ${res.statusCode}`);
          console.error(`   Response: ${data}`);
          resolve(false);
        }
      });
    });

    req.on('error', (error) => {
      console.error('\n❌ Network error:', error.message);
      resolve(false);
    });

    req.end();
  });
}

// Run test if called directly
if (require.main === module) {
  testApiConnection().then(success => {
    process.exit(success ? 0 : 1);
  });
}

module.exports = { testApiConnection };
