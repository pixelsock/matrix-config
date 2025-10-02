# Webflow Deployment Guide

This guide will help you deploy your matrix-config application to Webflow using the Data API v2 hosted scripts feature.

## 🚀 Quick Start

### 1. Create Webflow App

1. Go to [Webflow Apps](https://webflow.com/apps)
2. Click "Create an app"
3. Fill in app details:
   - **App Name**: Matrix Config Deployer
   - **Description**: Automated deployment for matrix-config scripts
   - **Redirect URI**: `http://localhost:3000/callback` (for testing)
4. Note down your **Client ID** and **Client Secret**

### 2. Get API Access

1. In your app settings, go to "API Access"
2. Generate an **API Token**
3. Copy the token (you'll need it for deployment)

### 3. Get Site ID

1. Go to your matrix-config Webflow project
2. In Project Settings → General, find your **Site ID**
3. Copy the Site ID

### 4. Setup Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your values:
   ```env
   WEBFLOW_API_TOKEN=your_actual_api_token
   WEBFLOW_SITE_ID=your_actual_site_id
   ```

### 5. Deploy to Webflow

```bash
# Build and deploy in one command
npm run deploy:webflow

# Or deploy existing build
npm run webflow:deploy
```

## 📋 What Happens During Deployment

1. **Build Process**: Creates optimized JavaScript files in `/dist`
2. **Upload Scripts**: Registers `main.build.js` and `productsPage.build.js` as hosted scripts
3. **Get Script IDs**: Returns script IDs for manual page assignment

## 🔧 Manual Steps in Webflow

After running the deployment script:

1. **Go to your Webflow project**
2. **Navigate to your `/scripts` page**
3. **Add Hosted Scripts**:
   - Click the page settings (gear icon)
   - Go to "Custom Code" tab
   - Add the hosted scripts that were uploaded
4. **Publish your site**

## 🎯 Script Assignment

The scripts will be automatically loaded on any page where you assign them. For your `/scripts` page:

- `main.build.js` - Main application functionality
- `productsPage.build.js` - Products page specific features

## 🔄 Updating Scripts

To update your scripts:

```bash
# Make changes to your code
# Then redeploy
npm run deploy:webflow
```

The new scripts will be uploaded with updated content.

## 🐛 Troubleshooting

### Common Issues

1. **"Missing environment variables"**
   - Check your `.env` file exists and has correct values
   - Verify API token and Site ID are correct

2. **"Dist directory not found"**
   - Run `npm run build` first to create the dist folder

3. **"Failed to upload script"**
   - Check your API token has correct permissions
   - Verify your Site ID is correct

4. **Scripts not loading on page**
   - Ensure you've manually assigned the hosted scripts to your page
   - Check that the page is published

### Getting Help

- Check Webflow API documentation: https://developers.webflow.com/
- Verify your app permissions in Webflow App settings
- Test API token with a simple GET request first

## 📚 API Reference

The deployment script uses these Webflow Data API v2 endpoints:

- `POST /v2/sites/{siteId}/hosted-scripts` - Upload new script
- `PATCH /v2/sites/{siteId}/pages/{pageId}` - Apply script to page

## 🔐 Security Notes

- Never commit your `.env` file to version control
- Keep your API tokens secure
- Use environment variables in production
- Consider using a CI/CD pipeline for automated deployments
