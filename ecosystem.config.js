module.exports = {
  apps: [
    {
      name: 'video_back',
      script: './dist/main.js',
      watch: false,
      env: {
        PORT: 9070
      }
    },
  ],
};