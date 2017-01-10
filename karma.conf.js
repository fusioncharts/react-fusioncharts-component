module.exports = function (config) {

  config.set({
	    "basePath": './',
	    "browsers": [ "PhantomJS" ],
	    "singleRun": true,
        "frameworks": ['mocha', 'chai'],
	    // "frameworks": [ "mocha" ],
	    // "plugins": [
	    //     "karma-babel-preprocessor",
	    //     "karma-mocha",
	    //     "karma-webpack",
	    //     "karma-coverage",
	    //     "karma-phantomjs-launcher"
	    // ],
	    "files": [ "tests.webpack.js" ],
	    "preprocessors": {
	        "tests.webpack.js": [ "webpack" ]
	    },
	    "webpack": {
	        // "devtool": "inline-source-map",
	        "module": {
	            "loaders": [{
	            	// "test": /\.js$/,
                    "loader": "babel-loader",
                    "query": {
                        "presets": [ "react", "es2015" ]
                    }
                }]
	        }
	    },
	    "coverageReporter": {
	      "type" : 'text'
	    },
	    // "reporters": ['spec'],
	    "reporters": ['spec', 'coverage'],
	    // "reporters": [ "dots" ],
	    "webpackServer": {
	        "noInfo": true
	    },
	    "logLevel": config.LOG_INFO,
	    "autoWatch": false,
	    "concurrency": Infinity
	});
};

