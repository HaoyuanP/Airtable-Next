import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Hero,
    Footer,
    AboutHero,
    Brands,
    Navbar,
    Stats
} from "../devlink";


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar></Navbar>
                <Stats></Stats>
                <Hero buttonText={"Find a job"} buttonLink={{href: "#jobs"}} />


                <Brands/>
                <AboutHero></AboutHero>


            </main>

            <Footer year={"06/24/2023"}></Footer>

        </div>

    )
}
