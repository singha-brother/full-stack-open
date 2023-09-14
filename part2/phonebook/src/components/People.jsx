import React from 'react'
import dataService from '../services/data'

const People = ({ persons, setPersons, filterText, setNotification }) => {
  // console.log('Render People')
  const showPeople = persons.filter((p) =>
    p.name.toLowerCase().includes(filterText)
  )

  const handleDelete = (id, name) => {
    const result = window.confirm(`Delete ${name}?`)
    if (result) {
      dataService
        .deleteNumber(id)
        .then((_) => {
          setPersons(persons.filter((p) => p.id !== id))
          setNotification(`${name}'s number is successfully deleted!`)
        })
        .catch((err) => {
          setNotification(`${err.message} or already removed from server`)
        })
    }
  }
  return (
    <>
      <h2>Numbers</h2>
      {showPeople.length !== 0 ? (
        <table>
          <tbody>
            {showPeople.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.number}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(p.id, p.name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Person To Show</p>
      )}
    </>
  )
}

export default People
