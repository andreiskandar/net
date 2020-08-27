const net = require('net');
const stdin = process.stdin;

// 1 - create connection
const client = net.createConnection({
	host: 'tcp://0.tcp.ngrok.io', // change to IP address of computer or ngrok host if tunneling
	port: 19488, // or change to the ngrok port if tunneling
	// host: 'localhost',
	// port: 3001,
});

// 2 - encode the data
client.setEncoding('utf8');

// console.log(client);

client.on('data', data => {
	// 3 - getting the data from the server then log into client side
	console.log('Server says: ', data);
});

//4 - once connected send data to the server
client.on('connect', () => {
	client.write('Hello from Burnaby!');
});

stdin.resume(); // activate the input

stdin.setEncoding('utf8');

stdin.on('data', data => {
	client.write(data);
});

client.on('data', data => {
	console.log('->', data);
});
