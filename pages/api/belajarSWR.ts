import type { NextApiRequest, NextApiResponse } from 'next'

interface IPerson {
    id: number,
    name: string
}

export default async function getUsers(req: NextApiRequest,
    res: NextApiResponse<IPerson[]>) {
    res.status(200).json([
        {
            id: 1,
            name: 'Coba'
        }, {
            id: 2,
            name: 'Jajal'
        },
    ])
}