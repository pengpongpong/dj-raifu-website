import { create } from "zustand"

interface ConsentStore {
    consent: boolean;
    functional: boolean;
    analytic: boolean;
    open: boolean;
    showBanner: boolean;
    setConsent: (consent: boolean) => void,
    setFunctional: (functional: boolean) => void,
    setAnalytic: (analytic: boolean) => void,
    setOpen: (open: boolean) => void,
    setShowBanner: (banner: boolean) => void,
}

export const useConsentStore = create<ConsentStore>((set) => ({
    consent: false,
    functional: false,
    analytic: false,
    open: false,
    showBanner: false,
    setConsent: ((consent) => set(() => ({ consent: consent }))),
    setFunctional: ((functional) => set(() => ({ functional: functional }))),
    setAnalytic: ((analytic) => set(() => ({ analytic: analytic }))),
    setOpen: ((open) => set(() => ({ open: open }))),
    setShowBanner: ((banner) => set(() => ({ showBanner: banner }))),
}))

export const setOpen = (open: boolean) => {
    useConsentStore.getState().setOpen(open)
}

export const setConsent = (consent: boolean) => {
    useConsentStore.getState().setConsent(consent)
}

export const setFunctional = (functional: boolean) => {
    useConsentStore.getState().setFunctional(functional)
}

export const setAnalytic = (analytic: boolean) => {
    useConsentStore.getState().setAnalytic(analytic)
}

export const setShowBanner = (banner: boolean) => {
    useConsentStore.getState().setShowBanner(banner)
}