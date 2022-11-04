import './globals.css'
import Link from "next/link"
import { Providers } from './providers'; // magic happen here!: migrate next12-next13 
import NavbarMat from '../components/navbar'
const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                Home
            </Link>
            <Link href="/belajarSWR">
                Learn SWR
            </Link>
            <Link href="/notes">
                SSR Notes Pages
            </Link>
            <Link href="/ssgPreRender">
                SSG Pre Render Pages
            </Link>
            <Link href="/ssgPreRender/blog">
                Pre Render Blog
            </Link>
            <Link href="/features">
                New Release Features
            </Link>
        </nav>
    )
}
export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                <Providers>
                    <NavbarMat />
                    <div className="p-10">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
}