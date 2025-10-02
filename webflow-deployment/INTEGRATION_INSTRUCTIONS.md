# Webflow Integration Instructions

## 📦 Deployment Package Created
- **Date**: 2025-10-02T17:25:55.867Z
- **Version**: 4.9.32

## 📁 Files Included
- main.build.js (3777 KB)
- productsPage.build.js (4 KB)

## 🔧 Integration Steps

### Option 1: Upload to Webflow Assets (Recommended)

1. **Go to your Webflow project**
2. **Navigate to Site Settings → Assets**
3. **Upload the following files:**
      - main.build.js
   - productsPage.build.js

4. **Get the asset URLs** (they'll look like):
      - main.build.js: https://uploads-ssl.webflow.com/.../main.build.js
   - productsPage.build.js: https://uploads-ssl.webflow.com/.../productsPage.build.js

5. **Add to your /scripts page:**
   - Go to your /scripts page in Webflow
   - Click the page settings (gear icon)
   - Go to "Custom Code" tab
   - Add the following in the "Head Code" section:

```html
<!-- Matrix Config Scripts -->
<script src="[URL_FROM_STEP_4_FOR_main.build.js]"></script>
<script src="[URL_FROM_STEP_4_FOR_productsPage.build.js]"></script>
```

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
1. Run `npm run build`
2. Run `npm run deploy:webflow` to create a new package
3. Upload the new files to replace the old ones
4. Publish your Webflow site

## 📊 Performance Notes

- main.build.js: 3777 KB
- productsPage.build.js: 4 KB

Consider code splitting or lazy loading for better performance if files are large.

## 🐛 Troubleshooting

- **Scripts not loading**: Check that URLs are correct and accessible
- **Console errors**: Open browser dev tools to see any JavaScript errors
- **CORS issues**: Make sure scripts are served from the same domain or with proper CORS headers
