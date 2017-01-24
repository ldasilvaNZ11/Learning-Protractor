//tm_conf.js

exports.config = {
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	directConnect: true,
	
	specs: ['tm-spec.js'],
	
	capabilities: {
		'browserName': 'chrome'
	}
};
