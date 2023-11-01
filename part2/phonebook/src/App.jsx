import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 'Arto Hellas'
    }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameAdd = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
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
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameAdd}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <p key={person.name}>{person.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default App