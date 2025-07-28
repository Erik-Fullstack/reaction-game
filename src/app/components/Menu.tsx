"use client";
import { Button } from "@mui/material";
import { useState } from "react";

type Score = {
    name: string,
    time: number
}
export default function Menu() {

    const [scores, setScores] = useState<[] | object[]>([]);

    const fetchScores = async () => {
        const res = await fetch("/api/scores");
        const json = await res.json();
        setScores(json);
        console.log(json)
    }
    const submitScore = async (score: Score) => {
        const res = await fetch("/api/scores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(score)
        });
        const json = await res.json();
        console.log(json)
    }
    return (
            <div className="flex flex-col gap-4 justify-center sm:flex-row sm:gap-10">
                <Button className="h-14" variant="contained" size="large" style={{background: "#272727"}} onClick={() => fetchScores()}>Leaderboard</Button>
                <Button className="h-14" variant="contained" size="large" style={{background: "#272727"}} onClick={() =>submitScore({name: "Janne", time: 200})}>Submit time</Button>
                {/* varför tredje knapp? */}
                {/* <div className="flex justify-center gap-12">
                <Button variant="contained" size="large" onClick={() => console.log("hej2")}>hej2</Button>
                <Button variant="contained" size="large" onClick={() => console.log("hej3")}>hej3</Button>
            </div> */}
            </div>
    )
}