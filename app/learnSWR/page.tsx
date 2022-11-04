import Head from 'next/head'
import User from '../../components/user'
import { useGetPosts } from '../../components/useRequest'

export default function LearnSWR() {
    const coba = useGetPosts()
    // const { data: person, error } = useGetPosts()
    let person: any
    const error = false
    person = false
    if (error) return <h1>Something went wrong!</h1>
    if (!person) return <h1>Loading...</h1>

    return (
        <div>
            <Head>
                <title>Next SWR App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-xl mx-auto">
                <h1 className="font-bold m-5">Our User</h1>
                {(person) && person.map((user: any) => (
                    <User user={user} key={user.id} />
                ))}
            </main>
        </div>
    )
}