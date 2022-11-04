// declare directive here
// Client Side Rendering
"use client";
import { useState } from "react";

// You should add "use client" when:

// using useState or useEffect client hooks from React
// you depend on certain browser APIs
// you want to add certain event listeners

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked the Count++ button {count} times</p>
            <button onClick={() => setCount(count + 1)}>Count++</button>
        </div>
    );
}

export default Counter

/*
// CSR: Streaming and Fetching in Client Components
// we can't use async/await in this manner in Client Components.
// Let's see how we can fetch data there in the next section

"use client";

import { use } from "react";

async function getData() {
    // You would usually fetch data from an API here.
    // const res = await fetch("https://api.github.com/");

    // But, here we just wait for 3 seconds.
    await new Promise((res) => setTimeout(res, 3000));

    // You would usually return data from an API here.
    // return res.json();
    return "Dashboard data in Client Components";
}

export default function Page() {
    // CSR every async data fetch
    // must be wrap in use method: react hook
    // that later would be handle only by client browser machine's
    //here's the differ SSR between CSR
    const name = use(getData());

    // We need use() because it handles the promise
    // returned by a function in a way
    // compatible with components, hooks, and Suspense.
    // The use hook is a part of the React RFC we mentioned earlier.


    return <p>🤩 Hello {name}!</p>;
}
*/