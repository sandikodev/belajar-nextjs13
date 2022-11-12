import "server-only"

export async function getData() {
    const uri = 'https://api.github.com/user/repos'
    const resp = await fetch(uri, {
        headers: {
            Accept: 'application/vnd.github+json',
            authorization: `Bearer ${process.env.API_KEY}`
        },
    });

    return resp.json()
}