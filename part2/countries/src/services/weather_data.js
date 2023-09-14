const fetchWeatherDataByCity = async (city) => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric`
  //   console.log(baseUrl)
  try {
    const res = await fetch(baseUrl)
    const data = await res.json()
    // console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export default { fetchWeatherDataByCity }
