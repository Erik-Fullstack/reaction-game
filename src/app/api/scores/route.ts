export async function GET(req: Request) {

    const scores = [
        {id: 1, name: "Erik", time: 150}
    ];
    return new Response(JSON.stringify(scores), {
        status: 200,
        headers: {"Content-Type": "application/json"}
    })
}

export async function POST(req: Request) {

    const {name, time} = await req.json();
    const newUser = {
        name,
        time
    }
    return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: {"Content-Type": "application/json"}
    })
}