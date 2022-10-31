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
import SearchBar from './components/SearchBar';
 

const App = () => {

    const [posts, setPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(window.localStorage.getItem("token"||""));
    const [search, setSearch] = useState("")
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

    // this is our logout button
    const LogOut = ({setToken}) => {
      return (
        <button onClick={() => {setToken("")} }><a>Log out</a></button> 
      )
    }

    // this useEffect sets the items state every time our token value changes
    useEffect(() => {
      window.localStorage.setItem("token", token) // key value pair
      console.log('token in index useEffect', token)
    }, [token]);
    
  return (
  <div>
    <BrowserRouter>
    
    <h1><Link to="/">Stranger's Things</Link></h1>
      <nav>
        {token ? <button><Link to="/">Home</Link></button> : null}
      
      <button><Link to="/posts">See all posts</Link> </button>
      <div className='login-links'>

      {/* this ternary handles our logout function */}
        {token    
        ? <LogOut setToken={setToken} />
        :      
        <>
          <button><Link to="account/sign-up">Sign Up / Log in</Link></button>
        </> }
      </div>

      </nav>
      <div className='search-bar-container'>
        <SearchBar posts={posts} search={search} setSearch={setSearch}/>
      </div>
      <Routes>

        <Route exact path="/" element={<Home posts={posts} token={token}/>} />

        <Route path="/account/:switcher" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setToken={setToken}/>} />

        <Route path="/posts" element={<Posts posts={posts} token={token}/>} /> 

        <Route path="/posts/:postSwitch" element={<Posts posts={posts} token={token} />} />

        <Route path="/posts/new" element={<NewPostForm token={token} setPosts={setPosts}/>} />
        
        <Route path="/posts/edit/:editSwitch" element={<EditPost token={token} setPosts={setPosts} posts={posts}/>} />
        {/* when we go to the above Route Path, this is the element we want to load, with it's minutae */}

        <Route path="/posts/details/:detailsSwitch" element={<DetailsPage token={token} setPosts={setPosts} posts={posts} search={search} setSearch={setSearch}/>} />

      </Routes>

    </BrowserRouter>
    
  </div>
)};

// this loads the <App /> into the 'app' div
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);