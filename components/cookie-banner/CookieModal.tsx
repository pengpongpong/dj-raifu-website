"use client"
import React, { ReactElement, Ref, forwardRef, useCallback, useEffect, useRef } from 'react';

import { TransitionProps } from '@mui/material/transitions';
import { ThemeProvider, createTheme, Slide, DialogContent, Dialog } from "@mui/material";

import { deleteCookie, getCookie, setCookie } from "cookies-next";

import { setAdvertisement, setAnalytic, setOpen, setShowBanner, useConsentStore } from "@/utils/store/store";
import { Modal } from "./CookieBanner";
import { setLocalStorage } from "@/utils/utils";

// styles for dialog modal
const theme = createTheme({
    components: {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    padding: "1rem 0",
                    borderRadius: "0.5rem",
                    border: "1px solid #fff",
                    fontFamily: "Roboto",
                    backgroundColor: "#000",
                    color: "#fff"
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    width: "100%",
                    margin: "2rem 1rem 0 0",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    gap: "1rem",
                    '@media (max-width: 600px)': {
                        width: "auto",
                        margin: "1rem",
                        padding: 0,
                        flexDirection: "column-reverse",
                        alignItems: "center",
                    }
                },
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    margin: "1rem",
                    '@media (max-width: 600px)': {
                        margin: "0 1rem",
                        paddingBottom: "0"
                    }
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(0,0,0,0.2)",
                    backdropFilter: "blur(3px)"
                }
            }
        }
    },
})


// transition for dialog
const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// cookie icon for MUI buttons
export const CookieIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="inline fill-white group-hover:fill-black transition duration-300 ease-in-out" width="24" height="24" viewBox="0 0 24 24"><path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.937.005-.034.016-.136.017-.17a.998.998 0 0 0-1.254-1.006A2.963 2.963 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1.004 1.004 0 0 0-.395-.776zM12 20c-4.411 0-8-3.589-8-8a7.962 7.962 0 0 1 6.006-7.75A5.006 5.006 0 0 0 15 9l.101-.001a5.007 5.007 0 0 0 4.837 4C19.444 16.941 16.073 20 12 20z" /><circle cx="12.5" cy="11.5" r="1.5" /><circle cx="8.5" cy="8.5" r="1.5" /><circle cx="7.5" cy="12.5" r="1.5" /><circle cx="15.5" cy="15.5" r="1.5" /><circle cx="10.5" cy="16.5" r="1.5" /></svg>)


// set functional, analytics and advertisement cookies
export const setCookies = (functionalChecked?: boolean, analyticChecked?: boolean, advertisementChecked?: boolean) => {
    // NOT USED COOKIE
    // if (functionalChecked) {
    //     setCookie("cookie-functional", "true")
    // } else {
    //     deleteCookie("cookie-functional")
    // };

    if (analyticChecked) {
        setCookie("cookie-analytics", "true")
    } else {
        deleteCookie("cookie-analytics")
    };

    if (advertisementChecked) {
        setCookie("cookie-advertisement", "true")
    } else {
        deleteCookie("cookie-advertisement")
    };
}

