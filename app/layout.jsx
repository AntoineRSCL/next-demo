import Link from "next/link"
import "./global.css"
import NavBar from "../components/NavBar"
import {orbitron} from "./fonts"

export default function RootLayout({children}){
    return (
        <html lang="fr" className={orbitron.variable}>
            <body className="flex flex-col px-4 py-4 min-h-screen bg-orange-50">
                <header>
                    <NavBar />
                </header>
                <main className="grow py-3 w-full mx-auto lg:w-10/12 px-6 lg:px-8">
                    {children}
                </main>
                <footer className="text-center text-xs border-t py-3">
                    Footer
                </footer>
            </body>
        </html>
    )
}