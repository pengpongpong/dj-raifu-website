import { create } from "zustand"

interface ConsentStore {
    advertisement: string;
    analytic: string;
    open: boolean;
    showBanner: boolean;
    setAdvertisement: (advertisement: string) => void,
    setAnalytic: (analytic: string) => void,
    setOpen: (open: boolean) => void,
    setShowBanner: (banner: boolean) => void,
}

export const useConsentStore = create<ConsentStore>((set) => ({
    advertisement: "false",
    analytic: "false",
    open: false,
    showBanner: false,
    setAdvertisement: ((advertisement) => set(() => ({ advertisement: advertisement }))),
    setAnalytic: ((analytic) => set(() => ({ analytic: analytic }))),
    setOpen: ((open) => set(() => ({ open: open }))),
    setShowBanner: ((banner) => set(() => ({ showBanner: banner }))),
}))

export const setOpen = (open: boolean) => {
    useConsentStore.getState().setOpen(open)
}

export const setAdvertisement = (advertisement: string) => {
    useConsentStore.getState().setAdvertisement(advertisement)
}

export const setAnalytic = (analytic: string) => {
    useConsentStore.getState().setAnalytic(analytic)
}

export const setShowBanner = (banner: boolean) => {
    useConsentStore.getState().setShowBanner(banner)
}