const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);
	webpack.useConfig('angular');

  webpack.Utils.addCopyRule({
    from: '../../libs/dragons-and-coin-game/src/assets',
    to: 'assets',
  });

  return webpack.resolveConfig();
};
