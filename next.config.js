const withNextIntl = require('next-intl/plugin')(
    './i18n.ts'
);

module.exports = withNextIntl({
    experimental: {appDir: true},
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn-images-1.medium.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'play.google.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'medium.com',
            port: '',
          },
        ],
      },
});