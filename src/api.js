const BaseURL = 'https://strangers-things.herokuapp.com/api/2207-ftb-et-web-pt/'

export const getAPIPosts = async() => {
    try {
        const response = await fetch(`${BaseURL}posts`).then(results => results.json())
        // console.log(response.data.posts)
        // console.log('these are the posts', response)
        return response.data.posts
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = async (token, postId) => {
    try {
        const response = await fetch(`${BaseURL}posts/${postId}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }).then(result => result.json())
          console.log('postId in API call', response)
          return response;
    } catch (error) {
        console.error('There was a problem deleting this post:', error)
    // } finally {
    //     alert('Message deleted')
    // }
    }
}

export const sendMessageAPI = async (messagePostId, messageContent, token) => {
    try {
        const message = {content: String(messageContent)}
        const response = await fetch(`${BaseURL}posts/${messagePostId}/messages`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              message
            })
          }).then(result => result.json())
          console.log('success sending message', response)
          return response
    } catch (error) {
        console.error('there was a problem sending the message:', error)
    }

}

export const editPostApi = async (token, editPostId, editedPost) => {
    try{
        const result = fetch(`${BaseURL}posts/${editPostId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
            post: {
            title: `${editedPost.title}`,
            description: `${editedPost.description}`,
            price: `${editedPost.price}`,
            location: `${editedPost.location}`,
            willDeliver: `${editedPost.delivery}`
        }
      })
    }).then(response => response.json())
    return result
    } catch {

    }
    

}

export const getGuestData = async (token) => {

    try {
    const response = await fetch(`${BaseURL}users/me`, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
}).then(result => result.json())

// console.log('this is my info in api', response.data)

return response
    } catch (error) {
        console.error('there was a problem getting your posts.', error)
    }
}

export const makeNewPost = async(token, title, description, price, location, delivery) => {
    const response = await fetch(`${BaseURL}/posts`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    post: {
      title: title,
      description: description,
      price: price,
      location: location,
      willDeliver: delivery
    }
  })
}).then(response => response.json())

console.log('this is the new post in api calls', response)

  return response

}

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
        console.log("THIS IS LOGGING IN", response.data.token)

        return response.data.token
    } catch (error) {
        alert("DIDNT LOG IN RIGHT", error)
    }
}
