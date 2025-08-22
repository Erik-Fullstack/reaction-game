"use client"
import Menu from "./components/Menu";
import Gameboard from "./components/Gameboard";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//TODO: trycker man innan skärmen bytt färg blir det felmeddelande (Too early)
  //2 olika leaderboards för mobil och pc? eller enum i DB som visar vad man gjorde sin score på?
  //bäst av 5?
  //reaction måste clearas efter submit score så man inte kan skicka samma flera gånger
export default function Home() {
  const [reaction, setReaction] = useState<null | number>(null)
  return (
    <main className="font-sans grid grid-rows-[15vh_25vh_1fr] items-center justify-items-center min-h-screen bg-[#272727]">
      <Link className="absolute top-2 right-2 sm:top-5 sm:right-5 xl:right-30" href={"https://github.com/Erik-Fullstack/reaction-game"}><Image src={"githubIcon.svg"} alt="Github Icon" width={30} height={30} /></Link>
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
