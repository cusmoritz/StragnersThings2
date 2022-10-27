import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';


const EditPost = ({token, setPosts, posts}) => {

    console.log(posts);

    // const [editingItem, setEditingItem] = useState('');

    const postSwitch = useParams();

    const postId = postSwitch.editSwitch;
    console.log('post id from url', postId)

    const editingPost = posts.find((post) => post._id == postId)


    // call for the original postId in API to fill fields with old information
        // populate the page with the postId location, title, cost, et cetera
        // let them edit the page
        // handle PATCH /api/COHORT-NAME/posts/POST_ID
            // this should update the post array...?
            //might need to filter setPosts with postId and update it...?
    // useHistory to push them back to the users/me page

    return (
        <div className="details-page-container">
            <h3 className="details-header">{editingPost.title}</h3>
            <h6 className="details-location">{editingPost.location}</h6>
            <p className="details-description">{editingPost.description}</p>
            <p className="details-price">{editingPost.price}</p>
            {/* <p className="details-delivery">Delivery: {editingPost.willDeliver}</p> */}
            {!editingPost.messages ? 
            <p>No messages for this post.</p>
            : editingPost.messages.map((eachMessage) => {
                console.log('this post has a message')
                return (
                    <>
                    <p><span className="message-user">From user: </span>{eachMessage.fromUser}</p> 
                    <p><span className="message-content">Message: </span>{eachMessage.content}</p> 
                    </>
                )
            })}
        </div>
    )
}

export default EditPost