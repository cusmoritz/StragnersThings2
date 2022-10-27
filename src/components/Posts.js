import React from "react";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";

const Posts = ({posts, token}) => {

    const NewPost = ({token}) => {
        {if (token) {
            return (
                <div className="create-post-button">
                    <Link to="/posts/new" token={token}>Create new post</Link>
                </div>
            )
        }}
    }

    return (
            <div>
                <NewPost token={token}/>
                {posts.map((eachPost, index) => {
                    return (
                        <div className="outer-post">
                        <PostItem key={index} eachPost={eachPost} token={token}/>
                        </div>
                    )
                })}
            </div>
    )   
}

export default Posts