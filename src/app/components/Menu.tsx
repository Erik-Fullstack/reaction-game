"use client";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import postScore from "../config/submitScore";

type MenuProps = {
    reaction: number | null
}
export default function Menu({ reaction }: MenuProps) {
    const [name, setName] = useState("");
    const [nameField, setNameField] = useState(false);
    return (
        <div className="flex flex-col gap-4 justify-center sm:flex-row sm:gap-10">
            {/* Leaderboard WIP */}
            {!nameField ?
                <>
                    {/* button to show leaderboard */}
                    <Button className="h-14" variant="contained" size="large" style={{ background: "#272727" }} onClick={() => console.log("knapp för att visa leaderboard")}>Leaderboard</Button>
                    {/* button to show textfield to enter name and button to submit score */}
                    <Button className="h-14" variant="contained" size="large" style={{ background: "#272727" }} onClick={() => setNameField(!nameField)}>Submit time</Button>
                </>
                :
                <>
                    <TextField sx={{
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                                borderColor: "#272727",
                            },
                        },
                        "& .MuiInputLabel-root": {
                            "&.Mui-focused": {
                                color: "#272727",
                            },
                        },
                    }} 
                    label="Add your name" 
                    variant="outlined" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    />
                    {/* button to submit score to DB */}
                    <Button className="h-14" variant="contained" size="large" style={{ background: "#272727" }} onClick={() => postScore(reaction, name)}>Submit score</Button>
                </>}
        </div>
    )
}