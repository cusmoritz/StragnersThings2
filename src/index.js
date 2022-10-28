import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import {getAPIPosts} from './api'
import Posts from './components/Posts'
import Home from './components/Header'
import Login from './components/Login'
import NewPostForm from './components/NewPost';
import EditPost from './components/EditPost';
import DetailsPage from './components/DetailsPage';

const App = () => {

    const [posts, setPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(window.localStorage.getItem("token"||""));
    // const history = useNavigate();

    // this useEffect calls for all our API posts
    useEffect(() => {
      try {
        getAPIPosts(token).then(result => setPosts(result))
      } catch (error) {
        alert("error fetching posts", error)
        console.log("error fetching posts", error)
      }
    }, []);


    // this useEffect sets the items state every time our token value changes
    useEffect(() => {
      window.localStorage.setItem("token", token) // key value pair
      console.log('token in index useEffect', token)
    }, [token]);
    
  return (
  <div>
    <BrowserRouter>
    
    <h1>Stranger's Things</h1>
      <nav>
        {token ? <button><Link to="/">Home</Link></button> : null}
      
      <button><Link to="/posts">See all posts</Link> </button>
      <div className='login-links'>

      {/* this ternary handles our logout function */}
        {token    
        ? <button onClick={() => {setToken("")}} className='logout'>Log out</button> 
        :      
        <>
          <Link to="account/sign-up">Sign Up / Log in</Link>
        </> }
      </div>

      </nav>

      <Routes>

        <Route exact path="/" element={<Home posts={posts} token={token}/>} />

        <Route path="/account/:switcher" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setToken={setToken}/>} />

        <Route path="/posts" element={<Posts posts={posts} token={token}/>} /> 

        <Route path="/posts/:postSwitch" element={<Posts posts={posts} token={token} />} />

        <Route path="/posts/new" element={<NewPostForm token={token} setPosts={setPosts}/>} />
        
        <Route path="/posts/edit/:editSwitch" element={<EditPost token={token} setPosts={setPosts} posts={posts}/>} />
        {/* when we go to the above Route Path, this is the element we want to load, with it's minutae */}

        <Route path="/posts/details/:detailsSwitch" element={<DetailsPage token={token} setPosts={setPosts} posts={posts} />} />

      </Routes>

    </BrowserRouter>
    
  </div>
)};

// this loads the <App /> into the 'app' div
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



// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU0MjY5YWUzMzFhZTAwMTc4ZTdiYzkiLCJ1c2VybmFtZSI6Imphcm9uIiwiaWF0IjoxNjY2OTkyOTg1fQ.cHdwqY4bGopyf5P-IK9I7Q21z5mla2mCmWpA4lilQJk

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzUxZjkzNzhhMWEwZjAwMTdhOGJiNGIiLCJ1c2VybmFtZSI6Im1hcmN1cyIsImlhdCI6MTY2Njk5MzE2OH0.8960vhw4QqRPa2rjVv5wu5nbxLr9Rmb2yGmg9jfsnHU