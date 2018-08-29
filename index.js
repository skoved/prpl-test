#!/usr/bin/env nodejs

const prpl = require('prpl-server');
const express = require('express');

const app = express();

app.get('/api/launch', (req, res, next) => res.send('boom'));

app.get('/*', prpl.makeHandler('.', {
	builds: [
		{name: 'cutting-edge', browserCapabilities: ['es2015', 'serviceworker', 'push', 'modules']},
		{name: 'modern', browserCapabilities: ['es2015', 'serviceworker']},
		{name: 'fallback'},
	],
}));

app.listen(8080);
