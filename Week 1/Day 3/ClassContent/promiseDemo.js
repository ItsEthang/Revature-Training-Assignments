const getSomething = () => {
    return new Promise((resolve, reject) => {
        resolve("some data is returned here")
        reject("oh no it went wrong")
    })
}

getSomething()
.then((data) => console.log(data))
.catch((err) => console.log(err))