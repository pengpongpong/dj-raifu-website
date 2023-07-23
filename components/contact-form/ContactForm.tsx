"use client"
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { DatePickerForm } from "./DatePicker"

const ErrorText = ({ text }: { text?: string }) => {
    return <p className="mb-2 font-text text-error text-center">{text}</p>
}

// location, date, time, message
const ContactForm = () => {
    const errorMessage = {
        name: "Bitte Name eintragen",
        email: "Bitte Email eintragen"
    }
    const schema = yup.object({
        name: yup.string().required(errorMessage.name),
        email: yup.string().email().required(errorMessage.email),
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
        }
    })


    const onSubmit = handleSubmit((data) => {
        console.log(data)
        console.log(selected instanceof Date)
    })

    const [selected, setSelected] = useState<Date>();

    return (
        <form onSubmit={onSubmit}>
            <fieldset className="font-text flex flex-col gap-4">
                <input type="text" placeholder="Dein Name" className="daisy_input daisy_input-bordered daisy_input-primary w-full border border-white text-white" {...register("name")} />
                {errors?.name && <ErrorText text={errors?.name?.message} />}
                <input type="email" placeholder="deine@email.com" className="daisy_input daisy_input-bordered daisy_input-primary w-full border border-white text-white" {...register("email")} />
                {errors?.email && <ErrorText text={errors?.email?.message} />}
                <DatePickerForm
                    selected={selected}
                    setSelected={setSelected}
                />
            </fieldset>

            <input type="submit" defaultValue="Absenden" className="w-full my-12 daisy_btn bg-black text-white box-shadow" />
        </form>
    )
}

export default ContactForm