const Head = async ({ params }: {
    params: IHead
}) => {
    return (
        <>
            <title>Next SWR App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </>
    )
}
export default Head

type IHead = {
    slug: string
}