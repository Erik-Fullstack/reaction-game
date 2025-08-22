
export default async function postScore(reaction: number | null, name: string) {
    if (!reaction) return; //gör om till tooltip med ingen score att skicka

    const score = await fetch("/api/submitScore", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, time: reaction})
    });
}