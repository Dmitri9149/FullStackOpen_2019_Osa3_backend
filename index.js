require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Note = require('./models/person')
var morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())

morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :body :status :res[content-length] - :response-time ms'))

app.use(cors())

app.use(express.static('build'))

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Martti Tienari",
    "number": "040-123456",
    "id": 2
  },
  {
    "name": "Arto Järvinen",
    "number": "040-123456",
    "id": 3
  },
  {
    "name": "Lea Kutvonen",
    "number": "040-123456",
    "id": 4
  }
  
]
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

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

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

app.post('/api/persons', (request, response) => {
  const body = request.body
  const isItNewName = persons.find(person => person.name === body.name)
  

  if (!body.name) {
    return response.status(400).json({error: 'name = undefined'})
  } else if (!body.number) {
    return response.status(400).json({error:"number = undefined"})
  }  

  if(isItNewName) {
    return response.status(400).json({error:'name must be unique'})
  } 

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(100000000000000000000)
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})