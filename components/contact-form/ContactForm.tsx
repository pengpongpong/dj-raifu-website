"use client"
import React, { ChangeEvent, useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { DatePickerForm } from "./DatePicker"

const ErrorText = ({ text }: { text?: string }) => {
    return <p className="mb-2 font-text text-error text-center">{text}</p>
}

// location, date, time, message
const ContactForm = () => {
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [selectOption, setSelectOption] = useState<string>("")

    const errorMessage = {
        name: "Bitte Name eintragen",
        email: "Bitte Email eintragen",
        call: "Bitte Telefonnummer eintragen",
        type: "Bitte Kontaktart angeben"
    }
    const schema = yup.object({
        name: yup.string().required(errorMessage.name),
        type: yup.string(),
        email: yup.string().email(),
        call: yup.string(),
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
            call: "",
            type: ""
        }
    })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        console.log(selectedDate instanceof Date)
        console.log(!!selectedDate)
        console.log(selectOption)
    })

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const { target } = event
        if (target) setSelectOption((target as HTMLSelectElement).value)
    }

    return (
        <form onSubmit={onSubmit}>
            <fieldset className="font-text flex flex-col gap-4">
                <input type="text" placeholder="Dein Name" className="daisy_input daisy_input-bordered daisy_input-primary w-full border border-white text-white" {...register("name")} />
                {errors?.name && <ErrorText text={errors?.name?.message} />}

                <select name="type" className="daisy_select daisy_select-bordered daisy_select-primary w-full" onChange={handleSelect} >
                    <option disabled selected>Wie möchtest du kontaktiert werden?</option>
                    <option value="email">Email</option>
                    <option value="call">Anruf</option>
                </select>
                {/* {!selectOption && <ErrorText text={errorMessage.type} />} */}

                {selectOption === "email" ? <input type="email" placeholder="deine@email.com" className="daisy_input daisy_input-bordered daisy_input-primary w-full border border-white text-white" {...register("email")} /> : ""}
                {errors?.email && selectOption && <ErrorText text={errors?.email?.message} />}

                {selectOption === "call" ? <input type="text" placeholder="Deine Telefonnummer" className="daisy_input daisy_input-bordered daisy_input-primary w-full border border-white text-white" {...register("call")} /> : ""}
                {errors?.call && selectOption && <ErrorText text={errors?.call?.message} />}
                <DatePickerForm
                    selected={selectedDate}
                    setSelected={setSelectedDate}
                />
                <textarea className="daisy_textarea daisy_textarea-bordered daisy_textarea-primary" rows={4} placeholder="Hinterlasse mir eine Nachricht" />
            </fieldset>
            <input type="submit" defaultValue="Absenden" className="w-full my-12 daisy_btn bg-black text-white box-shadow" />
        </form>
    )
}

export default ContactForm