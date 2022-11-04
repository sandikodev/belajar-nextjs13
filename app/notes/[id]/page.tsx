// [id] <- wildcards dynamic route
import styles from '../Notes.module.css'

const getNote = async (noteId: string) => {
    // interpolate actual id by noteId
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
        {
            next: {
                revalidate: 10
            }
        })
    const data = await res.json()
    return data
}
export default async function NotePage({ params }: any) {

    // this pages(any page with dynamic route) won't cache every request
    // so at fetch method we need declare next cached revalidate propertes
    // fetch(
    //     url,
    //     { next: { revalidate: 10 } }
    // )
    // for explicit define away of how cache behaviour is works.

    const note = await getNote(params.id)
    return (
        <div>
            <h1 className='rounded-lg bg-slate-500 p-5 text-center text-white'>notes/{note.id}</h1>
            <div className={styles.note}>
                <h2 className='p-5 text-center font-bold'>{note.title}</h2>
                {/* <h5 className='p-2'>{note.content}</h5> */}
                <p className='p-2 text-sm'>{note.created}</p>
            </div>
        </div >
    )
}

/*
// SSR: Streaming and Fetching in Server Components

async function getData() {
  // You would usually fetch data from an API here.
  // const res = await fetch("https://api.github.com/")
 
  // But, here we just wait for 3 seconds.
  await new Promise((res) => setTimeout(res, 3000))
 
  // You would usually return data from an API here.
  // return res.json()
  return "Dashboard data"
}
 
export default async function Page() {
  const name = await getData()
 
  return <p>🤩 Hello {name}!</p>
}
*/
