"use client"
import { useEffect } from "react"
import Heading from "@/components/Heading"

export default function HomePage() {
    /*useEffect(() => {
        window.alert("Bienvenue sur mon site")
    })*/

    console.log("HomePage [Reading]")

    return (
        <>
            <Heading>My Games</Heading>
            <p>
                Only the best games, reviewed for you.
            </p>
        
        </>
        
    )
}