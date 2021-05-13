const url = "https://api.nytimes.com/svc/books/v3"
const api_key = "wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j"

function getBookCategories() {
    return fetch(`${url}/lists/names.json?api-key=${api_key}`)
        .then(res => res.json())
        .then(res => res.results)
}

function getBooks(category) {
    return fetch(`${url}/lists/current/${category}?api-key=${api_key}`)
        .then(res => res.json())
        .then(res => res.results)
}

export default {
    getBookCategories,
    getBooks,
}