"use client"

import { useRouter } from "next/router"
import { useEffect } from "react"
import Cotter from "cotter"

import styles from "../../styles/Home.module.css"

export default function LoginPage() {
    const router = useRouter()
    console.log(process.env.COTTER_CLIENT_ID)
    // 2️⃣ Initialize and show the form
    // useEffect(() => {
    //     var cotter = new Cotter(process.env.COTTER_CLIENT_ID as string) // 👈 Specify your API KEY ID here
    //     cotter
    //         .signInWithLink() // use .signInWithOTP() to send an OTP
    //         .showEmailForm() // use .showPhoneForm() to send magic link to a phone number
    //         .then((response) => {
    //             console.log(response) // show the response
    //             router.push("/dashboard")
    //         })
    //         .catch((err) => console.log(err))
    // }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.subtitle}>Welcome to my Github App</h1>

            {/* 3️⃣ Put a <div> that will contain the form */}
            <div id="cotter-form-container" style={{ width: 300, height: 300 }} />
        </div>
    )
}