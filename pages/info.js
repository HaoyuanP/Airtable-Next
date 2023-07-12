import Head from 'next/head';
import getPosts from "../lib/getPosts";

export default function Home({ posts }) {
    getPosts()
    return (
        <div>
            <Head>
                <title>Airtable demo</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <h1>Airtable demo</h1>
                <ul>
                    {posts?.map(post => (
                        <li key={post.id}>
                            <span>{post.fields.Name }</span>
                            <span>{post.fields.Company }</span>
                            <span>{post.fields.budget}</span>
                            <span>{post.fields.Email}</span>
                            <span>{post.fields.PhoneNumber}</span>
                            <span>{post.fields.Servise}</span>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export async function getServerSideProps() {
    const posts = await getPosts();

    return {
        props: {
            posts,
        },
    };
}
