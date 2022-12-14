import React, { useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom';

const DetailsPage = ({token, setPosts, posts, search, setSearch}) => {

    const detailsSwitch = useParams();
    // console.log(detailsSwitch)
    const nabPostId = detailsSwitch.detailsSwitch
    console.log('nab post id', nabPostId);
    console.log('posts here', posts);
    const detailsPost = posts.find((eachPost) => eachPost._id == nabPostId);
    console.log('details post', detailsPost);
    setSearch("");

    return (
        <div className="details-page-container">
            <h3 className="details-header"><span>Title: </span>{detailsPost.title}</h3>
            <h6 className="details-location"><span>Location: </span>{detailsPost.location}</h6>
            <p className="details-description"><span>Description: </span>{detailsPost.description}</p>
            <p className="details-price"><span>Price: </span>{detailsPost.price}</p>
            {/* <p className="details-delivery">Delivery: {detailsPost.willDeliver}</p> */}



            {token && detailsPost.messages ? 
                detailsPost.messages.map((eachMessage) => {
                    console.log('this post has a message')
                    return (
                        <div className="message-container">
                        <h5 className="">Message:</h5>
                        <p><span className="message-content">Message: </span>{eachMessage.content}</p> 
                        <p><span className="message-user">From user: </span>{eachMessage.fromUser.username}</p> 
                        </div>
                    )
                })
            : (
                // {token) (
            <p>No messages about this post.</p>
                // )}
            )
            }
        </div>
    )
}

export default DetailsPage