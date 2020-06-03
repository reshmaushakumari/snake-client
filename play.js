const connect = require('./client');
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(userExit) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',userExit);
  return stdin;
}
const handleUserInput = function(key) {
  if ( key === '\u0003' ) {
    // ctrl-c ( end of text )
    process.exit();
  }
}

console.log('Connecting ...');
connect();
setupInput(handleUserInput);
