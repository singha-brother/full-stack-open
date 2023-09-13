import HeaderText from './HeaderText'

const FeedbackForm = ({ setGood, setNeutral, setBad }) => {
  return (
    <>
      <HeaderText text="give feedback" />
      <button onClick={() => setGood((prev) => prev + 1)}>good</button>
      <button onClick={() => setNeutral((prev) => prev + 1)}>neutral</button>
      <button onClick={() => setBad((prev) => prev + 1)}>bad</button>
    </>
  )
}

export default FeedbackForm
