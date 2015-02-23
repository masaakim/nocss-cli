var postcss = require('postcss')
var nocssLint = require('nocss-lint')

module.exports = function (css) {
    return postcss().use(nocssLint()).process(css).css
}
