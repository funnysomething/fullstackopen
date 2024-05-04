import { useState, useEffect } from 'react'
import Numbers from './Components/Number'
import PersonForm from './Components/PersonForm'
import SearchFilter from './Components/SearchFilter'
import PersonService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()
  const [filter, setFilter] = useState('')

  useEffect(() => {
    PersonService.getAll()
      .then(persons => {
        console.log("Got people")
        setPersons(persons)
      })
      .catch(error =>
        console.log('Error getting people')
      )
  }, [])
  
  const addName = (event) => { 
    event.preventDefault()
    console.log('Button Clicked', event.target);
    if (newName !== '' && newNumber) {
      if (persons.map((person) => person.name).includes(newName)) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          const person = persons.find(p => p.name === newName)
          updateNumber(person, newNumber)
        }
      } else {
        const newPerson = {
          name: newName,
          number: newNumber
        }
        PersonService
          .create(newPerson)
          .then(person => setPersons(persons.concat(person)))
      }
      setNewName('')
      setNewNumber('')
    }
  }

  const updateNumber = (person, number) => {
    PersonService
      .update(person.id, {...person, number})
      .then(updatedPerson => {
        setPersons(persons.map(p => p.id !== person.id ? p : updatedPerson))
      })
  }

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)){
      PersonService.del(person.id)
          .then(() => {
            setPersons(persons.filter(p => p.id != person.id))
          })}
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
      <Numbers people={persons} filter={filter} del = {deletePerson}/>
    </div>
  )
}

export default App