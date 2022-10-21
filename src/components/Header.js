import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Posts from './Posts';

const Header = ({setSeePosts}) => {

    return (
        <>
            <h1>Stranger's Things</h1>
            <button onClick={() => {
                setSeePosts(true)
                
                // console.log('clicking')
            }}>
                See Posts</button>
        </>

    )
}

export default Header