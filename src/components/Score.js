import React from 'react';

const Score = ({ score }) => {
  return(
    <div className="score-cell">{score}</div>
  );
}

export default React.memo(Score);