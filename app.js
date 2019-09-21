//APP.js file 
const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/async_await_ES7', function(req, res) {
    res.render('async_await');
});

app.listen(port, () => {
    console.log(`Servidor online na porta ${port}!`)
});