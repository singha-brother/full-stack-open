import { useState } from "react";
import Spacer from "./components/Spacer";
import Card from "./components/Card";
import ButtonGroup from "./components/ButtonGroup";
import HeaderText from "./components/HeaderText";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [maxVoteIndex, setMaxVoteIndex] = useState(null);

  const [votesDict, setVotesDict] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  return (
    <div className="container">
      <HeaderText text="Anecdote of the day" />
      <Spacer height={10} />
      <Card text={anecdotes[selected]} votes={votesDict[selected]} />
      <Spacer height={20} />
      <ButtonGroup
        setSelected={setSelected}
        selected={selected}
        votesDict={votesDict}
        setVotesDict={setVotesDict}
        setMaxVoteIndex={setMaxVoteIndex}
      />
      <Spacer height={40} />
      <HeaderText text="Anecdote with most votes" />
      {maxVoteIndex === null ? (
        <>
          <Spacer height={20} />
          <p>Please vote something!</p>
        </>
      ) : (
        <>
          <Spacer height={10} />
          <Card
            text={anecdotes[maxVoteIndex]}
            votes={votesDict[maxVoteIndex]}
          />
        </>
      )}
    </div>
  );
};

export default App;
