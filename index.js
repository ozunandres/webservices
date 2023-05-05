require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT 

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home');
})    

app.get('/generic', function (req, res) {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', function (req, res) {
    res.send('404 | Page Not Found')
})

app.listen(port,  () => {  
    console.log(`Server started on port ${port}`);
});