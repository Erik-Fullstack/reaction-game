import Leaderboard from "./components/Leaderboard";
import Gameboard from "./components/Gameboard";
//TODO: trycker man innan skärmen bytt färg blir det felmeddelande (Too early)
  //lägg till supabase för att spara scores för polarna?
  //Timer om man inte klickar för att avsluta spelet?
  //felmeddelande om man klickar för snabbt

export default function Home() {
  return ( //bg-green-700 på main sen
    <main className="font-sans grid grid-rows-[10vh_25vh_1fr] items-center justify-items-center min-h-screen">
      <div className="row-start-2 flex justify-center items-center bg-green-700 size-full">
        <Leaderboard/>
      </div>
      <div className="row-start-3 bg-blue-900 size-full">
        <Gameboard/>
      </div>
    </main>
  );
}
