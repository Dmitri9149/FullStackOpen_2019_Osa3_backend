const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', noteSchema)


if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
} if (process.argv.length == 5 ) {

  const person = new Person({
    name:process.argv[3],
    number:process.argv[4]
  })
  
  person.save().then(response => {
    console.log('lisätään ', person.name, "numero", person.number, "luetteloon" );
    mongoose.connection.close();
  })

} else if (process.argv.length == 3) {

  Person.find({}).then(result => {
    console.log("puhelinluettelo")
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}

const password = process.argv[2]

const url =
`mongodb+srv://fullstack:${password}@cluster0-4sw5q.mongodb.net/puhelinluettelo?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })


