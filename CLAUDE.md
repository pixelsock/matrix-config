# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a JavaScript library for the Matrix Mirrors product configuration system. It generates SKUs for custom mirror configurations and produces PDF specifications based on user selections. The library is distributed via jsDelivr CDN.

## Build and Development Commands

### Building
```bash
# Production build (minified)
npm run build

# Development build (with source maps)
npm run build:dev

# Start development server
npm start
```
The dev server runs on http://localhost:9000 with hot reload enabled.

### Deployment
```bash
# Deploy to GitHub and trigger CDN update
npm run deploy

# Test deployment process without pushing
npm run deploy:test
```

The `deploy` command performs a complete release:
1. Builds production assets
2. Commits build files (overriding .gitignore)
3. Bumps version (patch)
4. Pushes to GitHub with tags
5. Creates GitHub release
6. Files become available via jsDelivr CDN at:
   - `https://cdn.jsdelivr.net/gh/pixelsock/matrix-config@{version}/dist/main.build.js`
   - `https://cdn.jsdelivr.net/gh/pixelsock/matrix-config@{version}/dist/productsPage.build.js`

## Architecture

### Build System
- **Webpack 5** bundles two entry points:
  - `src/main.js` → `dist/main.build.js` (main configurator)
  - `src/products-page.js` → `dist/productsPage.build.js` (products page filtering)
- **Babel** transpiles ES6+ to browser-compatible JavaScript
- Build output is committed to git for CDN distribution (unusual but intentional)

### Core Modules

**SKU Generation (`skuGeneration.js`)**
- `generateSku()` - Creates product SKUs from user selections
- `skuMapping` - Maps configuration options to SKU codes
- Handles special cases: product lines (Bright Line, Classic, Future, Deco, Anti-Ligature, Polished, Suspended), frame styles, accessories combinations

**Rules Engine (`rules.js`)**
- Complex business logic defining which options are compatible
- Each rule can: enable, disable, showAndClick, excludeProductLines
- Handles combinations with `&&` and `||` operators
- Negation supported with `!` prefix

**PDF Generation**
- `pdfGenerator.js` - Standard mirrors (uses jsPDF)
- `polishedPdfGenerator.js` - Polished product line variant
- `suspendedPdfGenerator.js` - Suspended product line variant
- Embeds custom Inter fonts (loaded from `src/fonts/`)

**Utilities (`utils.js`)**
- `matchesCombination()` - Evaluates rule combinations against selected options
- `isRoundStyle()` - Detects circular mirrors (Circle, Oval styles)
- `showHideSizesBasedOffStyle()` - Dynamic form field visibility
- `productLine()` - Extracts product line from selections

**Form Management**
- `main.js` - Main configuration form logic with jQuery
- `filterHelper.js` - Option filtering
- `reset.js` - Form reset functionality

### Data Flow
1. User interacts with form (radio/checkbox/text inputs)
2. `getSelectedOptions()` collects all selections
3. Rules engine validates and adjusts available options
4. `generateSku()` produces product code
5. PDF generators create specification sheets on demand

## Key Patterns

### SKU Structure
SKUs are built from option codes concatenated in specific order:
- Mirror Style code (e.g., "01", "51")
- Frame Color (e.g., "BF", "SF", "NA")
- Frame Thickness (if applicable)
- Orientation ("1" vertical, "2" horizontal)
- Light Direction ("D", "i", "B")
- Color Temperature ("27", "30", "00" for adjustable)
- Mirror Controls and Accessories
- Light Output and Dimming

### Product Line Variations
Different product lines have different rules and PDF templates:
- **Bright Line** - "B" prefix
- **Classic** - "L" prefix
- **Future** - "F" prefix
- **Deco** - "T/W" prefix
- **Anti-Ligature** - "A" prefix (restricted options)
- **Polished** - "MIRR" prefix
- **Suspended** - "S" prefix

### Testing SKU Generation
Test files are provided:
- `test-sku-generation.html` - Browser-based testing
- `test-sku-node.js` - Node.js testing script

Run: `node test-sku-node.js`

## Important Notes

- **Build files are tracked in git** - The `dist/` directory is committed despite being typically gitignored, because jsDelivr serves directly from GitHub releases
- **Version bumping happens twice** - Once locally during deploy, once in GitHub Actions
- **jQuery dependency** - The codebase uses jQuery extensively for DOM manipulation
- **Custom fonts** - Inter font files are embedded in the bundle for PDF generation
- **CDN cache purging** - After deploy, manually purge jsDelivr cache if needed: `https://purge.jsdelivr.net/gh/pixelsock/matrix-config@{version}/dist/main.build.js`
