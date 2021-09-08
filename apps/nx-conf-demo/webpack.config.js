module.exports = (config, context) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        {
          test: /\.scss$/i,
          use: ['raw-loader', 'sass-loader'],
        },
        config.module.rules[0],
        {
          test: /\.html$/i,
          use: 'raw-loader',
        },
      ],
    },
  };
};
