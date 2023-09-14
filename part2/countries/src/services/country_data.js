// import countryData from './data'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAllCountries = async () => {
  try {
    const res = await fetch(baseUrl)
    const json = await res.json()
    const data = processData(json)
    // const data = processData(countryData)
    // console.log('IN DAA', data)
    return data
  } catch (error) {
    console.log(error)
    throw new Error('💥️ Error in data fetching countries 💥️')
  }
}

const processData = (data) => {
  return data.map((d) => {
    const {
      name,
      currencies,
      capital,
      region,
      languages,
      area,
      flags,
      population,
    } = d

    return {
      name_common: name['common'],
      name_official: name['official'],
      capital,
      region,
      languages,
      area,
      flag: flags['svg'],
      population,
      currencies,
    }
  })
}

export default { getAllCountries }
