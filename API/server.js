const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;
const connection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'news'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: ''});
});

router.get('/news', function(req, res) {
    connection.connect();
    connection.query('SELECT * FROM test ORDER BY id DESC LIMIT 8;', function (error, results, fields) {
       res.json({ news: results });
    });

});

app.use('/api', router);

app.listen(port, () => {
    console.log('Server is running...');
})