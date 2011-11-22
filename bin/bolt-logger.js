#!/usr/bin/env node
/*
 * bolt-logger
 * <cam@onswipe.com>
 */

var version = 'v0.0.0';

var optimist = require('optimist');

var argv = optimist
    .usage('\nusage: bolt-logger [options]')
    .options('f', {
      alias: 'file',
      default: 'bolt.log',
    })
    .options('h', {
      alias: 'host',
      default: 'localhost',
    })
    .options('p', {
      alias: 'port',
      default: '6379',
    })
    .options('a', {
      alias: 'auth',
    })
    .options('d', {
      alias: 'debug',
      default: false,
    })
    .options('v', {
      alias: 'version'
    })
    .argv
;

if (argv.h && argv.h == true) {
  optimist.showHelp();
  process.exit();
}

if (argv.v) {
  console.log(version);
  process.exit();
}

var options = {
  host: argv.h,
  port: argv.p
};

if (argv.a) {
  options.auth = argv.a;
}

var bolt = require('bolt'),
    mesh = new bolt.Node(options);

mesh.start();

//console.log(argv);
