import prisma from "@/app/config/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const {name, time} = body;

    try {
        const score = await prisma.score.create({
            data: {
                time,
                name
            }
        })
    return NextResponse.json({message: "score added to leaderboard"})
    } catch(error) {
        console.error(error)
    }
}