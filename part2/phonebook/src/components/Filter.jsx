import React from 'react'

const Filter = ({ filterText, setFilterText }) => {
  return (
    <div className="inputContainer">
      filter shown with
      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  )
}

export default Filter
