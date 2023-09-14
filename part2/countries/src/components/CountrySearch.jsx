const CountrySearch = ({ searchText, setSearchText }) => {
  return (
    <div className="header">
      <p>Find Country/ies</p>
      <input
        className="input-search"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  )
}

export default CountrySearch
