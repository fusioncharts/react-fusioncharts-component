var gulp = require('gulp'),
    initGulpTasks = require('react-component-gulp-tasks'),

	/**
	 * Tasks are added by the react-component-gulp-tasks package
	 *
	 * See https://github.com/JedWatson/react-component-gulp-tasks
	 * for documentation.
	 *
	 * You can also add your own additional gulp tasks if you like.
	 */

    taskConfig = {

		component: {
			name: 'ReactFC',
			dependencies: [
				'classnames',
				'react',
				'react-dom',
				'fusioncharts'
			],
			lib: 'lib'
		},

		example: {
			src: 'example/src',
			dist: 'example/dist',
			files: [
				'index.html',
				'url-sample.html',
				'./images/*.png',
				'./data/*',
				'./views/*.html',
				// '../fonts/*',
				'./css/*.css',
				'.gitignore'
			],
			scripts: [
				'script.js',
				'./js/ex1.js',
				'./js/ex2.js',
				'./js/ex3.js',
				'./js/ex4.js',
				'./js/ex4a.js',
				'./js/ex5.js',
				'./js/ex6.js',
				'./js/ex7.js',
				'./js/ex8.js',
				'./js/ex9.js',
				'./js/ex10.js',
				'./js/gtd-custom.js'
			],
			less: [
				'./css/style.less'
			]
		}

	};


initGulpTasks(gulp, taskConfig);
