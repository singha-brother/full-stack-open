import React, { useEffect, useState } from 'react'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'
import CountrySearch from './components/CountrySearch'
import countryData from './services/country_data'
import WeatherCondition from './components/WeatherCondition'

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [showDetailName, setShowDetailName] = useState('')

  useEffect(() => {
    setLoading(true)
    setError(false)
    countryData
      .getAllCountries()
      .then((res) => {
        setData(res)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        setError(true)
      })
  }, [])

  console.log('App render')
  if (loading) {
    return <div className="warning-card">Loading ...</div>
  }

  if (error) {
    return (
      <div className="warning-card">
        Something went wrong...Please try again later
      </div>
    )
  }

  return (
    <div className="container">
      <CountrySearch searchText={searchText} setSearchText={setSearchText} />

      <CountryList
        data={data}
        searchText={searchText}
        setShowDetailName={setShowDetailName}
      />
      <CountryDetail data={data} showDetailName={showDetailName} />
    </div>
  )
}

export default App
