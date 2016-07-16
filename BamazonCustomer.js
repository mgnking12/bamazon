var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bamazon'
});

connection.connect(function(error) {
    if(!!error) {
        console.log('Error');
    }else{
        console.log('Connected');
    }
});

app.get('/', function(req, resp){
    connection.query("SELECT * FROM Products", function(error, rows, fields) {
        if(!!error) {
            console.log('Error in the query');
        }else{
            console.log('Successful query /n');
            console.log(rows);
            resp.send('Product Name: ' + rows[0].ProductName)
        }
    })
})

app.listen(1337);


// var mysql = require("mysql");
// var selectSQL = "SELECT ?? FROM ?? WHERE ?";
// var deleteSQL = "DELETE FROM ?? WHERE ?";
// var updateSQL = "UPDATE ?? SET ? WHERE ?";
// var updateInserts = ['Products', {artist: 'Purity Ring'}, {artist: 'One Headlight'}]
// var deleteInserts = ['Products', {artist: 'Daft Punk'}]
// var columns = ['artist', 'title']
// var selectInserts = [columns, 'Products', {id: 2}]
// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '',
//     database: 'bamazon'
// });
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
// });