require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Person = require('./models/person')
var morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())

morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :body :status :res[content-length] - :response-time ms'))

app.use(cors())

app.use(express.static('build'))

app.get('/api/persons', (request, response) => {
  Person.find({}).then(people => {
    response.json(people.map(person => person.toJSON()))
  });
});

app.get('/info', (req, res) => {
  const size= persons.length;
  
  res.send(
    `<div>
      <p>Puhelinluetelossa ${size}  henkilön tiedot</p>
      <p> ${new Date().toString()}</p>
    </div>`
  );
  
  console.log(`Server sends size as  ${size}`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})


app.post('/api/persons', (request, response) => {
  const body = request.body
{/*  const isItNewName = persons.find(person => person.name === body.name) */}
  

  if (!body.name) {
    return response.status(400).json({error: 'name = undefined'})
  } else if (!body.number) {
    return response.status(400).json({error:"number = undefined"})
  }  

{/*  if(isItNewName) {
    return response.status(400).json({error:'name must be unique'})
  }   */} 

  const person = new Person ({
    name: body.name,
    number: body.number
  })

  person.save().then(savedNote => {
    response.json(savedNote.toJSON())
  })

})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})