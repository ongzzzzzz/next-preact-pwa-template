const withPrefresh = require('@prefresh/next');
const preact = require('preact');

const withPreact = require('next-plugin-preact');
const withPWA = require('next-pwa')

module.exports = withPreact(withPWA({
	pwa: {
		dest: 'public'
	},
	experimental: {
		modern: true
	}
}))