import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Posts from './Posts';
import { getGuestData } from '../api';
import UserPosts from './UserPosts';
import PostItem from "./PostItem";

const Home = ({posts, token}) => {

    const [postArray, setPostArray] = useState([])

    const getMyPosts = async () => {
        const results = await getGuestData(token)
        console.log('results in Header.js', results)
        let activeResults = results.data.posts.filter((eachResult) => eachResult.active === true)
        // console.log('active results', activeResults)
        setPostArray(activeResults);
        
        // console.log('using the GET function', results);
        // console.log('actually?', postArray)
        return postArray
    }

    console.log('this is the state in header.js', postArray)

    useEffect(() => {
        try {
          getMyPosts();
        } catch (error) {
          alert("error fetching posts", error)
          console.log("error fetching posts", error)
        }
      }, []);

    return (
        <>
            {postArray.map((eachPost, index) => {
                console.log(eachPost)
                return (
                    <div className='user-post-container' key={index}>
                        <UserPosts token={token} eachPost={eachPost} setPostArray={setPostArray}/>
                    </div>
                )
            })}
        </>
    )
}

export default Home