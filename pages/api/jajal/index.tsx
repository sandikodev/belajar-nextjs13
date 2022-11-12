import React from "react";

export default function Jajal() {
    return (
        <h1>hasil</h1>
    )
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