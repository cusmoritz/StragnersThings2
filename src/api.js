const BaseURL = 'https://strangers-things.herokuapp.com/api/2207-ftb-et-web-pt/'

export const createNewUser = async(username, password) => {
    try {
        let response = await fetch(`${BaseURL}/users/register`, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                username: username,
                password: password
            }
      })
        }).then(results => results.json())
    console.log("WE CREATED A NEW USER", response.data.token)
    // setToken(response.data.token)
    return response.data.token
    } catch (error) {
        alert(error)
    }

}

export const getLoginUser = async(username, password) => {
    try {
        let response = await fetch(`${BaseURL}/users/login`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: username,
                password: password
              }
            })
            }).then(result => result.json())
        console.log("THIS IS LOGGING IN ALREADY", response.data.token)
        // setToken(response.data.token)
        return response.data.token
    } catch (error) {
        console.log("DIDNT LOG IN RIGHT", error)
    }
}

export const getAPIPosts = async() => {
    try {
        const response = await fetch(`${BaseURL}posts`).then(results => results.json())
        console.log(response.data.posts)
        return (response.data.posts)
    } catch (error) {
        console.log(error)
    }
}
