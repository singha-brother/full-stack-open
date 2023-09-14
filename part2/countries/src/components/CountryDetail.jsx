import WeatherCondition from './WeatherCondition'

const CountryDetail = ({ data, showDetailName }) => {
  const showCountry = data.filter((d) => d['name_common'] === showDetailName)[0]
  // console.log(showCountry)
  if (!showCountry) {
    return
  }
  return (
    <div className="country">
      <div className="description">
        <h2>{showCountry.name_common}</h2>
        <p>({showCountry.name_official})</p>
        <hr />
        <table>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>
                <ul>
                  {showCountry.capital.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{showCountry.area}</td>
            </tr>
            <tr>
              <td>Population</td>
              <td>{showCountry.population}</td>
            </tr>
            <tr>
              <td>Currencies</td>
              <td>
                <ul>
                  {Object.entries(showCountry.currencies).map(
                    ([code, info]) => (
                      <li key={info.name}>
                        {info.name} ({info.symbol})
                      </li>
                    )
                  )}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Continent</td>
              <td>{showCountry.region}</td>
            </tr>
            <tr>
              <td>Languages</td>
              <td>
                <ul>
                  {Object.values(showCountry.languages).map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <img src={showCountry.flag} alt="finland flag" width="200px" />
        <WeatherCondition city_name={showCountry.capital[0]} />
      </div>
    </div>
  )
}

export default CountryDetail
