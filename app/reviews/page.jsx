import Link from "next/link"
import Heading from "@/components/Heading"

export default function ReviewsPage()
{
    return (
        <>
            <Heading>Reviews</Heading>
            <p>Here we'll list all the reviews</p>
            <nav>
                <ul className="flex flex-col gap-3">
                    <li className="border rounded shadow hover:shadow-x1 w-80 bg-slate-50">
                        <Link href='/reviews/diablo'>
                            <img src="/images/diablo.jpg" alt="image de diablo" className="rounded-t" />
                            <h2 className="font-orbitron font-semidbold py-1 text-center">Diablo 4</h2>
                        </Link>
                        </li>
                    <li className="border rounded shadow hover:shadow-x1 w-80 bg-slate-50">
                        <Link href='/reviews/spider-man'>
                            <img src="/images/spiderman2.jpg" alt="image de spiderman" className="rounded-t" />
                            <h2 className="font-orbitron font-semidbold py-1 text-center">Spiderman 2</h2>
                        </Link>
                        </li>
                </ul>
            </nav>
            
        </>
    )
}