"use client";
import { Button, TextField } from "@mui/material";

import { supabase } from "@/app/lib/supabaseClient"
import { useState } from "react";

type MenuProps = {
    reaction: number | null
}
export default function Menu({ reaction }: MenuProps) {
    const [name, setName] = useState("");
    const [nameField, setNameField] = useState(false);

    const fetchScores = async () => {
        const { data, error } = await supabase
            .from("Leaderboard")
            .select("*")
            .order("time", { ascending: true })
            .limit(10)
        if (error) {
            console.log("error fetching", error)
        } else {
            console.log(data)
        }
    }
    const submitScore = async () => {
        if (reaction && name) {
            const { error } = await supabase.from("Leaderboard").insert([{ name, time: reaction.toFixed(0) }])
            if (error) {
                console.log("error submitting")
            } else {
                setNameField(false)
                console.log("score submitted")
            }
        } else if (reaction) {
            console.log("enter a name")
        } else {
            setNameField(false)
            console.log("no score to submit")
        }
    }
    return (
        <div className="flex flex-col gap-4 justify-center sm:flex-row sm:gap-10">
            {!nameField ?
                <>
                    <Button className="h-14" variant="contained" size="large" style={{ background: "#272727" }} onClick={() => fetchScores()}>Leaderboard</Button>
                    <Button className="h-14" variant="contained" size="large" style={{ background: "#272727" }} onClick={() => setNameField(!nameField)}>Submit time</Button>
                </>
                :
                <>
                    <TextField color="#272727" label="Add your name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
                    <Button className="h-14" variant="contained" size="large" style={{ background: "#272727" }} onClick={() => submitScore()}>Submit score</Button>
                </>}
        </div>
    )
}