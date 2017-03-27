const pkg = require('../package.json')

export default `
/**
 * ${pkg.name}.js v${pkg.version} ${new Date().toLocaleDateString()}
 * ${pkg.homepage}
 */
`
