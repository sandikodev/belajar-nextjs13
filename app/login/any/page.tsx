"use client" // if this declared any server side never be run
export default function Coba() {
    console.log(process.env.COTTER_CLIENT_ID) // this is server side
    return (
        <h1>test</h1>
    )
}