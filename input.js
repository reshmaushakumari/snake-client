let connection; 

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',handleUserInput);
  return stdin;
}
const send = function(msg) {
  console.log('sending: ', msg);
  connection.write(msg);
}
const handleMovement = function(key) {
  if (key === 'w') {
    send('Move: up');
  } else if (key === 'a') {
    send('Move: left');
  } else if (key === 's') {
    send('Move: down');
  } else if (key === 'd') {
    send('Move: right');
  }
}

const handleUserInput = function(key) {
  if ( key === '\u0003' ) {
    // ctrl-c ( end of text )
    process.exit();
  }else if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
    handleMovement(key);
  }
}

module.exports = setupInput;