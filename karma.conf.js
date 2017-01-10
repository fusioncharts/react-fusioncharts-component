module.exports = function (config) {

  config.set({
	    'basePath': './',
	    'browsers': [ 'PhantomJS' ],
	    'singleRun': true,
        'frameworks': ['mocha', 'chai'],
	    'files': [ 'tests.webpack.js' ],
	    'preprocessors': {
	        'tests.webpack.js': [ 'webpack' ]
	    },
	    'webpack': {
	        'module': {
	            'loaders': [{
                    'loader': 'babel-loader',
                    'query': {
                        'presets': [ 'react', 'es2015' ]
                    }
                }]
	        }
	    },
	    'coverageReporter': {
	      'type' : 'text'
	    },
	    'reporters': ['spec', 'coverage'],
	    'webpackServer': {
	        'noInfo': true
	    },
	    'logLevel': config.LOG_INFO,
	    'autoWatch': false,
	    'concurrency': Infinity
	});
};

