import Heading from "@/components/Heading"
import ShareButtons from "@/components/ShareButtons"
import { getReview, getSlugs } from "@/lib/review"
import Image from "next/image"

export async function generateStaticParams() {
    const slugs = await getSlugs()
    return slugs.map((slug) => ({slug}))
}

export async function generateMetadata(props) {
    const review = await getReview(props.params.slug)
    return {
        title: review.title
    }
}

export default async function ReviewPage({params: {slug}})
{
    const review = await getReview(slug)
    
    return (
        <>
            <Heading>{review.title}</Heading>
            <div className="flex gap-3 items-baseline">
                <p className="italic pb-2">{review.date}</p>
                <ShareButtons />
            </div>
            <Image width="380" height="180" src={review.image} alt={`image de ${review.title}`} className='mb-4 rounded w-screen mx-auto' />
            <div className="w-full">
                <article dangerouslySetInnerHTML={{__html: review.body}} className="prose lg:prose-xl w-full max-w-none"></article>    

            </div>
        </>
    )
}