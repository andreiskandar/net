const net = require('net');

const conn = net.createConnection({
	host: 'example.edu',
	port: 80,
});

conn.setEncoding('utf8');

conn.on('connect', () => {
	console.log('Connected to server!');
});

conn.write(`GET / HTTP/1.1\r\n`);
conn.write(`Host: example.edue\r\n`);
conn.write(`\r\n`);

conn.on('data', data => {
	console.log(data);
	conn.end();
});
