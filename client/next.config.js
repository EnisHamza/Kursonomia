const webpack = require("webpack");

module.exports = {
  webpack(config, { isServer }) {
    // If it's not a server build (i.e., client-side), ignore certain dependencies
    if (!isServer) {
      // Using IgnorePlugin to exclude these packages from client-side bundling
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /mongoose/,
          contextRegExp: /server/,
        }),
        new webpack.IgnorePlugin({
          resourceRegExp: /require_optional/,
        })
      );
    }

    return config;
  },
};
