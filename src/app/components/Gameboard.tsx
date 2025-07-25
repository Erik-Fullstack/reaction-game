"use client"

import { useEffect, useState } from "react";


export default function Gameboard() {
    const [gameActive, setGameActive] = useState(false);
    const [failedAttempt, setFailedAttempt] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);

    //körs när spelet startar
    useEffect(() => {
        if (gameActive) {
            setTimeout(() => setGameEnded(true), (Math.floor(Math.random() * 7) + 1) * 1000);
        }
    }, [gameActive]);

    if (!gameActive) {
        return (
            <div className="flex size-full"
                onClick={() => setGameActive(true)}>
                <p className="text-white mx-auto mt-8 text-2xl">Tryck på skärmen för att starta {failedAttempt > 0 && failedAttempt.toString()}</p>
            </div>
        )
    } else if (gameEnded) {
        return (
            //här ska timern in
            <div
                className="size-full bg-green-500"
                onClick={() => {
                    setGameActive(false);
                    setGameEnded(false);
                }}
            />
        )
    } else return (
        <div
            className="size-full bg-red-500"
            onClick={() => {
                setFailedAttempt(f => f + 1)
                setGameActive(false);
            }} />
    )
}