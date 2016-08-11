var path = require('path');
var express = require('express');
var compression = require('compression');
var app = express();

app.use(compression());
var staticPath = path.join(__dirname, 'app/');
app.use(express.static(staticPath));
app.set('view cache', true);

app.listen(process.env.PORT || 3000, function() {

});
