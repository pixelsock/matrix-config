# Deployment Process

This document outlines the deployment process for the Matrix Mirrors Configuration library.

## Quick Deployment

To deploy the latest version to GitHub and make it available via jsDelivr CDN:

```bash
npm run deploy
```

This single command will:
1. Build the project using webpack
2. Force add the build files to git (overriding .gitignore)
3. Create a commit with the build artifacts
4. Bump the version in package.json
5. Push changes and tags to GitHub
6. Trigger the CDN deployment workflow with force version bump enabled

**Note:** The deployment process involves two version bumps:
1. First, locally during the `npm run deploy` command
2. Second, in the GitHub Actions workflow to ensure GitHub releases are created correctly

## CDN URLs

After deployment, the files will be available at:

```
https://cdn.jsdelivr.net/gh/pixelsock/matrix-config@{version}/dist/main.build.js
https://cdn.jsdelivr.net/gh/pixelsock/matrix-config@{version}/dist/productsPage.build.js
```

Replace `{version}` with the actual version number (e.g., 4.9.12).

To use the latest version:

```
https://cdn.jsdelivr.net/gh/pixelsock/matrix-config@latest/dist/main.build.js
https://cdn.jsdelivr.net/gh/pixelsock/matrix-config@latest/dist/productsPage.build.js
```

## Manually Triggering Deployment

If needed, you can manually trigger the deployment workflow:

```bash
gh workflow run deploy-cdn.yml --ref main
```

## Troubleshooting

If deployment issues occur:

1. Check that build files are generated correctly in the `dist/` directory
2. Verify GitHub authentication with `gh auth status`
3. Check GitHub Actions workflow logs for any errors
4. Ensure jsDelivr cache is purged by visiting: `https://purge.jsdelivr.net/gh/pixelsock/matrix-config@{version}/dist/main.build.js`