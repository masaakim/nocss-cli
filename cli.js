#!/usr/bin/env node

var fs = require('fs')
var pkg = require('./package.json')
var nocss = require('./')
var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
    boolean: [
        'help',
        'versions'
    ],
    alizs: {
        h: 'help',
        V: 'versions'
    }
})

if (argv.V) console.log(pkg.version)

if (argv.h) {
    var help = [
        'Usage: nocss input-file',
        '',
        'Options:',
        '  -h, --help      output command information',
        '  -V, --versions  output the version number',
    ]

    console.log(help.join('\n'))
}

if (argv._[0]) {
    var input = argv._[0]
    var css = fs.readFileSync(input, 'utf-8')
    fs.writeFile(input, nocss(css), function (err) {
        if (err) throw err
        console.log('NoCSS: OK!')
    })
}
