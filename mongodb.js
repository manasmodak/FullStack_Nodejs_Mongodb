const { MongoClient } = require("mongodb");
let client = undefined

// start connection
function startConnection(){
    console.log('staring connection...')
    client = new MongoClient(uri);
}

// close connection
function closeConnection(){
    console.log('closing connection...')
    if(client != undefined) client.close();
}
const uri = "mongodb://127.0.0.1:27017";
const databaseName = 'library'
const collectionName = 'books'


exports.insert =  async function(addBook) {
  try {
    console.log('inserting...')
    //console.log(addBook)
    console.log(addBook.title)
    console.log(addBook.author)
    startConnection()
    const database = client.db(databaseName);
    const books = database.collection(collectionName);
    const book = await books.insertOne({
        title:addBook.title,
        author:addBook.author
    })
    return book;    
  } finally {
    closeConnection()
  }
}

exports.findAll  = async function() {
    try {
      console.log('findAll()...')
      startConnection()
      const database = client.db(databaseName);
      const books = database.collection(collectionName);
      const book = await books.find().toArray();
      return book;      
      
    } finally {
        closeConnection()
    }
  }  

  exports.findByAuthor =  async function(author) {
    try {
      console.log('inserting...')
      startConnection()
      const database = client.db(databaseName);
      const books = database.collection(collectionName);
      const query = { author: author };
      const book = await books.find(query);          
      return book;      
    } finally {
      closeConnection()
    }
  }  