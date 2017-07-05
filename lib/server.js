'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// setup
var upload = (0, _multer2.default)({ dest: './uploads/' });

// app
var app = (0, _express2.default)();
app.use((0, _cors2.default)());

/**
 * Default home page 
 */
app.set('views', './templates');
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index');
});

// routes
app.post("/get-file-size", upload.single('file'), function (request, response) {
    response.json({
        size: request.file.size
    });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || "3000", function () {
    console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = app; // for testing