const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', () => {
    console.log("Successfully connected to game server");
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: SNK');
   // setInterval(function(){ conn.write("Move: up"); }, 3000);

    
    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 1000)
  });
  //return conn;
  
}

module.exports = connect;