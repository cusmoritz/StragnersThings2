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
                    setSearch(event.target.value)
                })}
            />
            <PostSearch search={search} posts={posts}/>
            {posts.map((eachPost) => {
            if(eachPost.title.includes(search)) {
                return (
                    <p><b>Matches title in:</b> {eachPost.title}</p>
                )

            } if (eachPost.location.includes(search)) {
                console.log('location matches', eachPost.location)
                return (
                    <p><b>Matches location in:</b> {eachPost.location}</p>
                )
            } if (eachPost.location.includes(search)) {
                console.log('location matches', eachPost.description)
                return (
                    <p><b>Matches description in:</b> {eachPost.description}</p>
                )
            }
            
        })}
        </div>
    )
}

export default SearchBar