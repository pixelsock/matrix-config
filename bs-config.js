module.exports = {
    proxy: "https://matrix-mirrors.webflow.io/configure/classic-webflow-only", // The site where your script is loaded
    files: ["./dist/build.js"], // The files to watch for changes
    reloadDelay: 1000, // Delay for reloading the page
    open: false, // Don't open a new browser window
  };
  