// https://cloudcoders.xyz/blog/how-to-use-swr-in-next-js-client-side-data-fetching-technique/
"use client"
import { Button } from '@material-tailwind/react'

import { useGetPosts, usePaginatePosts } from '../../lib/useRequest'
import Post from '../../components/posts'
import AddComment from './comments'


// const PageGet = () => {
//     const { data: posts, error, isLoading } = useGetPosts()
//     if (isLoading) return <h1>Loading..</h1>
//     if (error) return <h1>Something went wrong!</h1>
//     return (
//         <main className="max-w-xl mx-auto">
//             <h1 className="font-bold m-5">My Posts</h1>
//             {posts.map((post: any) => (
//                 <Post post={post} key={post.id} />
//             ))}
//         </main>
//     )
// }

const PaginatePosts = () => {
    const { posts, error, isLoadingMore, size, setSize, isReachingEnd } = usePaginatePosts()

    if (isLoadingMore) return <h1>Loading..</h1>
    if (error) return <h1>Something went wrong!</h1>
    if (!posts) return <h1>Loading..</h1>
    return (
        <main className="max-w-xl mx-auto">
            <h1 className="font-bold m-5">My Posts</h1>
            {posts?.map((post: any) => (
                <Post post={post} key={post.id} />
            ))}
            <Button
                disabled={isLoadingMore || isReachingEnd}
                onClick={() => setSize(size + 1)}
            >
                {isLoadingMore
                    ? 'Loading...'
                    : isReachingEnd
                        ? 'No more posts'
                        : 'Load more'}
            </Button>
        </main>
    )
}
const learnSWR = () => {
    return (
        <>
            <div className="flex justify-end align-center">
                <AddComment />
            </div>
            <PaginatePosts />
            {/* <PageGet /> */}
        </>
    )
}

export default learnSWR