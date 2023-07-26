"use client"
import React, { MouseEvent, useState } from 'react'
import Image from "next/image"
import { InstagramData } from "./page"


const InstagramImage = ({ list }: { list: InstagramData[] }) => {
    const [imageUrl, setImageUrl] = useState<Array<string>>([])
    const [message, setMessage] = useState<string>("")

    // handle image selection
    const handleSelect = (event: MouseEvent<HTMLInputElement>) => {
        const { target } = event
        if (target) {
            const id = target as HTMLInputElement
            const filter = imageUrl.filter(obj => obj === id.value)

            if (filter.length) {
                const newArr = imageUrl.filter(obj => obj !== id.value)
                return setImageUrl(newArr)
            } else {
                const newArr = [...imageUrl, id.value]
                return setImageUrl(newArr)
            }
        }
    }

    // add data to sanity document
    const submitAdd = () => {
        if (!imageUrl.length) return setMessage("Kein Bild ausgewählt")
        
        const token = process.env.NEXT_PUBLIC_SANITY_TOKEN

        // filter data from list
        const filteredData = imageUrl.map(obj => {
            return list.filter(item => {
                if (item.id === obj) {
                    return item
                }
            })
        }).flat()

        // transform data to correct json format for sanity mutations
        const transformData = (mutations: InstagramData[]) => {
            return mutations.map(obj => {
                return {
                    "url": obj.permalink,
                    "imageUrl": obj.media_url,
                    "id": obj.id,
                    "_key": obj.id
                }
            })
        }

        // sanity mutations
        const data = {
            "mutations": [
                {
                    "patch": {
                        "id": "31de1507-aa0f-4b4b-874e-d1057335fc69",
                        "insert": {
                            "after": "instagram[-1]",
                            "items": transformData(filteredData)
                        }
                    }
                }
            ]
        }

        // submit to sanity api
        fetch("https://nwgrhnh6.api.sanity.io/v2023-07-26/data/mutate/production", { method: "POST", headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(data) })
            .then(res => res.json())
            .then(result => {
                if (result.results[0].operation === "update") {
                    setMessage("Successfully added")
                } else {
                    const error = result.error.items[0].error.description
                    setMessage(error)
                }
            })
    }

    return (
        <>
            <button onClick={submitAdd} className="my-4 w-full daisy_btn daisy_btn-outline box-shadow">Add</button>
            {message ? <p className="my-4 font text text-center text-info">{message}</p> : ""}

            <section className="flex flex-col gap-4">
                {list?.map(obj => {
                    if (obj.media_type === "IMAGE") {
                        return (
                            <picture key={obj.id} className="flex flex-col justify-center items-center border border-white rounded-lg overflow-hidden">
                                <Image src={obj.media_url} width={2560} height={1440} alt=""
                                    sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
                                />
                                <input type="checkbox" className="my-2 daisy_checkbox border border-white" onClick={handleSelect} defaultValue={obj.id} />
                            </picture>
                        )
                    }
                })}
            </section>
        </>
    )
}

export default InstagramImage