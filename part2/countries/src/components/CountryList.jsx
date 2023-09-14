import CountryDetail from './CountryDetail'

const CountryList = ({ data, searchText, setShowDetailName }) => {
  let countriesToShow = []
  if (searchText !== '') {
    countriesToShow = data.filter((d) =>
      d['name_common'].toLowerCase().includes(searchText)
    )
  }

  if (searchText !== '' && countriesToShow.length === 0) {
    return (
      <div className="warning-card">
        There is no country that contains {searchText}.
      </div>
    )
  }

  if (countriesToShow.length > 10) {
    return (
      <div className="warning-card">Too many matches, Continue Typing ... </div>
    )
  }

  if (countriesToShow.length === 1) {
    setShowDetailName('')
    return (
      <CountryDetail
        data={countriesToShow}
        showDetailName={countriesToShow[0]['name_common']}
      />
    )
  }

  return (
    <div className="countries">
      {countriesToShow.map((c) => (
        <div className="card" key={c.name_common}>
          <span>{c.name_common}</span>
          <button onClick={() => setShowDetailName(c.name_common)}>show</button>
        </div>
      ))}
    </div>
  )
}

export default CountryList
