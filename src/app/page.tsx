"use client"
import Menu from "./components/Menu";
import Gameboard from "./components/Gameboard";
import { useState } from "react";

//TODO: trycker man innan skärmen bytt färg blir det felmeddelande (Too early)
  //lägg till supabase för att spara scores för polarna?
  //bäst av 5?
export default function Home() {
  const [reaction, setReaction] = useState<null | number>(null)
  return (
    <main className="font-sans grid grid-rows-[15vh_25vh_1fr] items-center justify-items-center min-h-screen bg-[#272727]">
      <p className="text-4xl sm:text-5xl md:text-5xl">REACTION TEST</p>
      <div className="row-start-2 flex justify-center items-center bg-[#0288d1] size-full border-[#858585]">
        <Menu reaction={reaction}/>
      </div>
      <div className="row-start-3 bg-[#272727] size-full">
        <Gameboard setReaction={setReaction} reaction={reaction}/>
      </div>
    </main>
  );
}
