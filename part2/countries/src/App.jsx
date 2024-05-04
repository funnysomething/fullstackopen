import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import getAll from './services/ER'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    getAll()
      .then(response => {
        if (response){
          setCountries(response)
        }
      })
      .catch((error) => {
        alert({error})
      })
  }, [])

  return (
    <div>
      <Filter filter = {filter} setFilter={setFilter}/>
      <Countries countries={countries} filter={filter}/>
    </div>
  )
}

export default App
