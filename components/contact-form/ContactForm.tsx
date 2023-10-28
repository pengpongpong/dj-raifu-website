"use client"
import React, { useEffect, useState } from 'react'

import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { DatePickerForm } from "./DatePicker"

import { ContactProps } from "../pages/contact/Contact"

const ErrorText = ({ text }: { text?: string }) => {
    return <p className="mb-2 font-text text-error text-center">{text}</p>
}

// telephone check
const phoneRegex = /(?:\+?\d{1,3}\s?)?(?:(?:\(\d{1,}\)|\d{1,})[-.\s]?\d{1,}[-.\s]?\d{1,}|(?:\d{1,}[-.\s]?){3,}\d{1,})\s?(?:#|x|ext)\s?\d{1,}|(?:\d{1,}[-.\s]?){3,}\d{1,}/g;

const ContactForm = ({ pageData }: { pageData: ContactProps }) => {
    const [message, setMessage] = useState<string>("")

    // error messages
    const errorMessage = {
        name: pageData?.error.name,
        select: pageData?.error.select,
        email: pageData?.error.email,
        call: pageData?.error.telephone,
        date: pageData?.error.date
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
            then: (call) => call.matches(phoneRegex, errorMessage.call).required(errorMessage.call),
            otherwise: (call) => call.notRequired()
        }),
        message: yup.string(),
        date: yup.date().required(errorMessage.date)
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
            message: "",
            date: undefined
        }
    })

    // watch select element to render email or phone input conditionally
    const watchSelect = watch("select", "")

    // submit data
    const onSubmit = handleSubmit((data) => {
        const body = {
            data: data,
            date: new Intl.DateTimeFormat("de-AT", { dateStyle: "full" }).format(data.date),
        }

        fetch("/api/contact", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json())
            .then(result => {
                setMessage(result.message)
            })
    })

    // reset form on success submit
    useEffect(() => {
        if (isSubmitSuccessful) reset()
    }, [isSubmitSuccessful, reset])

    return (
        <form onSubmit={onSubmit} className="md:mx-16 lg:mx-36 xl:max-w-[800px] xl:mx-auto">
            <fieldset className="font-text flex flex-col gap-4">
                <input type="text" placeholder={pageData?.name} className="daisy_input daisy_input-bordered daisy_input-primary w-full border border-white text-white" {...register("name")} />
                {errors?.name && <ErrorText text={errors?.name?.message} />}

                <Controller
                    control={control}
                    name="select"
                    render={({ field: { onChange } }) => (
                        <>
                            <select name="type" className="daisy_select daisy_select-bordered daisy_select-primary w-full" onChange={onChange} defaultValue="Wie möchtest du kontaktiert werden?">
                                <option disabled>{pageData?.contactForm}</option>
                                <option value="email">Email</option>
                                <option value="call">Anruf</option>
                            </select>
                            {errors?.select && <ErrorText text={errors?.select?.message} />}
                        </>
                    )}
                />

                {watchSelect === "email" ? <input type="text" placeholder={pageData?.email} className="daisy_input daisy_input-bordered daisy_input-primary w-full border border-white text-white" {...register("email")} /> : ""}
                {errors?.email && <ErrorText text={errors?.email?.message} />}

                {watchSelect === "call" ? <input type="text" placeholder={pageData?.telephone} className="daisy_input daisy_input-bordered daisy_input-primary w-full border border-white text-white" {...register("call")} /> : ""}
                {errors?.call && watchSelect && <ErrorText text={errors?.call?.message} />}

                <Controller
                    control={control}
                    name="date"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <DatePickerForm
                                selected={value}
                                setSelected={(date) => onChange(date)}
                                title={pageData?.datePicker}
                            />
                            {errors?.date && <ErrorText text={errors?.date?.message} />}
                        </>
                    )}
                />

                <textarea className="daisy_textarea daisy_textarea-bordered daisy_textarea-primary text-base" rows={6} placeholder={pageData?.message} {...register("message")} />
            </fieldset>

            <button className="vinyl w-full my-12 daisy_btn bg-black text-white box-shadow tracking-wider hover:bg-white hover:text-black transition duration-300 ease-in-out" type="submit">{pageData?.button}</button>
            {message !== "" ? <p className="text-center mb-4 tracking-wide font-text">{message}</p> : ""}
        </form>
    )
}

export default ContactForm