const express = require('express');
const findAll = require('./mongodb')
const findByAuthor = require('./mongodb')
const insert = require('./mongodb')
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json()

// landning
app.get('/', async function (req, res) {

    res.send('<h1> This is an awesome library </h1>')
    res.send('<h4> Check out complete Book list </h4>')
    //res.sendFile( __dirname + "/" + "index.html" ); 
    res.end() 

});

// get all the books
app.get('/books', async function (req, res) {

    let books = await findAll.findAll()
    // show book list
    // crate the html table    
    let result = '<table><tr><th>Name</th><th>Address</th>';
    for (let book in books) {
        result += "</tr><tr><td>" + books[book].author + "</td><td>" + books[book].title + "</td></tr>";
    }
    result += '</table>';
    res.send(result);

});

//search by author
app.get('/books/:author', jsonParser, async function(req, res) {    
    
    let books = await findByAuthor.findByAuthor()
    res.send(books);
  
  })

  // insert a book
  app.post('/books', jsonParser, async function(req, res){

    const author = req.body.author
    const title = req.body.title
    console.log(author, title)
    const book = insert.insert({title, author})     
    res.end(JSON.stringify(book));  
  })


app.listen(8080, function(req, res) {
    console.log("Server is running at port 8000");
  });