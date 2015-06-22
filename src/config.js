"use strict";

import log from 'verbalize';
import AWS = require("aws-sdk"),

function config(argv) {
  let conf = {};
  log.verbose.writeln('start config');

  if (! argv.bucket) {
    log.fatal("Set --bucket");
    process.exit(1);
  }
  conf.bucket = argv.bucket;

  if (! argv.dir) {
    log.fatal("Set --dir");
    process.exit(1);
  }
  conf.dir = argv.dir;

  conf.s3 = new AWS.S3({ region: argv.region});
  return conf;
}

export default config;
