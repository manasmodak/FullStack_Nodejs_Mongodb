This is a node app, which uses mongo db to get and insert books.
This is to showcase how quickly a node server can be built to talk to real database

/books -> GET
  get all the books from mongodb'library' data base and 'books' collection
/book -> POST 
  {
    "title":"NodeJS1",
    "author":"Node Publication"
  }
    insert a new obook

/books/authorName -> GET 
  filter book list by author name
