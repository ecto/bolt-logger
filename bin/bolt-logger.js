#!/usr/bin/env node
/*
 * bolt-logger
 * <cam@onswipe.com>
 */

var version = 'v0.0.0';

var optimist = require('optimist');

var argv = optimist
    .usage('\nusage: bolt-logger [options]')
    .options('h', {
      alias: 'host',
      default: 'localhost',
      describe: 'Redis hostname'
    })
    .options('p', {
      alias: 'port',
      default: '6379',
      describe: 'Redis port'
    })
    .options('a', {
      alias: 'auth',
      describe: 'Authenticate with Redis'
    })
    .options('c', {
      alias: 'channel',
      default: 'bolt::main',
      describe: 'Channel to listen on'
    })
    .options('d', {
      alias: 'debug',
      describe: 'Print debug information'
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
  port: argv.p,
  silent: !argv.d,
  debug: argv.d,
  channel: argv.c
};

if (argv.a) {
  options.auth = argv.a;
}

var bolt = require('bolt'),
    mesh = new bolt.Node(options);

mesh.receive = function(that, channel, message){
  try {
    message = JSON.parse(message);
  } catch (e) {}

  if (message) {
    message.channel = channel;
    message.time = +new Date();
    console.log(JSON.stringify(message));
  }
}

mesh.start();

//console.log(argv);
