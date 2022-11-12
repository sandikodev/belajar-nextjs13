import Image from "next/image"
import axios from 'axios'

const ServerSide = ({ cat }: any) => {
    return (
        <div>
            <h1>Random Cat:</h1>
            <Image
                alt="cat"
                src={cat}
                layout="fixed"
                width="250"
                height="250" />
        </div>
    )
}

export async function getServerSideProps() {
    const { data } = await axios.get('https://cataas.com/cat?json=true')
    return {
        props: { cat: 'https://cataas.com' + data.url + '?type=sq' }, // will be passed to the page component as props
    }
}

export default ServerSide