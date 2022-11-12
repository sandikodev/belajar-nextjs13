// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: 'success' | 'failed',
    body?: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const table = 'comments'

    if (req.method === 'POST') {
        const body = req.body
        await fetch(
            `${process.env.POCKETBASE}/api/collections/${table}/records`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
        res.status(200).json({
            status: 'success',
            body: body
        })

    }
    if (req.method === 'GET') {
        res.status(200).json({
            status: 'success',
            body: 'any'
        })
    }
    // res.status(200).json({ name: 'John Doe' })
}


// export async function getServerSideProps(context) {
//     let url = `${apiUrl}/${context.query.slug}`;
//     let requestOptions = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };

//     const res = await fetch(url, requestOptions);
//     const resJson = await res.json();

//     return {
//         props: {
//             apiResponse: resJson,
//         },
//     };
// }