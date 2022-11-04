// nextjs13 no need this anymore
// import { useRouter } from "next/router" 
import Image from "next/image"
import Head from "next/head"
import { width } from "@open-wa/wa-automate/dist/config/puppeteer.config"
// nextjs13 no need this anymore
// const Car = ({ car }: any) => {
const Car = async ({ params, searchParams }: { params: any, searchParams: any }) => {
    // nextjs13 no need this anymore
    // const router = useRouter()
    // const { id } = router.query

    const { id } = params // params -> /cars/:id
    const { jumlah } = searchParams // searchParams -> /cars/:{params}?jumlah

    const cars = await getCar(id)

    // <h1/> return Hello {data from /cars/:${params}}
    return (
        <>
            <Head>
                <title>Cars Table</title>
            </Head>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                id
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Color
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Image
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car: any) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {car.id}
                                </th>
                                <td className="py-4 px-6">
                                    {car.color}

                                </td>
                                <td className="py-4 px-6">
                                    <Image
                                        priority
                                        width={100}
                                        height={100}
                                        alt={car.id}
                                        src={car.image}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Car

// nextjs13 no need this anymore
// export async getStaticProps({ params }: any){
const getCar = async (params: any) => {
    const req = await fetch(`http://localhost:3000/${params}.json`,
        {
            next: {
                revalidate: 10
            }
        })
    return await req.json()

    // const data = await req.json()
    // return {
    //     props: {
    //         car: data
    //     }
    // }
}

export {
    getCar
}