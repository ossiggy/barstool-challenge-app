import Link from "next/link";
import { Header } from "../components";

const Home = async () => {
  return (
    <div>
      <Header />
      <Link href="/game/mlb">MLBScores</Link>
      <Link href="/game/nba">NbaScores</Link>
    </div>
  );
};

export default Home;
