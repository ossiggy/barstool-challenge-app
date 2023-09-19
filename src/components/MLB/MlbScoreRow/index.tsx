import Score from "../../Scoreboard/ScoreCell";
import type { TeamInfoSchemaType } from "@/components/types";

export interface MlbScoreRowPropType {
  team: TeamInfoSchemaType;
  scores: number[];
  type: string;
  hits: number;
  errors: number;
  headers: any[];
}

export const MlbScoreRow = ({
  team,
  scores,
  type,
  hits,
  errors,
  headers,
}: MlbScoreRowPropType) => {
  const runs = scores.length ? scores.reduce((acc, x) => acc + x) : 0;

  return (
    <div id={type} className="game-info">
      <div className={`box-info-div ${type} teams`}>{team.abbreviation}</div>
      {headers.map((slot, i) => {
        let scoreByInning;
        if (scores[i] >= 0) {
          scoreByInning = <Score score={scores[i]} />;
        } else {
          scoreByInning = <Score score={""} />;
        }
        return (
          <div className="box-info-div" key={`${type}-score-${i}`}>
            {scoreByInning}
          </div>
        );
      })}
      <div className="box-info-div totals runs">{runs}</div>
      <div className="box-info-div totals">{hits}</div>
      <div className="box-info-div totals">{errors}</div>
    </div>
  );
};
