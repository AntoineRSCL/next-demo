import Link from "next/link"
import "./global.css"
import NavBar from "../components/NavBar"

export default function RootLayout({children}){
    return (
        <html lang="fr">
            <body className="flex flex-col px-4 py-4 min-h-screen bg-orange-50">
                <header>
                    <NavBar />
                </header>
                <main className="grow py-3">
                    {children}
                </main>
                <footer className="text-center text-xs border-t py-3">
                    Footer
                </footer>
            </body>
        </html>
    )
}