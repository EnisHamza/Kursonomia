const webpack = require("webpack");

module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /mongoose/,
        }),
        new webpack.IgnorePlugin({
          resourceRegExp: /require_optional/,
        })
      );
    }

    config.stats = "verbose";

    return config;
  },
};
