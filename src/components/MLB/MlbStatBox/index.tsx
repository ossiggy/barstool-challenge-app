import { MlbPlayerStats } from "../MlbPlayerStats";
import {
  pitcherFields,
  pitcherKeys,
  batterFields,
  batterKeys,
} from "../MlbPlayerFields";
import type { BatterSchemaType, PitcherSchemaType } from "../types";

export const MlbStatBox = ({
  batters,
  pitchers,
}: {
  batters: BatterSchemaType[];
  pitchers: PitcherSchemaType[];
}) => {
  return (
    <div className="mlb-stat-box">
      <div className="player-stats">
        <MlbPlayerStats
          playerKeys={pitcherKeys}
          playerFields={pitcherFields}
          abbr={pitchers[0].team_abbreviation}
          players={pitchers}
        />
        <MlbPlayerStats
          playerKeys={batterKeys}
          playerFields={batterFields}
          abbr={batters[0].team_abbreviation}
          players={batters}
        />
      </div>
    </div>
  );
};
