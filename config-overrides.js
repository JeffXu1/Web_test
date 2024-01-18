const path = require('path');

module.exports = function override(config, env) {
  // 找到 babel-loader 的配置
  const babelLoader = config.module.rules.find(
    (rule) =>
      rule && rule.oneOf && rule.oneOf.find((loader) => loader.loader && loader.loader.includes('babel-loader'))
  );

  if (babelLoader) {
    // 在 babel-loader 的 options 中添加配置
    babelLoader.oneOf.forEach((loader) => {
      if (loader.loader && loader.loader.includes('babel-loader')) {
        loader.options = {
          ...loader.options,
          plugins: [
            // 添加 @babel/plugin-proposal-optional-chaining 插件
            require.resolve('@babel/plugin-proposal-optional-chaining'),
            // 添加 @babel/plugin-proposal-nullish-coalescing-operator 插件
            require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
            // 添加 @babel/plugin-proposal-logical-assignment-operators 插件
            require.resolve('@babel/plugin-proposal-logical-assignment-operators'),
            // require.resolve('@babel/plugin-transform-runtime'),
            // 如果还需要其他插件，也可以在这里添加
          ],
        };
      }
    });
  }

  // 返回修改后的配置
  return config;
};
