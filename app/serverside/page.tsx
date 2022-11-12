import ServerSide from "../../components/serverside"

export default async function Page() {
    const data = await ServerSide()
    return (
        <div>
            {/* {JSON.stringify(data)} */}
            <h1>ini Halaman Server Side</h1>
        </div>
    )
}