import React from "react";

const Posts = ({seePosts, posts}) => {

    return (
        <>
        {(seePosts)
            ? ( 
                <div>
                      {posts.map((eachPost, index) => {
                          return (
                              <>
                                <h4 key={eachPost._id}>{eachPost.title}</h4>
                                    <p>{eachPost.price}</p>
                                    <p>{eachPost.description}</p>
                                    <p>{eachPost.location}</p>
                              </>
                          )
                      })}
                  
                </div>
            )
            : null}
        </>
            
    )
        
}

export default Posts