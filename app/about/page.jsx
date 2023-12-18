import styles from "./styles.module.css"
import Heading from "@/components/Heading"

export const metadata = {
    title: "About"
}

export default function AboutPage() {
    return (
        <>
            <Heading>About us</Heading>
            <p className={styles.about}>
                Here bah jsp chef
            </p>
        
        </>
        
    )
}