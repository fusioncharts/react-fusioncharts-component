const execSync = require('child_process').exec,
	  colors = require('colors/safe');

var log = console,
    commands = [{
		script: 'eslint ./; true',
		msg: `
	     _    _     _   _           
	    | |  (_)_ _| |_(_)_ _  __ _ 
	    | |__| | ' \\  _| | ' \\\/ _\` |
	    |____|_|_||_\\__|_|_||_\\__, |
	                           |___/ 
       `
	}, {
		script: 'gulp clean && NODE_ENV=production gulp build',
		msg: `
	      ___                _ _ _           
	     / __|___ _ __  _ __(_) (_)_ _  __ _ 
	    | (__/ _ \\ '  \\| '_ \\ | | | ' \\\/ _\` |
	     \\___\\___/_|_|_| .__/_|_|_|_||_\\__, |
	                   |_|             |___/ 
       `
	}, {
		script: 'npm run jsunit',
		msg: `

         _   _       _ _     _____         _   _             
        | | | |_ __ (_) |_  |_   _|__  ___| |_(_)_ __   __ _ 
        | | | | '_ \\| | __|   | |/ _ \\/ __| __| | '_ \\ / _\` |
        | |_| | | | | | |_    | |  __/\\__ \\ |_| | | | | (_| |
         \\___/|_| |_|_|\\__|   |_|\\___||___/\\__|_|_| |_|\\__, |
                                                |___/ 
		`
	}];

log = log.log;

function runTests (index) {
	var command = commands[index];
    log(colors.blue(command.msg));
    execSync(command.script, (error, stdout) => {
    	log(error);
        if (error) {
            log(colors.red(`exec error: ${error} ${stdout}`));
            return;
        } else {
	        log(colors.green(`SUCCESS: ${command.script} \n ${stdout}\n`));
	        if (++index < commands.length) {
		        runTests(index);
	        }
        }
    });
}

runTests(0);
