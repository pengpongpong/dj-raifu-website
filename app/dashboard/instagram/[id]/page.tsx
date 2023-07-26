import React from 'react'
import { InstagramData } from "../page"
import InstagramImage from "../InstagramImage"


const Album = async ({ params: { id } }: { params: { id: string } }) => {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN
    const getMediaLink = `https://graph.instagram.com/${id}/children?fields=media_url,media_type,permalink&access_token=${token}`

    const fetchAlbum = await fetch(getMediaLink)
        .then(res => res.json())

    const { data }: { data: InstagramData[] } = fetchAlbum

    return (
        <main className="m-4 font-text">
            <h1 className="my-8 text-4xl text-center">Album</h1>
            <InstagramImage list={data} />
        </main>
    )
}

export default Album