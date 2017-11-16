const express = require("express");
const router = require("./router");
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.use('/public', express.static(__dirname + "/views/public"));
// hbs.registerPartial('multiple', {multiple});

app.use(router);

app.listen(3000);
