import Link from "next/link"
import Heading from "../../components/Heading"
export default function ReviewsPage()
{
    return (
        <>
            <Heading>Reviews</Heading>
            <p>Here we'll list all the reviews</p>
            <nav>
                <ul>
                    <li><Link href='/reviews/diablo'>Diablo</Link></li>
                    <li><Link href='/reviews/spider-man'>Spiderman</Link></li>
                </ul>
            </nav>
            
        </>
    )
}