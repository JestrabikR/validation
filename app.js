const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');

const db = mysql.createConnection({
    host: 'localhost',
    port: '3308',
    user: 'root',
    password: '',
    database: 'validation'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('connected');
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    let sql = 'SELECT * from stat';
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.render('index.ejs', {result: result});
    });
    
});

app.post('/', (req, res) => {
    let street = req.body.street;
    let street_number = parseInt(req.body.street_number);
    let city= req.body.city;
    let country = req.body.country;

    var sql = "INSERT INTO adresa (ulice,cislo,mesto,stat_id) VALUES ('"+street+"', '"+street_number+"','"+city+"','"+country+"')";
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.render('success.ejs');
        res.end();
    });
});

app.listen('3000', () => {
    console.log('server started');
}); 
