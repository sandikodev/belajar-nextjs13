import Link from 'next/link'
import PocketBase from 'pocketbase'

const getPosts = async (params: string) => {
    const db = new PocketBase(process.env.POCKETBASE)
    const data = await db.records.getList(params)
    return data?.items as any[]
}

const generateStaticSite = async () => {
    const posts = await getPosts('postingan')
    const blogs = await getPosts('blogs')
    return (
        <div className="flex flex-row justify-center items-center">
            <div className="flex-1 w-64">
                <ul className='list-disc font-bold'>
                    {blogs?.map((blog) => {
                        return <Alamat key={blog.id} blog={blog} />
                    })}
                </ul>
            </div>
            <div className="flex-1">
                <ul>
                    {
                        posts?.map((post) => {
                            return <>
                                <div className='rounded-lg p-4 m-4 bg-red-200'>
                                    <h2 className='p-5 text-center font-bold'>{post.judul}</h2>
                                    <h5 className='p-2'>{post.konten}</h5>
                                    <p className='p-2 text-sm'>{post.created}</p>
                                </div>
                            </>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default generateStaticSite

const Alamat = ({ blog }: any) => {
    const { id, judul, slug, created } = blog || {}
    return (
        <li className='p-2 hover:text-red-400'>
            <Link href={`/ssgPreRender/blog/${slug}`}>
                {id}-{judul}
            </Link>
        </li>
    )
}