import React from 'react';
import { get } from 'lodash';

import '../../styles/TeamInfo.css';

export default function TeamInfo(props){
  const { team, status } = props
  return (
    <div className={`team-info-box ${status}`}>
      <div className="team-city">
        {get(team, 'first_name')}
      </div>
      <div className="team-name">
        {get(team, 'last_name')}
      </div>
    </div>
  );
}