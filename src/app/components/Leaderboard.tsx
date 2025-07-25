"use client";
import { Button } from "@mui/material";

export default function Leaderboard() {
    return (
        <div className="border-1 flex flex-col gap-4 justify-center items-center">
            <Button variant="contained" onClick={() => console.log("hej1")}>hej1</Button>
            <div className="flex justify-center gap-4">
                <Button variant="contained" onClick={() => console.log("hej2")}>hej2</Button>
                <Button variant="contained" onClick={() => console.log("hej3")}>hej3</Button>
            </div>
        </div>
    )
}