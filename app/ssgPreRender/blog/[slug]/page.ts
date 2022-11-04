import PocketBase from 'pocketbase'

const getPosts = async (params: string) => {
    const db = new PocketBase(process.env.POCKETBASE)
    const data = await db.records.getList(params)
    return data?.items as any[]
}

const generateStaticSite = async () => {
    const posts = await getPosts('blogs')

    // equivalent getStaticPath
    return posts.map((post) => ({
        slug: post.slug,
        // children: post.konten
    }))

}
export default generateStaticSite