const express = require('express');
const app = express();
const server = app.listen(80, function(){
    console.log(`Listen 80`);
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.json({ type: function() { return true; } }));

app.use(express.urlencoded({ extended: true }));


app.get(['/'], function (req, res) {
    res.render('index', {location:'landing'});
});

app.get(['/shop'], function (req, res) {
    res.render('index', {location:'shop'});
});

app.get(['/about'], function (req, res) {
    res.render('index', {location:'about'});
});

app.get(['/contact'], function (req, res) {
    res.render('index', {location:'contact'});
});