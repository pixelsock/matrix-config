module.exports = {
    proxy: "https://matrix-mirrors.webflow.io/configure/classic", // The site where your script is loaded
    files: ['./dist'], // The files to watch for changes
    reloadDelay: 10, // Delay for reloading the page
    open: true, // Don't open a new browser window
  };
  