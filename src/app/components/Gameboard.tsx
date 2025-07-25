"use client"

import { useEffect, useState } from "react";


export default function Gameboard() {
    const [gameActive, setGameActive] = useState(false);
    const [failedAttempt, setFailedAttempt] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);
    const [startTime, setStartTime] = useState<null | number>(null)
    const [reaction, setReaction] = useState<null | number>(null);

    //doesnt run on mount
    useEffect(() => {
        if (gameActive) {
            setTimeout(() => {
                setTimerStarted(true);
                setStartTime(performance.now());
            }, (Math.floor(Math.random() * 7) + 1) * 1000);
        }
    }, [gameActive]);

    //doesnt run on mount
    useEffect(() => {
        if (reaction !== null) {
            console.log(`Din reaktionsförmåga är: ${Number(reaction.toFixed(0))}ms`);
        }
    }, [reaction])
    if (!gameActive) {
        return (
            <div className="flex size-full"
                onClick={() => setGameActive(true)}>
                <p className="text-white mx-auto mt-8 text-2xl">Tryck på skärmen för att starta {failedAttempt > 0 && failedAttempt.toString()}</p>
            </div>
        )
    } else if (timerStarted) {
        return (
            <div
                className="size-full bg-green-500"
                onClick={() => {
                    const endTime = performance.now();
                    setReaction(endTime - startTime!);
                    setGameActive(false);
                    setTimerStarted(false);
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