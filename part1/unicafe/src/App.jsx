import { useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStatistics from './components/FeedbackStatistics'
import './index.css'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handlers = {
    setGood,
    setNeutral,
    setBad,
  }
  const states = {
    good,
    neutral,
    bad,
  }
  return (
    <>
      <FeedbackForm {...handlers} />
      <FeedbackStatistics {...states} />
    </>
  )
}

export default App
