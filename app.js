const express = require("express");
const router = require("./router");
const hbs = require('hbs');

const app = express();


hbs.registerPartials(__dirname + 'views/partials');
app.set('view engine', 'hbs');
app.use('/public', express.static(__dirname + "/views/public"));
app.use(router);

app.listen(3000);

// router.use(express.static(__dirname + "/ views/public"));