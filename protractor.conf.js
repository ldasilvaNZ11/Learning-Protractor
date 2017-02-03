"use strict";

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

module.exports.config = {
	seleniumAddress: "http://localhost:4444/wd/hub",
	directConnect: true,
	specs: [ "*.spec.js" ],
	capabilities: {
		"browserName": "chrome"
	},
	baseUrl: "http://trademe.co.nz/",
	onPrepare() {
		//the command below allows protractor to test non-AngularJS webpages
		browser.ignoreSynchronization = true;
		jasmine.getEnv().addReporter(new SpecReporter({
			spec: {
				displayStacktrace: true
			}
		}));
	}
};
