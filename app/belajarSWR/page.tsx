"use client"

import Post from '../../components/posts'
import { useGetPosts } from '../../components/useRequest'

const learnSWR = () => {
    // any lib pretend as components
    const { data: posts, error, isLoading } = useGetPosts()

    if (error) return <h1>Something went wrong!</h1>
    if (isLoading) return <h1> Loading</h1>

    return (
        <main className="max-w-xl mx-auto">
            <h1 className="font-bold m-5">My Posts</h1>
            {posts.map((post: any) => (
                <Post post={post} key={post.id} />
            ))}
        </main>
    )
}

export default learnSWR