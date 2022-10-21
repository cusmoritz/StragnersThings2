import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {getAPIPosts} from './api'
import Posts from './components/Posts'
import Header from './components/Header'
import Login from './components/Login'

const App = () => {

    const [posts, setPosts] = useState([])
    const [seePosts, setSeePosts] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token, setToken] = useState('')

    useEffect(() => {
        getAPIPosts().then(result => setPosts(result))
    }, [])
    
  return (
  <div>
    <BrowserRouter>

        <Header setSeePosts={setSeePosts} posts={posts} seePosts={seePosts}/>

        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link> 
        <Link to="login">Login</Link>  

        <Routes>

            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setToken={setToken}/>} />

            {/* <Route exact path="/" element={<Header setSeePosts={setSeePosts} posts={posts} seePosts={seePosts}/>} /> */}

            <Route path="/posts" element={<Posts seePosts={seePosts} posts={posts} />} /> 
      {console.log(token)}
        </Routes>


        <Posts />

    </BrowserRouter>
    
  </div>
)};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);



// <nav>

//   <a href="/posts">posts</a>

// </nav>

// <main>

//   <div>On /posts page</div>

// </main>

{/* <nav>
  <a href="/posts">posts</a> <-- Links
  <a href="/profile">profile</a>
</nav>
<main>
  {urlpath === '/posts' ? <div>On /posts page</div> : null} <-- Route
  {urlpath === '/profile' ? <div>On /profile page</div> : null}
<main></main> */}