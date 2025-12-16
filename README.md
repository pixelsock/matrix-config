# Matrix Config

JavaScript application for the Matrix Mirrors product configurator, deployed via Webflow Cloud.

## Overview

This application provides interactive product configuration functionality for the Matrix Mirrors Webflow site. It includes:

- **main.build.js** - Main configurator for `/configure/*` pages
- **productsPage.build.js** - Product listing functionality for `/products` page
- **quoteApp.build.js** - Quote generation app with PDF export and Dropbox integration

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Webflow Site                            │
│              (matrixmirrors.com)                            │
├─────────────────────────────────────────────────────────────┤
│  Header Custom Code                                         │
│  └─ Dynamic script loader                                   │
│     └─ Loads /scripts/*.build.js based on page path         │
├─────────────────────────────────────────────────────────────┤
│  Webflow Cloud (/scripts)                                   │
│  ├─ main.build.js                                           │
│  ├─ productsPage.build.js                                   │
│  ├─ quoteApp.build.js                                       │
│  └─ (chunk files)                                           │
└─────────────────────────────────────────────────────────────┘
```

## Project Structure

```
matrix-config/
├── src/                    # Source JavaScript files
│   ├── main.js             # Main configurator entry point
│   ├── products-page.js    # Products page entry point
│   └── quote-app/          # Quote generation app
│       ├── index.js        # Quote app entry point
│       ├── generatePDF.js  # PDF generation logic
│       └── dropbox.js      # Dropbox integration
├── app/                    # Webpack build output
├── dist/                   # Astro/Cloudflare build output
├── .github/workflows/      # CI/CD automation
│   └── deploy.yml          # Auto-deploy on push to main
├── astro.config.mjs        # Astro configuration for Webflow Cloud
├── webpack.config.js       # Webpack bundler configuration
├── webflow.json            # Webflow Cloud project configuration
└── package.json            # Dependencies and scripts
```

## Development

### Prerequisites

- Node.js 22+
- npm
- Webflow CLI (`npm install -g @webflow/webflow-cli`)

### Local Development

```bash
# Install dependencies
npm install

# Start development server (localhost:9000)
npm start
```

The dev server runs at `http://localhost:9000`. Update your Webflow header code to use localhost for testing:

```javascript
const isDevelopment = window.location.hostname === 'localhost';
```

### Building

```bash
# Build webpack only (outputs to app/)
npm run build

# Build for Webflow Cloud (webpack + Astro)
npm run build:cloud
```

## Deployment

### Automatic (CI/CD)

Pushing to `main` branch automatically triggers deployment via GitHub Actions.

**Required GitHub Secrets:**
- `WEBFLOW_SITE_ID` - Your Webflow site ID
- `WEBFLOW_SITE_API_TOKEN` - Webflow API token with site access

### Manual Deployment

```bash
# Authenticate with Webflow (first time only)
webflow auth login

# Deploy to Webflow Cloud
npm run deploy
```

## Webflow Integration

### Header Custom Code

Add this to your Webflow site's **Project Settings → Custom Code → Head Code**:

```html
<!-- Configuration Variables -->
<script>
  window.CONFIG = {
    VERSION: '4.9.32',
    SCRIPTS_PATH: '/scripts',
  };
</script>

<!-- Dynamic Script Loading -->
<script type="text/javascript">
  document.addEventListener('DOMContentLoaded', function() {
    const isDevelopment = window.location.hostname === 'localhost';

    function getScriptUrl(filename) {
      if (isDevelopment) {
        return `http://localhost:9000/${filename}`;
      }
      return `${window.CONFIG.SCRIPTS_PATH}/${filename}`;
    }

    function loadScript(src) {
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      document.head.appendChild(script);
    }

    if (window.location.pathname.startsWith('/configure/')) {
      loadScript(getScriptUrl('main.build.js'));
    } else if (window.location.pathname === '/products') {
      loadScript(getScriptUrl('productsPage.build.js'));
    }
  });
</script>
```

### Script URLs

Once deployed, scripts are available at:
- `https://matrixmirrors.com/scripts/main.build.js`
- `https://matrixmirrors.com/scripts/productsPage.build.js`
- `https://matrixmirrors.com/scripts/quoteApp.build.js`

## Configuration Files

### webflow.json

```json
{
  "siteId": "638fbc9b6d164e234dc677d7",
  "workspaceId": "633af77b8d286201733659d9",
  "cloud": {
    "framework": "astro",
    "project_id": "85e33a1c-eec8-41c0-b72e-26cfdfe3651d"
  }
}
```

### Environment Variables

For CI/CD deployment, set these in GitHub repository secrets:

| Variable | Description |
|----------|-------------|
| `WEBFLOW_SITE_ID` | `638fbc9b6d164e234dc677d7` |
| `WEBFLOW_SITE_API_TOKEN` | Your Webflow API token |
| `CLIENT_ID` | Dropbox app client ID (for quoteApp) |
| `CLIENT_SECRET` | Dropbox app client secret |
| `REFRESH_TOKEN` | Dropbox refresh token |
| `DROPBOX_ACCESS_TOKEN` | Dropbox access token |

## Troubleshooting

### Scripts not loading

1. Check browser console for errors
2. Verify Webflow Cloud deployment status in dashboard
3. Ensure header custom code is published

### Build failures

```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment issues

```bash
# Re-authenticate with Webflow
webflow auth login

# Check deployment status
# Visit: https://webflow.com/dashboard/sites/matrix-mirrors/webflow-cloud
```

## Version History

- **4.9.32** - Migrated from Netlify to Webflow Cloud
- See git history for full changelog

## Links

- [Webflow Site](https://matrixmirrors.com)
- [Webflow Designer](https://webflow.com/design/matrix-mirrors)
- [Webflow Cloud Dashboard](https://webflow.com/dashboard/sites/matrix-mirrors/webflow-cloud)
