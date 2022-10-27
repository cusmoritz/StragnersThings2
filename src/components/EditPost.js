import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';


const EditPost = ({token, setPosts, posts}) => {

    console.log(posts);

    const [editingItem, setEditingItem] = useState('');

    const postSwitch = useParams();

    const postId = postSwitch.editSwitch;
    console.log('post id from url', postId)

    const oneThing = posts.find((post) => post._id == postId)

    console.log('one thing here', oneThing)



    // console.log(typeof(posts.forEach(posts._id)))


    // setEditingItem(posts.find((post) => post._id == postId))
    // console.log(postFromURL)

    // console.log('post from url', postFromURL)

    // const result = words.filter(word => word.length > 6);

    // console.log(editingItem)

    // call for the original postId in API to fill fields with old information
        // populate the page with the postId location, title, cost, et cetera
        // let them edit the page
        // handle PATCH /api/COHORT-NAME/posts/POST_ID
            // this should update the post array...?
            //might need to filter setPosts with postId and update it...?
    // useHistory to push them back to the users/me page

    return (
        <>
        {oneThing.location}
        </>
    )
}

export default EditPost