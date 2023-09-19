import React from "react";
import { Scoreboard, MlbScore } from "../../../components";
import { callApi } from "@/helpers";

// import "../../styles/ScoreBoard.css";

const MlbGame = async () => {
  const data = await callApi("/game/mlb");

  return (
    <div id="scoreboard">
      <Scoreboard league="MLB" data={data}>
        <MlbScore data={data} marker="" period={0} />
      </Scoreboard>
    </div>
  );
};

export default MlbGame;
