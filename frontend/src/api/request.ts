export const get = async (url: string) => {
    const response = await fetchRequest('GET', url)
    return response
}

export const fetchRequest = async (method: string, url: string) => {
    const response = await fetch(url, {
        method
    })
    // Added success true or false based on API response
    if (response) {
        return { data: await response.json(), success: true }
    } else {
        return { data: null, success: false }
    }
}
