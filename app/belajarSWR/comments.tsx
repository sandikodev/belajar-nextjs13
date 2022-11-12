import useSWR, { mutate } from "swr"
import { Button } from '@material-tailwind/react'

const AddComment = () => {
    // middleware access
    const address = `http://localhost:3000/api/comments`
    const fetcher = (uri: RequestInfo | URL, payload: RequestInit | undefined) => fetch(
        uri,
        payload).then((res) => res.json())

    // init SWR
    const { data, error } = useSWR(address, fetcher)

    // pretend as component
    // <button onClick=(addComment)>add comment</button>
    const addComment = async () => {
        // comment boilerplate
        const newComment = {
            comment: "This is a test comment",
            email: "rb@doe.com",
        }

        // comunicate to middleware
        const res = await fetcher(address, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment),
        })

        // check if ther's new data
        // revalidate the pages
        // if any changes, re-render without trigerring full pages reload
        // mutate(address)

        // /pages.tsx
        // default: revalidate
        // cheap way to disable revalidate on focus
        // const { data, error } = useSWR(address, fetcher, {
        //     revalidateOnFocus: false
        // })

        alert(JSON.stringify(res))
    }
    return (
        <Button onClick={() => addComment()}>Write Posts</Button>
    )
}
export default AddComment