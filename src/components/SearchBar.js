import React, { useState } from "react";
import { Link } from "react-router-dom";


const SearchBar = ({posts, search, setSearch}) => {

    // console.log('all posts in search bar', posts)

    // const [search, setSearch] = useState('')
    // const [searchResults, setSearchResults] = useState([])

    // const PostSearch = ({search, posts}) => {
        
    //     posts.map((eachPost) => {
    //         if(eachPost.title.includes(search)) {
    //             return (
    //                 <div className="search-result-div" />
    //             )

    //         } if (eachPost.location.includes(search)) {
    //             console.log('location matches', eachPost.location)
    //             return (
    //                 <p>{eachPost.location}</p>
    //             )
    //         }
            
    //     })
    // }

    // const SearchResultsComp = () => {

    // }

    return (

        <div className="search-bar" >
            <input type="text"
                autoFocus
                placeholder="Search for posts here"
                onChange={((event) => {
                    setSearch(event.target.value.toLowerCase())
                })}
            />

        {!search ? (
            null
        ) : (

            <div className="search-container">
                {posts.map((eachPost) => {
                    if(eachPost.title.toLowerCase().includes(search)) {
                        return (
                            <div className="search-result">
                                <p><b>Matches title in:</b>
                                <Link to={`/posts/details/${eachPost._id}`}>{eachPost.title}</Link>
                                </p>
                            </div>
                        )
        
                    } if (eachPost.location.toLowerCase().includes(search)) {
                        // console.log('location matches', eachPost.location)
                        return (
                            <div className="search-result">
                                <p><b>Matches location in: </b> 
                                <Link to={`/posts/details/${eachPost._id}`}>{eachPost.location}</Link></p>
                            </div>
                        )
                    } if (eachPost.description.toLowerCase().includes(search)) {
                        // console.log('description matches', eachPost.description)
                        return (
                            <div className="search-result">
                                <p> <b>Matches description in:</b>  <Link to={`/posts/details/${eachPost._id}`}>{eachPost.description}</Link> </p>
                            </div>
                        )

                    }
                }
                ) //eachPost mapping
            } 
            </div> // yes search div
        ) // yes search closing
        }
        </div> // return div
    ) // return
}

export default SearchBar