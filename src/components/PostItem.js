import React, {useState} from "react";
import { Link } from "react-router-dom";
import { sendMessageAPI } from "../api";

const PostItem = ({eachPost, index, token}) => {
    // console.log('each post', eachPost)

    // console.log('token top level', token)

    const [userMessage, setUserMessage] = useState('')
    const [createMessageState, setCreateMessageState] = useState(false)

    const sendPosterMessage = (messagePostId, message, token) => {
        console.log('message', message)
        console.log('this is the post id', messagePostId)
        console.log('this is token in postItem', token)
        sendMessageAPI(messagePostId, message, token)
    }

    // const DeletePost = (eachPost) => {

        // const deleteHandler = () => {

        // }

    //     if (eachPost) {
    //         return (
    //             <>
    //             <button className="delete-button"
    //             onClick={() => console.log('make it delete', eachPost)}
    //             >Delete post</button>
    //             </>
    //         )
    //     }
    // }

    return (

        <div className="post-card">
            <h4 key={index} className="post-title">{eachPost.title}</h4>
                <p className=""><span>Price: </span>{eachPost.price}</p>
                <p><span>Description: </span>{eachPost.description}</p>
                <p><span>Location: </span>{eachPost.location}</p>
                    {token ? (
                    createMessageState === false ? 
                        (
                            <button onClick={() => {setCreateMessageState(true), console.log(eachPost)} }>
                                <a>Send message</a>
                            </button>
                        ) : (
                            <form onSubmit={(event) => {event.preventDefault()}}>
                                <label htmlFor="user-message">
                                    <input  
                                        className="user-message" 
                                        placeholder="Type your message here" 
                                        value={userMessage} 
                                        onChange={(event) => {setUserMessage(event.target.value)}} />
                                    <button type="button" onClick={() => {
                                        sendPosterMessage(eachPost._id, userMessage, token), 
                                        alert(`"${userMessage}" sent to ${eachPost.author.username}`),
                                        setCreateMessageState(false)
                                        setUserMessage("")}}>
                                        Send message
                                    </button>
                                </label>
                            </form>
                        )) : null }
        </div>
    )
}

export default PostItem