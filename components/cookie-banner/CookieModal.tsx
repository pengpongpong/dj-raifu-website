"use client"
import React, { ReactElement, Ref, forwardRef, useEffect, useRef } from 'react';
import Image from "next/image";

import { TransitionProps } from '@mui/material/transitions';
import { Button, ThemeProvider, createTheme, Slide, DialogContent, DialogActions, Dialog } from "@mui/material";

import { deleteCookie, getCookie, setCookie } from "cookies-next";

import cookieIcon from "/public/icons/bx-cookie.svg"
import closeIcon from "/public/icons/bx-x-circle.svg"
import { useConsentStore } from "@/utils/store/store";

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
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    width: "auto",
                    '@media (max-width: 600px)': {
                        width: "100%",
                        padding: ".6rem 0"
                    }
                }
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
    }
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
const CookieImage = () => (<Image src={cookieIcon} alt="" />)

export default function CookieModal() {
    const open = useConsentStore(state => state.open) // open state for dialog modal

    const setOpen = (open: boolean) => {
        useConsentStore.getState().setOpen(open)
    }

    // close modal
    const handleClose = () => {
        setOpen(false);
    };

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
                        <Image className="stroke-white border border-white" src={closeIcon} width={35} height={35} alt="" />
                    </button>
                    <h1 className="my-4 text-center text-4xl font-bold tracking-widest" id="cookie-preference-setting">Preference</h1>
                    <DialogContent>
                        <form>
                            <fieldset>
                                <label className="cursor-pointer daisy_label mb-2 mt-4 font-bold">
                                    <span className="daisy_label-text text-xl">Required cookies</span>
                                    <input type="checkbox" className="daisy_checkbox daisy_checkbox-primary" checked disabled />
                                </label>
                                <p className="w-4/5 ml-1">Required cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
                            </fieldset>
                            <fieldset>
                                <label className="cursor-pointer daisy_label mb-2 mt-4 font-bold">
                                    <span className="daisy_label-text text-xl">Functional cookies</span>
                                    <input type="checkbox" className="daisy_checkbox daisy_checkbox-primary" />
                                </label>
                                <p className="w-4/5 ml-1">Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language.</p>
                            </fieldset>
                            <fieldset>
                                <label className="cursor-pointer daisy_label mb-2 mt-4 font-bold">
                                    <span className="label-text text-xl">Analytics cookies cookies</span>
                                    <input type="checkbox" className="daisy_checkbox daisy_checkbox-primary" />
                                </label>
                                <p className="w-4/5 ml-1">Analytics cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.</p>
                            </fieldset>
                        </form>
                    </DialogContent>
                    <DialogActions disableSpacing>
                        <Button variant="contained" className="bg-secondary text-neutral" endIcon={<CookieImage />} >Deny All</Button>
                        <Button variant="contained" className="bg-secondary text-neutral" endIcon={<CookieImage />}>Save Settings</Button>
                        <Button variant="contained" className="bg-accent text-neutral" endIcon={<CookieImage />} >Accept All</Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </>

    );
}