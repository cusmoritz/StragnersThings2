import React, { useState } from "react";
import { getGuestData, deletePost } from '../api';
import EditPost from "./EditPost";
import { Link, useParams, useNavigate } from "react-router-dom";


const UserPosts = ({eachPost, token, setPostArray, postArray}) => {

    const itemLink = useParams();

    // const [editingId, setEditingId] = useState('')

    const handleDelete = async() => {
        console.log(token, eachPost._id)
        await deletePost(token, eachPost._id)
        setPostArray((posts) =>  posts.filter((deletedPost) => deletedPost._id !== eachPost._id))
    }

    const handleViewMessages = async() => {
        // nothing for now
    }

    const handleEdit = (target) => {
        console.log('post.id', eachPost._id)
        return (
            <>
            <button>
                <Link to="/posts/edit" > Word here </Link>
            </button>

            </>
        )
    }

    return (
        <div className="user-container" key={eachPost._id}>
            <h4 className="user-post-title">Title: {eachPost.title}</h4>
            <p className="user-post-location">Location: {eachPost.location}</p>
            <p className="user-post-price">Price: {eachPost.price}</p>
            <p className="user-post-description">Description: {eachPost.description}</p>

            <button 
                className="user-delete-button" 
                onClick={() => {
                handleDelete(token, eachPost._id)
                    }
                } >
                    <a>Delete post</a>
            </button>

            {/* <button className="user-delete-button">Edit post</button>
            <EditPost eachPost={eachPost} token={token} /> */}

            <button>
            <Link to={`/posts/edit/${eachPost._id}`} > Edit post </Link>
            </button>

            {/* uncomment the above later for editing feature */}

            <button className="user-details-button">
                <Link to={`/posts/details/${eachPost._id}`} > View post details </Link>
            </button>

        </div>
    )
}

export default UserPosts