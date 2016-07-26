#!/usr/bin/env node
require("amd-loader");
 var program = require('commander');
 var fs = require('fs');
 var scrubCode = require('./src/scrub-code');
 var compileCode = require('./src/compile-code');

var fileName = "";
 program
  .arguments('<file>')
  .action(function(file) {
    fileName = file;
  })
  .parse(process.argv);




var text = fs.readFileSync( __dirname + '/test.txt');

  //console.log(text.toString());

  var scrubedCode = scrubCode(text.toString());

  //console.log(scrubedCode.toString());

  var binaryCode = compileCode(scrubedCode);

  //console.log(binaryCode);

fs.writeFileSync( __dirname+'/'+fileName+'.hack', binaryCode);