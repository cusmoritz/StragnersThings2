import React, { useState } from "react";
import { makeNewPost } from "../api";
import { useNavigate } from "react-router-dom";


const NewPostForm = ({token, setPosts}) => {

    const history = useNavigate();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [delivery, setDelivery] = useState(false)

    const newPostSubmit = async (token, title, description, price, location, delivery) => {

        makeNewPost(token, title, description, price, location, delivery);
        console.log('token', token)
        history("/posts") // return to the /posts page
    }
        

    return (
        <form className="new-post-form" 
        onSubmit={(event) => {
            event.preventDefault();
            newPostSubmit(token, title, description, price, location, delivery);
            }}
        >
            <label htmlFor="new-post-title" required >Post title</label>
            <input className="new-post-title" 
                type="text" 
                value={title} 
                required
                onChange={((event) => {
                    setTitle(event.target.value)
                })}/>

            <label htmlFor="new-post-description" >Description</label>
            <textarea className="new-post-description" 
                required 
                value={description} 
                palceholder="description"
                onChange={((event) => {
                    setDescription(event.target.value)
                })}/>

            <label htmlFor="new-post-price">Price</label>
            <input className="new-post-price" 
            required 
            value={price}
            onChange={((event) => {
                setPrice(event.target.value)
            })}
            />

            <label htmlFor="new-post-location">Location</label>
            <input className="new-post-location" 
            required 
            value={location}
            onChange={((event => {
                setLocation(event.target.value)
            }))}
            />

            <label htmlFor="new-post-delivery">Will you deliver?</label>
            <input type="radio" 
            required 
            value={delivery}
            onChange={((event) => {
                setDelivery(true)
            })}
            />

            <button type="submit">Create new post</button>
        </form>
    )
}

export default NewPostForm