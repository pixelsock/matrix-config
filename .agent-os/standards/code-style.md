# Code Style Guide

## Context

Code style rules for the matrix-config JavaScript library project.

## General Formatting

### Indentation
- Use 2 spaces for indentation (never tabs)
- Maintain consistent indentation throughout files
- Align nested structures for readability

### Naming Conventions
- **Functions and Variables**: Use camelCase (e.g., `generateSku`, `selectedOptions`, `isRoundStyle`)
- **Constants and Mappings**: Use camelCase for objects (e.g., `skuMapping`)
- **File Names**: Use camelCase for JavaScript files (e.g., `skuGeneration.js`, `pdfGenerator.js`)
- **Boolean Functions**: Prefix with "is" or "has" (e.g., `isRoundStyle()`)

### String Formatting
- Use single quotes for strings: `'Full Frame Edge'`
- Use template literals for dynamic strings and multi-line content
- Use double quotes only when necessary to avoid escaping

### Import/Export Patterns
- Use named exports for utility functions: `export function generateSku()`
- Use default exports for main objects: `export default FilterHelper`
- Import specific functions: `import { generateSku } from './skuGeneration.js'`
- Include file extensions in import paths: `'./utils.js'`

### Code Comments
- Add comments above complex business logic
- Document mapping objects and their purposes
- Include development timestamps in main files when significant changes are made
- Explain the "why" behind implementation choices
- Keep comments concise and relevant

### Object and Array Formatting
- Use consistent indentation for object properties
- Align object values vertically when it improves readability
- Break long arrays into multiple lines
- Use trailing commas in multi-line objects and arrays

### Function Structure
- Keep functions focused on single responsibilities
- Use early returns to reduce nesting
- Group related utility functions in the same module
- Export functions that may be reused across modules