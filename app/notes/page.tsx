import PocketBase from 'pocketbase'
import Link from 'next/link'
import styles from './Notes.module.css'
import CreateNote from './CreateNote'

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

// define function module here
// The API to fetch data has been simplified,
// and the old APIs getServerSideProps, getStaticProps, and getInitialProps
// are not supported in the new app directory.
// const nextConfig = { experimental: { appDir: true }}

// That way, fetching and rendering happen in the same environment,
// reducing the back and forth between client and server and,
// ultimately, work done in the browser

const getNotes = async () => {
    // pocketbase sdk works like an ORM
    const db = new PocketBase(process.env.POCKETBASE)
    const data = await db.records.getList('notes')

    // traditional fetch
    // React extends fetch to provide automatic request deduping,
    // then Next.js also extends the fetch options object
    // so each request can set its own caching and revalidating.
    /*
    const params = "page=1&perPage=30"
    const res = await fetch(
        `${process.env.POCKETBASE}/api/collections/notes/records?${params}`,
        {
            // SSR:
            // have auto cache route coz route segment isn't dynamic
            // disable next automatic cache for dynamic route
            // kind like getServerSideProps instead back and forward props
            // throughout the component
            cache: 'no-store'
        }
    )
    const data = await res.json()
    */

    /* FETCH: any other examples https://beta.nextjs.org/docs/data-fetching/fundamentals

    // This request should be cached until manually invalidated.
    // Similar to `getStaticProps` from Next.js 12.
    // `force-cache` is the default and can be omitted for brevity.
    // This is called static data in Next.js world
    fetch(URL, { cache: "force-cache" })

    // This request should be refetched on every request.
    // Similar to `getServerSideProps`.
    // Here we have loading of dynamic data in Next.js world.
    fetch(URL, { cache: "no-store" })

    // This request should be cached with a lifetime of 10 seconds.
    // Similar to `getStaticProps` with the `revalidate` option.
    fetch(URL, { next: { revalidate: 10 } })
    */
    return data?.items as any[]
}

// define main here
export default async function NotesPage() {
    const notes = await getNotes()
    return (
        <div>
            <h1>Experimental Server Side Rendering Next13</h1>
            <CreateNote /> {/* ini component Client Side Rendering: harus direfresh pake router.refresh()*/}
            <div className={styles.grid}>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />
                })}
            </div>
        </div>
    )
}

const Button = ({ onPress }: any) => {
    return (
        <button type='button' className='p-2 m-2 bg-red-400 rounded-full' onClick={onPress}>X</button>
    )
}
// define component module here
const Note = ({ note }: { note: any }) => {
    const { id, title, content, created } = note || {}
    return (
        <div className={styles.note}>
            <div className="flex items-right">
                {/* <Button /> */}
            </div>
            <Link href={`/notes/${id}`}>
                <h2 className='p-5 text-center font-bold'>{title}</h2>
            </Link>
            <h5 className='p-2'>{content}</h5>
            <p className='p-2 text-sm'>{created}</p>
        </div>
    )
}