const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

require('dotenv').config();

let projectData = {};


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'));
app.get('/', function (req, res) {
	res.sendFile('dist/index.html');
});

app.listen(PORT, () => {
	console.log(`server is running at http://localhost:${PORT}`);
});

function callBack(req, res) {
	res.send('POST received');
}

app.post('/add', callBack);

