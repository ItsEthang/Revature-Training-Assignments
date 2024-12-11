const url = "https://jsonplaceholder.typicode.com/users"


const getAuthors = async () => {
    const response = await fetch(url)
    const authors = await response.json()
    return authors
}

const handleClick = () => {
    getAuthors().then((authors) => {
        authors.map((author) => {
            const lineBreak = document.createElement('hr')
            const authorName = document.createElement('h2')
            authorName.innerText = author.name
            const authorEmail = document.createElement('p')
            authorEmail.innerText = `Email: ${author.email}`
            const authorSite = document.createElement('a')
            authorSite.innerText = `Website: ${author.website}`
            authorSite.setAttribute('href', author.website)
            document.body.appendChild(authorName)
            document.body.appendChild(authorEmail)
            document.body.appendChild(authorSite)
            document.body.appendChild(lineBreak)
        })   
    })
}


