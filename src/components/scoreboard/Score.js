import React from 'react';

import '../../styles/Score.css';

function Score({ score }){
  return(
    <div className="score-cell">{score}</div>
  );
}

export default React.memo(Score);