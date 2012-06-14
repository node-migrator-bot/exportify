#!/usr/bin/env node
var exportify = require('../');
var argv = require('optimist').boolean(['v','verbose']).argv;
var files = argv._;
var fs = require('fs');

if (!files.length || argv.h || argv.help) {
    var s = fs.createReadStream(__dirname + '/usage.txt');
    s.pipe(process.stderr);
    s.on('end', function () {
        process.exit(1);
    });
    return;
}

var ex = exportify(files);
if (argv.v || argv.verbose) {
    ex.on('export', function (file) {
        console.log(file);
    });
}
