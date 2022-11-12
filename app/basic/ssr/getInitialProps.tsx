import App, { AppContext, AppProps } from "next/app"
import { NextPage } from "next"
import Image from 'next/image'

type IProps = {
    cat: string
}

function Initial({ cat }: IProps) {
    return (
        <div>example
            <h1>Random Cat:</h1>
            <Image src={cat} layout="fixed" width="250" height="250" alt={""}></Image>
        </div>
    )
}

Initial.getInitialProps = async (context: AppContext) => {
    const ctx = App.getInitialProps(context)

    const { data }: any = await fetch('https://cataas.com/cat?json=true')
    return {
        cat: 'https://cataas.com' + data.url + '?type=sq'
    }
}

export default Initial