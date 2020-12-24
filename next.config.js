const withPrefresh = require('@prefresh/next');
const preact = require('preact');

const withPreact = require('next-plugin-preact');

const withPlugins = require('next-compose-plugins');

const withPWA = require('next-pwa')

module.exports = withPlugins(
  [
    [withPreact, { experimental: {modern: true} }],
    [withPWA, { pwa: {dest: 'public'} }]
  ]
)


// module.exports = withPreact({
//   experimental: {
//     modern: true,
//   },
// });
