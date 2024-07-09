module.exports = {
  proxy: {
      target: "https://matrixmirrors.com",
      ws: true
  },
  files: ['./dist'],
  https: true,
  reloadDelay: 10,
  open: true,
  socket: {
      domain: 'localhost:3000'
  }
};