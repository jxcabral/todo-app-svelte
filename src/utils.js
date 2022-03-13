export const getTodosFromCache = () => {
    const list = localStorage.getItem('todos')

    if(!list) return []
    
    return JSON.parse(list)
}

export const isMobile = () => /Linux|iPad|iPhone/.test(navigator.userAgent)