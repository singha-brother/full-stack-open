import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad }) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine text="average" value={average(good, neutral, bad)} />
        <StatisticLine
          text="positive"
          value={`${goodPercent(good, neutral, bad)} %`}
        />
      </tbody>
    </table>
  )
}

export default Statistics

function average(good, neutral, bad) {
  const total = good + neutral + bad
  const result = (good - bad) / total
  return Math.round(result * 100) / 100
}

function goodPercent(good, neutral, bad) {
  const result = (good * 100) / (good + neutral + bad)
  return Math.round(result * 100) / 100
}
