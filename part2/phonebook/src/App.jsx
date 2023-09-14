import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import People from './components/People'
import numberAPI from './services/data'
import NotiMessage from './components/NotiMessage'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterText, setFilterText] = useState('')
  const [notification, setNotification] = useState('')

  useEffect(() => {
    numberAPI
      .getAllNumbers()
      .then((initialPersons) => {
        setPersons(initialPersons)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  // console.log('Render APP')

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <NotiMessage
        notification={notification}
        setNotification={setNotification}
      />
      <Filter filterText={filterText} setFilterText={setFilterText} />
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
      />
      {persons && (
        <People
          persons={persons}
          setPersons={setPersons}
          filterText={filterText}
          setNotification={setNotification}
        />
      )}
    </div>
  )
}

export default App
