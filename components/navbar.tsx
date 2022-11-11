"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const ListMenu: Array<{
    uri: string,
    title: string
}> = [
        {
            uri: '/',
            title: 'Home'
        }, {
            uri: '/belajarSWR',
            title: 'Learn SWR'
        }, {
            uri: '/notes',
            title: 'SSR Notes Pages'
        }, {
            uri: '/ssgPreRender',
            title: 'SSG Pre Render Pages'
        }, {
            uri: '/ssgPreRender/blog',
            title: 'Pre Render Blog'
        }
    ]

const NavList = () => {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                {
                    ListMenu.map((data: any) => {
                        <Link href={data.uri} className="flex items-center">
                            {data.title}
                        </Link>
                    })
                }
            </Typography>
        </ul>
    )
}

export default function Example() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);


    return (
        <Navbar className="mt-2 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <span>Material Tailwind</span>
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                    <span>Buy Now</span>
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <NavList />
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                    <span>Buy Now</span>
                </Button>
            </MobileNav>
        </Navbar>
    );
}

// you can resolve this by capital letter
// declare global {
//     namespace JSX {
//         interface IntrinsicElements {
//             navList: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//         }
//     }
// }