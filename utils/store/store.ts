import { create } from "zustand"

interface ConsentStore {
    consent: boolean;
    analytic: boolean;
    open: boolean;
    setConsent: (consent: boolean) => void,
    setAnalytic: (analytic: boolean) => void,
    setOpen: (open: boolean) => void,
}

export const useConsentStore = create<ConsentStore>((set) => ({
    consent: false,
    analytic: false,
    open: false,
    setConsent: ((consent) => set(() => ({ consent: consent }))),
    setAnalytic: ((analytic) => set(() => ({ analytic: analytic }))),
    setOpen: ((open) => set(() => ({ open: open }))),
}))