import HeaderText from './HeaderText'
import Statistics from './Statistics'

const FeedbackStatistics = ({ good, neutral, bad }) => {
  const total_votes = good + neutral + bad
  return (
    <>
      <HeaderText text="statistics" />
      {total_votes == 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </>
  )
}

export default FeedbackStatistics
