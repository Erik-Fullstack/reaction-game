"use client"

import { useEffect, useRef, useState } from "react";


export default function Gameboard() {
    const [gameActive, setGameActive] = useState(false);
    const [failedAttempt, setFailedAttempt] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);
    const [startTime, setStartTime] = useState<null | number>(null)
    const [reaction, setReaction] = useState<null | number>(null);

    const timeOut = useRef<ReturnType<typeof setTimeout> | null>(null);

    //only runs when game is started
    useEffect(() => {
        if (gameActive) {
            timeOut.current = setTimeout(() => {
                setTimerStarted(true);
                setStartTime(performance.now());
            }, (Math.floor(Math.random() * 7) + 1) * 1000);
        }
        return () => {
            if (timeOut.current) {
                clearTimeout(timeOut.current);
                timeOut.current = null;
            }
        }
    }, [gameActive]);

    //runs when reaction changes
    useEffect(() => {
        if (reaction !== null) {
            console.log(`Your reaction time is: ${Number(reaction.toFixed(0))}ms`);
        }
    }, [reaction])
    if (!gameActive) {
        return (
            <div className="flex flex-col size-full"
                onClick={() => {
                    setReaction(null);
                    setGameActive(true);
                }}>
                <p className="text-white mx-auto mt-12 text-3xl text-center">
                    {reaction ?
                        Number(reaction.toFixed(0)) <= 1000 ?
                            `Your reaction time is: ${reaction.toFixed(0)} ms` : `Your reaction time is: ${(reaction/1000).toFixed(3)} s` 
                        : "Press the screen to start"}
                </p> 
                <p className="text-white mx-auto mt-4 text-xl text-center">
                    {reaction && "Press the screen to play again!"}
                </p>
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