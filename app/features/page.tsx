// https://next-the-13th.vercel.app/
// https://github.com/nikolalsvk/next-the-13th

import Image from "next/image"
import Link from 'next/link'
import { Montserrat } from "@next/font/google";
const montserrat = Montserrat();

// https://github.com/vercel/next.js/blob/canary/docs/advanced-features/codemods.md#next-image-to-legacy-image
const ImagesComponent = async () => {
    return (
        <Image
            alt="preview test"
            src='/Getting-Started-with-NextJS.jpg'
            width={300}
            height={300}
        />
    )
}
const LinkComponent = async () => {
    return (
        <>
            {/* Next.js 12: `<a>` has to be nested otherwise, it's excluded */}
            <Link href="/linkto">
                <a>linkto</a>
            </Link>

            {/* Next.js 13: `<Link>` always renders `<a>` */}
            <Link href="/linkto">
                linkto
            </Link>
        </>
    )
}

const TestFont = async () => {
    return (
        <article>
            <h1>Hello, I am Page!</h1>
            <p className={montserrat.className}>I am using Montserrat font</p>
        </article>
    )
}

/*
Generating OG Images with @vercel/og

A new @vercel/og library
allows you to generate open graph (OG) images.
It's well known that OG images can increase
the engagement rate for links you share.

Vercel and Next.js
have been discussing this topic for some time,
providing you with docs to generate OG images via functions.
But now there is a new guide that shows
how you can utilize the new Edge Runtime together
with the @vercel/og library.
*/

// NEXTJS TELEMETRY:
// Attention: Next.js now collects completely anonymous telemetry regarding usage.
// This information is used to shape Next.js' roadmap and prioritize features.
// You can learn more, including how to opt-out if you'd not like
// to participate in this anonymous program, by visiting the following URL:
// https://nextjs.org/telemetry

// npx next telemetry disable
// npx next telemetry status

export default ImagesComponent