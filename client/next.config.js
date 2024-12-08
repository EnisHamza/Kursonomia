// next.config.js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /server/, // Exclude the backend folder from the frontend bundle
    });
    return config;
  },
};
