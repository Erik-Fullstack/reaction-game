"use client"

import { useEffect, useRef, useState } from "react";


export default function Gameboard() {
    const [gameActive, setGameActive] = useState(false);
    const [failedAttempt, setFailedAttempt] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    const [startTime, setStartTime] = useState<null | number>(null)
    const [reaction, setReaction] = useState<null | number>(null);

    const timeOut = useRef<ReturnType<typeof setTimeout> | null>(null);
    const touchStart = useRef(false);
    const blockClick = useRef(false);
    //functions to handle touchscreen+mouse

    const handleTouch = () => {
        if (blockClick.current) return;
        touchStart.current = true
        if (!gameActive) {
            startGame();
            return;
        }
        if (timerStarted) {
            stopGame();
        } else {
            tooEarly();
        }
    }
    const handleClick = () => {
        if (blockClick.current) return;
        if (!touchStart.current) {
            if (!gameActive) {
                startGame();
                return;
            }
            if (timerStarted) {
                stopGame();
            } else {
                tooEarly();
            }
        }
    }

    const startGame = () => {
        setReaction(null);
        setFailedAttempt(false);
        setGameActive(true);
    }
    const tooEarly = () => {
        setFailedAttempt(true);
        setGameActive(false);
        startCooldown();
    }
    const stopGame = () => {
        const endTime = performance.now();
        setReaction(endTime - startTime!);
        setGameActive(false);
        setTimerStarted(false);
        startCooldown();
    }
    const startCooldown = () => {
        blockClick.current = true;
        setTimeout(() => blockClick.current = false, 400)
    }

    //only runs when game is started
    useEffect(() => {
        if (gameActive) {
            //runs after a random time so people cant predict the click
            timeOut.current = setTimeout(() => {
                setTimerStarted(true);
                setStartTime(performance.now());
            }, (Math.floor(Math.random() * 3) + 1) * 1000);
        }
        return () => {
            if (timeOut.current) {
                clearTimeout(timeOut.current);
                timeOut.current = null;
            }
        }
    }, [gameActive]);

    if (!gameActive) {
        return (
            <div className="flex flex-col size-full text-center text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"

                onMouseDown={() => handleClick()}
                onTouchStart={() => handleTouch()}>
                {failedAttempt ?
                    <>
                        <p className="mt-12">
                            Too early!
                        </p>
                        <p className="mt-4 text-xl sm:text-2xl md:text-3xl xl:text-4xl">
                            Press the screen to try again!
                        </p>
                    </>
                    : <>
                        <p className="mt-12 mx-2 sm:mx-0">
                            {reaction ?
                                Number(reaction.toFixed(0)) <= 1000 ?
                                    `Your reaction time is ${reaction.toFixed(0)}ms` : `Your reaction time is ${(reaction / 1000).toFixed(3)}s`
                                : "Press the screen to start"}
                        </p>
                        <p className="mt-4 text-xl sm:text-2xl md:text-3xl xl:text-4xl">
                            {reaction && "Press the screen to play again!"}
                        </p>
                    </>}

            </div>
        )
    } else if (timerStarted) {
        return (
            <div
                className="size-full bg-green-500"
                onTouchStart={() => handleTouch()}
                onMouseDown={() => handleClick()}
            />
        )
    } else return (
        <div
            className="size-full bg-red-500"
            onTouchStart={() => handleTouch()}
            onMouseDown={() => handleClick()}
        />
    )
}