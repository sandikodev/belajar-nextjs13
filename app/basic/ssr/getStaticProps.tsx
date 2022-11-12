import fs from 'fs' //This will get removed on the client
import path from 'path'

const Static = ({ blogPost }: any) => {
    return <div>{blogPost}</div>
}

export async function getStaticProps({ params }: any) {
    //We get the filename as a parameter from the context object

    //fs is server side only, but this code only runs on the server
    const blogPost = fs.readFileSync(
        path.join(
            process.cwd(),
            'src/pages/examples/blog-posts',
            params.staticBlogPostId + '.txt'
        ),
        'utf8'
    )

    return {
        props: { blogPost }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    //I have a folder containing blog posts in text files
    const paths = fs
        .readdirSync(path.join(process.cwd(), 'src/pages/examples/blog-posts'))
        .map((fileName) => fileName.split('.')[0]) //Just a quick map to remove the .txt from the filenames
    console.log(paths) //[ 'manchester-holiday', 'new-beginnings', 'new-job' ]

    return {
        paths: paths.map((fileName) => {
            return { params: { staticBlogPostId: fileName } }
        }),
        fallback: false, //Means anything else will 404
    }
}

export default Static