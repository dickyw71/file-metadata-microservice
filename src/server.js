import express from 'express'
import multer from 'multer'
import cors from 'cors'

// setup
const upload = multer({ dest: 'uploads/'});

// app
const app = express();
app.use(cors());

/**
 * Default home page 
 */
app.set('views', './templates');
app.set('view engine', 'pug');
app.get('/', function(req, res) {
    res.render('index');
});

// routes
app.post("/uploads", upload.single('file'), function(request, response) {
    response.json({
        size: request.file.size
    });
});

// listen for requests :)
const listener = app.listen(process.env.PORT || "3000", function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = app;   // for testing
