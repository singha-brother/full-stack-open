import React from 'react'
import { useState } from 'react'
import dataService from '../services/data'

const PersonForm = ({ persons, setPersons, setNotification }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newNumber = {
      name,
      number,
    }
    const existPerson = persons.find((p) => p.name === name)
    if (existPerson) {
      const { id } = existPerson
      const result = window.confirm(
        `${name} is already added to phonebook, replace the old number with a new one?`
      )
      if (result) {
        dataService
          .updateNumber(id, newNumber)
          .then((newNumber) => {
            setPersons(
              persons.map((p) => (p.id !== newNumber.id ? p : newNumber))
            )
            setNotification(
              `${newNumber.name}'s number is changed to ${newNumber.number}`
            )
            setName('')
            setNumber('')
          })
          .catch((err) => {
            setNotification(`${err.message}`)
          })
      }
      return
    }
    dataService
      .createNumber(newNumber)
      .then((num) => {
        setPersons((prev) => [...prev, num])
        setNotification(`${num.name}'s number (${num.number}) is created.`)
        setName('')
        setNumber('')
      })
      .catch((err) => {
        console.log(err)
        setNotification(`${err.message}`)
      })
  }
  return (
    <>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="inputContainer">
          number:
          <input value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm
