const net = require('net');
const { IP, PORT } = require('./constants');


/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', () => {
    console.log("Successfully connected to game server");
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: SNK');
    conn.write('Say: MSG');
  });
  return conn;
  
}

module.exports = connect;