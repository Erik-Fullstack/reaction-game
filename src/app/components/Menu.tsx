"use client";
import { Button } from "@mui/material";

export default function Menu() {
    return (
            <div className="flex flex-col gap-4 justify-center sm:flex-row sm:gap-10">
                <Button className="h-14" variant="contained" size="large" style={{background: "#272727"}} onClick={() => console.log("rendera leaderboard i gameboard")}>Leaderboard</Button>
                <Button className="h-14" variant="contained" size="large" style={{background: "#272727"}} onClick={() => console.log("rendera input i gameboard")}>Submit time</Button>
                {/* varför tredje knapp? */}
                {/* <div className="flex justify-center gap-12">
                <Button variant="contained" size="large" onClick={() => console.log("hej2")}>hej2</Button>
                <Button variant="contained" size="large" onClick={() => console.log("hej3")}>hej3</Button>
            </div> */}
            </div>
    )
}