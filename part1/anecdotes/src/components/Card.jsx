import React from "react";

const Card = ({ text, votes }) => {
  const voteText = votes > 1 ? "votes" : "vote";
  return (
    <div className="card">
      <p>{text}</p>
      <div className="vote">
        <span>{votes} </span>
        <span>{voteText}</span>
      </div>
    </div>
  );
};

export default Card;
