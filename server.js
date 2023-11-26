var http = require('http');
var url = require('url');
var fs = require('fs');
var mysql = require('mysql');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080); 

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "Usuario"
});

//con.connect(function(err) {
  //if (err) throw err;
  //console.log("Connected!");
//});

con.connect(function(err) {
  if (err) throw err;
    console.log("Connected!");
  con.query("SELECT * FROM Mensagem", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});