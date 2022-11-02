import React, { useState } from "react";
import { useParams, useNavigate, Link, useNavigation } from 'react-router-dom';
import { editPostApi } from "../api";


const EditPost = ({token, setPosts, posts}) => {

// console.log('token in edit', token)


    // const [editingItem, setEditingItem] = useState('');

    const history=useNavigation();

    const postSwitch = useParams();

    const postId = postSwitch.editSwitch;
    // console.log('post id from url', postId)

    const editingPost = posts.find((post) => post._id == postId)
    console.log('this should be the post object', editingPost)

    const handleEdit = async(token, postId, title, location, description, price) => {
        const results = await editPostApi(token, postId, title, location, description, price)
        console.log('this is our edited info', results)
    }

    // console.log('editing this post', editingPost.title)

    // console.log('this is the title', editingPost.title)

    const [title, setTitle] = useState(editingPost.title)
    const [location, setLocation] = useState(editingPost.location)
    const [description, setDescription] = useState(editingPost.description)
    const [price, setPrice] = useState(editingPost.price)

    // console.log('this is state title', title)

    // call for the original postId in API to fill fields with old information
        // populate the page with the postId location, title, cost, et cetera
        // let them edit the page
        // handle PATCH /api/COHORT-NAME/posts/POST_ID
            // this should update the post array...?
            //might need to filter setPosts with postId and update it...?
    // useHistory to push them back to the users/me page

//     return (
// <>
//         <h2>EDITING FUNCTION UNDER CONSTRUCTION, COME BACK SOON</h2>
//         <img src="https://media.tenor.com/eAQ9ONalEiAAAAAC/waze-construction.gif" />
// </>
        
        
return (
<>
<form className="details-page-container" onSubmit={(event) => (event.preventDefault(), handleEdit(token, postId, title, location, description, price)).then(history("/"))}>
<h2 className="details-header"> Make changes to your post below, then hit submit to log your changes.</h2>
            {/* <p className="details-delivery">Delivery: {editingPost.willDeliver}</p> */}
            
            <label htmlFor="new-title"> New title: 
                <textarea value={title}
                            onChange={(event) => {
                                setTitle(event.target.value)
                                console.log('new title = ', title)
                            }} > {title} </textarea>
            </label>

            <br></br>

            <label htmlFor="new-location"> New location: 
                <textarea value={location} 
                onChange={(event) => {
                setLocation(event.target.value)
                console.log('new location = ', location)
            }}>  </textarea>
            </label>

            <br></br>

            <label htmlFor="new-description" > New description: 
                <textarea value={description} onChange={(event) => {
                setDescription(event.target.value)
                console.log('new description = ', description)
            }}> </textarea>
            </label>

            <br></br>

            <label htmlFor="new-price" > New price: 
                <textarea value={price} 
                onChange={(event) => {
                setPrice(event.target.value)
            }}></textarea>
            </label>          
            
            <br></br>

            <button type="submit" ><a>SUBMIT CHANGES</a></button>

            {/* <Link to="/" > Submit changes </Link> */}


            {/* {!editingPost.messages ? 
            <p>No messages for this post.</p>
            : editingPost.messages.map((eachMessage) => {
                console.log('this post has a message')
                return (
                    <>
                    <p><span className="message-user">From user: </span>{eachMessage.fromUser}</p> 
                    <p><span className="message-content">Message: </span>{eachMessage.content}</p> 
                    </>
                )
            })} */}

</form>
</>
)

    
}

export default EditPost