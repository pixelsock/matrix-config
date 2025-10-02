# Tech Stack

## Context

Tech stack for matrix-config - A JavaScript library for Matrix Mirrors configuration and PDF generation.

- **Project Type**: JavaScript Library/Package
- **Language**: JavaScript ES6+
- **Build Tool**: Webpack 5
- **Transpiler**: Babel with @babel/preset-env
- **Package Manager**: npm
- **Node Version**: Compatible with modern Node.js (14+)
- **Module System**: ES6 modules (import/export)
- **Development Server**: webpack-dev-server
- **Primary Dependencies**: 
  - jsPDF (PDF generation)
  - PDFKit (PDF toolkit)
  - @finsweet/attributes-cmscore (CMS integration)
  - WebFontLoader (font loading)
- **Development Dependencies**:
  - Babel ecosystem for transpilation
  - Webpack and related plugins
  - Browser-sync for development
  - Express for server functionality
- **Distribution**: jsDelivr CDN via GitHub releases
- **Deployment**: Automated via npm scripts and GitHub Actions
- **Version Control**: Git with semantic versioning
- **Release Management**: GitHub CLI (gh) for automated releases
- **Build Output**: UMD modules in dist/ directory
- **Entry Points**: 
  - main.js (primary library functionality)
  - products-page.js (products page specific features)
- **Development Environment**: Local webpack-dev-server on port 9000
- **Browser Support**: Modern browsers (ES6+ transpiled via Babel)