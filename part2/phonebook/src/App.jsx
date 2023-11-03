import { useState } from 'react'
import Entry from './components/Entry'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 'Arto Hellas' },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 'Ada Lovelace' },
    { name: 'Dan Abramov', number: '12-43-234345', id: 'Dan Abramov' },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 'Mary Poppendieck' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')

  const handleNameAdd = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberAdd = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: newName
    }

    if (persons.some(person => person.name === newPerson.name)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([...persons,newPerson])
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newSearch={newSearch} handleSearch={handleSearch}/>
      
      <h3>add a new</h3>
      
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameAdd={handleNameAdd} newNumber={newNumber} handleNumberAdd={handleNumberAdd}/>
      
      <h3>Numbers</h3>
      
      <Persons persons={persons} newSearch={newSearch}/>
    </div>
  )
}

export default App