import React from "react";

const ButtonGroup = ({
  setSelected,
  selected,
  votesDict,
  setVotesDict,
  setMaxVoteIndex,
}) => {
  const generateRandomIdx = () => {
    const idx = Math.round(Math.random() * 7);
    setSelected(() => idx);
  };

  const handleVote = (idx) => {
    const updateVoteDict = { ...votesDict, [idx]: votesDict[idx] + 1 };
    setVotesDict(updateVoteDict);
    const maxVote = findMaxVoteIndex(updateVoteDict);
    setMaxVoteIndex(maxVote);
  };

  //   console.log("max votes idx", findMaxVoteIndex(votesDict));

  return (
    <div>
      <button onClick={() => handleVote(selected)}>vote</button>
      <button onClick={generateRandomIdx}>next anecdote</button>
    </div>
  );
};

export default ButtonGroup;

function findMaxVoteIndex(votes) {
  let maxVoteIdx = -1;
  let maxValue = -1;

  for (const key in votes) {
    if (votes[key] > maxValue) {
      maxValue = votes[key];
      maxVoteIdx = key;
    }
  }

  return maxVoteIdx === -1 ? null : Number(maxVoteIdx);
}