export default function CookieModal({ data }: { data: Modal }) {
    const open = useConsentStore(state => state.open) // open state for dialog modal

    const functionalRef = useRef<HTMLInputElement>(null)
    const analyticsRef = useRef<HTMLInputElement>(null)
    const advertisementRef = useRef<HTMLInputElement>(null)

    const functional = functionalRef?.current
    const analytic = analyticsRef?.current
    const advertisement = advertisementRef?.current

    // close modal
    const handleClose = () => {
        setOpen(false);
    };

    // get cookies and set input checked when modal open
    useEffect(() => {
        const functionalCookie = getCookie("cookie-functional")
        const analyticsCookie = getCookie("cookie-analytics")
        const advertisementCookie = getCookie("cookie-advertisement")

        if (!!functionalCookie && functional) functional.checked = !!functionalCookie
        if (!!analyticsCookie && analytic) analytic.checked = !!analyticsCookie
        if (!!advertisementCookie && advertisement) advertisement.checked = !!advertisementCookie

    }, [open, functional, analytic, advertisement])


    // set user cookie settings
    const handleAcceptSettings = useCallback(() => {
        const functionalChecked = functional?.checked
        const analyticChecked = analytic?.checked
        const advertisementChecked = advertisement?.checked

        setLocalStorage("consent", "partial")

        setCookies(functionalChecked, analyticChecked, advertisementChecked)

        setAdvertisement(`${advertisementChecked}` ?? "false")
        setAnalytic(`${analyticChecked}` ?? "false")

        setOpen(false)
        setShowBanner(false)
    }, [functional, analytic, advertisement])

    // accept all cookies
    const handleAcceptAll = useCallback(() => {
        setLocalStorage("consent", "granted")

        setCookies(true, true, true)

        setAdvertisement("true")
        setAnalytic("true")

        setOpen(false)
        setShowBanner(false)
    }, [])

    // deny all cookies
    const handleDeny = useCallback(() => {
        setLocalStorage("consent", "denied")

        setCookies()

        setAdvertisement("false")
        setAnalytic("false")

        if (functional?.checked) functional.checked = false
        if (analytic?.checked) analytic.checked = false
        if (advertisement?.checked) advertisement.checked = false

        setOpen(false)
        setShowBanner(false)
    }, [functional, analytic, advertisement])

    return (
        <>
            <ThemeProvider theme={theme}>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="cookie-preference-setting"
                >
                    <button onClick={handleClose} className="absolute top-4 right-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" width="35" height="35" viewBox="0 0 24 24">
                            <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z" />
                            <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z" />
                        </svg>
                    </button>
                    <h1 className="my-4 text-center text-4xl font-bold tracking-widest" id="cookie-preference-setting">{data?.title}</h1>
                    <DialogContent>
                        <form>
                            <fieldset>
                                <label className="cursor-pointer daisy_label mb-2 mt-4 font-bold">
                                    <span className="daisy_label-text text-white text-xl">{data?.requiredHead}</span>
                                    <input type="checkbox" className="daisy_checkbox daisy_checkbox-primary" checked disabled />
                                </label>
                                <p className="w-4/5 ml-1">{data?.requiredText}</p>
                            </fieldset>
                            {/* NOT USED COOKIE */}
                            {/* <fieldset>
                                <label className="cursor-pointer daisy_label mb-2 mt-4 font-bold">
                                    <span className="daisy_label-text text-white text-xl">{data?.functionalHead}</span>
                                    <input type="checkbox" className="daisy_checkbox daisy_checkbox-primary" ref={functionalRef} />
                                </label>
                                <p className="w-4/5 ml-1">{data?.functionalText}</p>
                            </fieldset> */}
                            <fieldset>
                                <label className="cursor-pointer daisy_label mb-2 mt-4 font-bold">
                                    <span className="daisy_label-text text-white text-xl">{data?.analyticsHead}</span>
                                    <input type="checkbox" className="daisy_checkbox daisy_checkbox-primary" ref={analyticsRef} />
                                </label>
                                <p className="w-4/5 ml-1">{data?.analyticsText}</p>
                            </fieldset>
                            <fieldset>
                                <label className="cursor-pointer daisy_label mb-2 mt-4 font-bold">
                                    <span className="daisy_label-text text-white text-xl">{data?.advertisementHead}</span>
                                    <input type="checkbox" className="daisy_checkbox daisy_checkbox-primary" ref={advertisementRef} />
                                </label>
                                <p className="w-4/5 ml-1">{data?.advertisementText}</p>
                            </fieldset>
                        </form>
                    </DialogContent>
                    <div className="p-4 flex flex-col lg:flex-row-reverse gap-4">
                        <button className="group daisy_btn border-black text-white box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" onClick={handleAcceptAll}>
                            {data?.acceptButton}
                            <CookieIcon />
                        </button>
                        <button className=" group daisy_btn border-black text-white box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" onClick={handleAcceptSettings}>
                            {data?.userSettingsButton}
                            <CookieIcon />
                        </button>
                        <button className=" group daisy_btn border-black text-white box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" onClick={handleDeny}>
                            {data?.denyButton}
                            <CookieIcon />
                        </button>
                    </div>
                </Dialog>
            </ThemeProvider>
        </>
    );
}