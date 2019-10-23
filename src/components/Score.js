import React from 'react';

const Score = ({ score }) => (
  <div className="score-cell">{score}</div>
);

export default React.memo(Score);