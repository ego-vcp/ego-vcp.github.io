/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ });

const isProd = process.env.NODE_ENV === 'production';
const repo = 'ego-vc'; // 仓库名

const nextConfig = {
  eslint: { dirs: ['src'] },

  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // 项目页路径前缀（托管在 /ego-vc 下）
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',

  // 给原生标签使用（<video>/<audio>/<img> 等）
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '',
  },

  images: {
    unoptimized: true,
    domains: [],
  },

  // 可选：静态导出下更稳的路由（会生成 about/index.html）
  // trailingSlash: true,

  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
    config.module.rules.push(
      { ...fileLoaderRule, test: /\.svg$/i, resourceQuery: /url/ },
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ },
        loader: '@svgr/webpack',
        options: { dimensions: false, titleProp: true },
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

module.exports = withMDX(nextConfig);
