# JavaScript Style Guide

## ES6+ Module Patterns

### Import/Export Style
- Always include file extensions in import paths: `import { rules } from './rules.js'`
- Use named exports for utility functions: `export function matchesCombination()`
- Use default exports for main classes or objects: `export default FilterHelper`
- Group imports logically: external libraries first, then local modules
- Order imports alphabetically within each group

### Function Declarations
- Use function declarations for main exported functions
- Use arrow functions for short inline functions and callbacks
- Use const for function expressions assigned to variables

```javascript
// Preferred for main functions
export function generateSku(selectedOptions) {
  // implementation
}

// Preferred for inline functions
const roundStyles = [
  'Circle Full Frame Edge',
  'Circle Full Frame Inward Lighting'
];

// Preferred for callbacks
someArray.filter(item => item.value.includes(keyword))
```

### Object and Array Handling
- Use destructuring when it improves readability
- Use spread operator for array/object copying
- Use consistent property access (dot notation when possible)

### Conditional Logic
- Use explicit boolean checks for clarity
- Prefer early returns to reduce nesting
- Use ternary operators only for simple assignments

```javascript
// Preferred pattern
export function isRoundStyle(value) {
  const roundStyles = [
    'Circle Full Frame Edge',
    'Circle Full Frame Inward Lighting',
    'Circle No Frost'
  ];
  return roundStyles.includes(value);
}
```

### Variable Declarations
- Use `const` by default
- Use `let` when reassignment is necessary
- Never use `var`
- Declare variables close to their first use

### String and Template Handling
- Use template literals for dynamic strings
- Use single quotes for static strings
- Use consistent string interpolation patterns

### Error Handling
- Use console.log for development debugging
- Log meaningful data structures that help with troubleshooting
- Consider using try-catch for operations that might fail

### jQuery Integration (Legacy Support)
- When working with existing jQuery code, maintain consistency
- Use jQuery selectors consistently: `$('#element-id')`
- Chain jQuery methods appropriately
- Consider migrating jQuery patterns to vanilla JS when refactoring

### Module Organization
- Keep related functions in the same module
- Export functions that are used across multiple files
- Use clear, descriptive module names that reflect their purpose
- Maintain consistent file naming: use camelCase with descriptive names