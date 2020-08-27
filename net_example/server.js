const net = require('net');

const server = net.createServer();

const PORT = 3001;

const connections = [];

server.on('connection', conn => {
	//everytime someone connects to the server
	// console.log(conn);
	console.log('New client connected');
	conn.write('Hello there!');
	conn.setEncoding('utf8'); //interpret data as text

	// connections.push(conn);

	// add the connection to our connections array
	conn.on('data', data => {
		console.log('Message from client: ', data);
	});

	// conn.on('data', data => {
	// 	console.log('->', data);
	// 	for (let connection of connections) {
	// 		//to show everyone's data to the individual client
	// 		connection.write(data);
	// 	}
	// });
});

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}!`);
});
