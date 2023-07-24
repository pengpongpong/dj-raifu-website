import React from 'react'
import Link from "next/link"

const Linktree = ({ title, url }: { title: string, url: string }) => {
    return <Link className="w-full py-3 text-black bg-white rounded-full text-center font-text tracking-wide" href={url}>{title}</Link>
}

const LinktreePage = () => {
    return (
        <main className="m-4 flex justify-center items-center flex-grow">
            <section className="flex flex-grow flex-col justify-center items-center gap-4">
                <Linktree title="Soundcloud" url="https://soundcloud.com"/>
                <Linktree title="Instagram" url="https://soundcloud.com"/>
                <Linktree title="Tik Tok" url="https://soundcloud.com"/>
                <Linktree title="some other links..." url="https://soundcloud.com"/>
            </section>
        </main>
    )
}

export default LinktreePage