import React, { useState } from "react";


const SearchBar = ({posts}) => {

    // console.log('all posts in search bar', posts)

    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const PostSearch = ({search, posts}) => {
        
        posts.map((eachPost) => {
            if(eachPost.title.includes(search)) {
                return (
                    <div className="search-result-div" />
                )

            } if (eachPost.location.includes(search)) {
                console.log('location matches', eachPost.location)
                return (
                    <p>{eachPost.location}</p>
                )
            }
            
        })
    }

    const SearchResultsComp = () => {

    }

    return (
        <div className="" >
            <input type="text"
                placeholder="Search for posts here"
                onChange={((event) => {
                    setSearch(event.target.value.toLowerCase())
                })}
            />
            {/* <PostSearch search={search} posts={posts}/> */}

        {!search ? (
            null
        ) : (
            posts.map((eachPost) => {
                if(eachPost.title.toLowerCase().includes(search)) {
                    return (
                        <div className="search-result">
                            <p><b>Matches title in:</b> {eachPost.title}</p>
                        </div>
                    )
    
                } if (eachPost.location.toLowerCase().includes(search)) {
                    console.log('location matches', eachPost.location)
                    return (
                        <p className="search-result"><b>Matches location in:</b> {eachPost.location}</p>
                    )
                } if (eachPost.description.toLowerCase().includes(search)) {
                    console.log('description matches', eachPost.description)
                    return (
                        <p className="search-result"><b>Matches description in:</b> {eachPost.description}</p>
                    )
                } 
                // else {
                //     return (
                //         <p className="search-result">No posts match this search.</p>
                //     )
                // }
            }
            ))}       
        </div>
    )
}

export default SearchBar