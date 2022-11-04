// tells next not render on server instead client browser's
'use client' // Client Side Rendering

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const CreateNote = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const router = useRouter()

    const table = 'notes'
    const handleCreate = async () => {
        await fetch(
            `${process.env.POCKETBASE}/api/collections/${table}/records`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    content
                })
            })

        setTitle('')
        setContent('')
        router.refresh() // carefull not `next/router` but `next/navigation`
    }
    return (
        <div>
            <h3 className="text-center">Notes Form</h3>
            <form className="p-5" onSubmit={handleCreate}>
                <div className='flex space-y-2 justify-center'>
                    <input
                        className='outline-none'
                        type="text"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        className='outline-none'
                        type="text"
                        placeholder='Content'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className='flex m-2'>
                        <button type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Create New Note</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default CreateNote