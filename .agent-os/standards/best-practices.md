# Development Best Practices

## Context

Development guidelines for the matrix-config JavaScript library project.

## Core Principles

### Modular Architecture
- Keep each module focused on a single responsibility
- Use ES6 import/export for clear module boundaries
- Export utility functions from dedicated utility modules
- Organize related functionality into separate files (e.g., pdfGenerator.js, skuGeneration.js)

### Clear Function Naming
- Use descriptive function names that explain their purpose
- Functions should be verbs that describe the action (generateSku, matchesCombination, showHideSizesBasedOffStyle)
- Boolean functions should be prefixed with "is" (isRoundStyle)
- Use camelCase for function and variable names

### Configuration Management
- Store mapping objects and configuration data in dedicated modules
- Use clear object structures for complex mappings (skuMapping object)
- Keep business rules separate from presentation logic
- Export configuration objects for reusability

### Error Handling and Logging
- Use console.log for development debugging
- Log important data structures for troubleshooting
- Handle edge cases in conditional logic

### File Organization
- Group related functionality by domain (PDF generation, SKU generation, filters)
- Use helper files for utilities that are used across modules
- Keep main entry points clean and focused on orchestration
- Separate fonts and assets into appropriate directories

## Dependencies

### Library Selection
When adding dependencies to this JavaScript library:
- Choose well-maintained packages with active development
- Prefer libraries that work well in browser environments
- Consider bundle size impact for CDN distribution
- Verify compatibility with ES6 module system

### Current Stack Patterns
- Use jsPDF for PDF generation functionality
- Leverage WebFontLoader for dynamic font loading
- Utilize jQuery patterns where already established in the codebase
- Follow webpack configuration patterns for build optimization

## Deployment and Distribution

### Version Management
- Use semantic versioning for releases
- Automate version bumps through npm scripts
- Ensure build artifacts are included in releases for CDN distribution

### Build Process
- Always run webpack build before deployment
- Ensure dist/ files are properly generated and committed
- Test CDN URLs after deployment to verify availability