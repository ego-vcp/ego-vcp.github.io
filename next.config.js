/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ });

const isProd = process.env.NODE_ENV === 'production';
const repo = 'ego-vc'; // 仓库名

const nextConfig = {
  eslint: { dirs: ['src'] },

  output: 'export',           // 静态导出
  reactStrictMode: true,
  swcMinify: true,
  // ❌ 删掉 distDir: 'docs'，让 .next 用默认目录
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // 关键：为项目页设置路径前缀
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',

  images: {
    unoptimized: true,        // GitHub Pages 无图片优化服务
    domains: [],
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
    config.module.rules.push(
      { ...fileLoaderRule, test: /\.svg$/i, resourceQuery: /url/ },
      { test: /\.svg$/i, issuer: { not: /\.(css|scss|sass)$/ }, resourceQuery: { not: /url/ },
        loader: '@svgr/webpack', options: { dimensions: false, titleProp: true } }
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

module.exports = withMDX(nextConfig);
