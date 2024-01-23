import { useState } from 'react'
import Numbers from './Components/Number'
import PersonForm from './Components/PersonForm'
import SearchFilter from './Components/SearchFilter'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()
  const [filter, setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('Button Clicked', event.target);
    if (newName !== '' && newNumber) {
      if (persons.map((person) => person.name).includes(newName)) {
        alert(`${newName} already added to phonebook`)
      } else {
        const newPerson = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(newPerson))
      }
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filter={filter} setFilter={setFilter} />
      <h2>Add New Number</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber} 
        setNewName={setNewName} 
        setNewNumber={setNewNumber} 
      />
      <h2>Numbers</h2>
      <Numbers people={persons} filter={filter} />
    </div>
  )
}

export default App