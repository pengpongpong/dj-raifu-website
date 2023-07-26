"use client"
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { DatePickerForm } from "./DatePicker"

const ErrorText = ({ text }: { text?: string }) => {
    return <p className="mb-2 font-text text-error text-center">{text}</p>
}

const ContactForm = () => {
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [selectOption, setSelectOption] = useState<string>("")

    // error messages
    const errorMessage = {
        name: "Bitte Name eintragen",
        select: "Bitte Kontaktart angeben",
        email: "Bitte gültige Email eintragen",
        call: "Bitte Telefonnummer eintragen",
    }

    // schema validation
    const schema = yup.object({
        name: yup.string().required(errorMessage.name),
        select: yup.string().required(errorMessage.select),
        email: yup.string().email(errorMessage.email).when("select", {
            is: "email",
            then: (email) => email.required(errorMessage.email),
            otherwise: (email) => email.notRequired()
        }),
        call: yup.string().when("select", {
            is: "call",
            then: (call) => call.required(errorMessage.call),
            otherwise: (call) => call.notRequired()
        }),
        message: yup.string()
    })

    // get react hook form
    const {
        register,
        handleSubmit,
        reset,
        control,
        watch,
        formState: { errors, isSubmitSuccessful }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            select: "",
            email: "",
            call: "",
            message: ""
        }
    })

    // watch select element to render email or phone input conditionally
    const watchSelect = watch("select", "")

    // submit data
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        console.log(selectedDate instanceof Date)
        console.log(!!selectedDate)
        console.log(selectOption)
    })

    // reset form on success submit
    useEffect(() => {
        if (isSubmitSuccessful) reset()
    }, [isSubmitSuccessful, reset])

    return (
        <form onSubmit={onSubmit}>
            <fieldset className="font-text flex flex-col gap-4">
                <input type="text" placeholder="Dein Name" className="daisy_input daisy_input-bordered daisy_input-primary w-full border border-white text-white" {...register("name")} />
                {errors?.name && <ErrorText text={errors?.name?.message} />}

                <Controller
                    control={control}
                    name="select"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <>
                            <select name="type" className="daisy_select daisy_select-bordered daisy_select-primary w-full" onChange={onChange} defaultValue="Wie möchtest du kontaktiert werden?">
                                <option disabled>Wie möchtest du kontaktiert werden?</option>
                                <option value="email">Email</option>
                                <option value="call">Anruf</option>
                            </select>
                            {errors?.select && <ErrorText text={errors?.select?.message} />}
                        </>
                    )}
                />

                {watchSelect === "email" ? <input type="text" placeholder="deine@email.com" className="daisy_input daisy_input-bordered daisy_input-primary w-full border border-white text-white" {...register("email")} /> : ""}
                {errors?.email && <ErrorText text={errors?.email?.message} />}

                {watchSelect === "call" ? <input type="text" placeholder="Deine Telefonnummer" className="daisy_input daisy_input-bordered daisy_input-primary w-full border border-white text-white" {...register("call")} /> : ""}
                {errors?.call && watchSelect && <ErrorText text={errors?.call?.message} />}

                <DatePickerForm
                    selected={selectedDate}
                    setSelected={setSelectedDate}
                />
                <textarea className="daisy_textarea daisy_textarea-bordered daisy_textarea-primary text-base" rows={4} placeholder="Hinterlasse mir eine Nachricht" {...register("message")} />
            </fieldset>
            <input type="submit" defaultValue="Absenden" className="w-full my-12 daisy_btn bg-black text-white box-shadow" />
        </form>
    )
}

export default ContactForm