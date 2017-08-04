var mysql = require('mysql')
var connection = mysql.createConnection({
	host: process.env.DB_HOST,
	use: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
})

connection.connect()

module.exports = connection