export function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage)
    }

    return v
}

export function setLocalStorage(item: string, value: string) {
    if(!window) return console.error("no window defined")

    return localStorage.setItem(item, value)
}

export function getLocalStorage(item: string) {
    if (!window) return console.error("no window defined")

    return localStorage.getItem(item)
}