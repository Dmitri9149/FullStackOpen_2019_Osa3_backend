const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
} 

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-4sw5q.mongodb.net/puhelinluettelo?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const noteSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', noteSchema)

const person = new Person({
  name: 'New',
  number: '123456',
  important: true,
})

person.save().then(response => {
  console.log('person saved!');
  mongoose.connection.close();
})