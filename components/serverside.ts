import { getData } from '../lib/data'

export default async function ServerSide() {
    const data = await getData()
    return data
}