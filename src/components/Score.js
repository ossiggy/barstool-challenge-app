import React from 'react';

const Score = ({ score }) => {
  console.log('updating to score', score);
  return(
    <div className="score-cell">{score}</div>
  );
}

export default React.memo(Score);