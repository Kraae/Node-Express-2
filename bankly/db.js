"use strict";
/** Database setup for jobly. */
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder
// @ts-expect-error
global.TextDecoder = TextDecoder
const { Client } = require('pg');
const { DB_URI } = require('./config');
const client = new Client(DB_URI);

client.connect();

module.exports = client;
