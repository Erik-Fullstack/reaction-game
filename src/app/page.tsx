import Leaderboard from "./components/Leaderboard";
//TODO: startgame>sidan blir röd och timer startas för att veta när appen ska stoppa(ingen timer för spelare än)>ny clickevent riggas för att avsluta spelet>
  //efter en random tid mellan 2-8sek blir skärmen röd och en timer sätts igång i bakgrunden
  //>>>VAL>>> trycker man innan skärmen bytt färg blir det felmeddelande
  //trycker man efter så visas tiden från att skärmen bytte färg tills man tryckte
  //lägg till supabase för att spara scores för polarna?

export default function Home() {
  return ( //bg-green-700 på main sen
    <main className="font-sans grid grid-rows-[10vh_25vh_1fr] items-center justify-items-center min-h-screen">
      <div className="row-start-2 flex justify-center items-center bg-green-700 size-full">
        <Leaderboard/>
      </div>
      <div className="row-start-3 flex justify-center items-center bg-red-800 size-full">

      </div>
    </main>
  );
}
