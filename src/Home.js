import { useState, useEffect } from "react";
import React from "react";
import BlogList from "./BlogList";
import usefetch from "./usefetch";


const Home = () => {
    const {data:blogs, isPending,error}=usefetch('  http://localhost:8001/blogs');
   
    
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> Loading...</div>}
              {blogs && < BlogList blogs={blogs} title="All Blogs!" />}
              
              
    
       </div>
      
     );
}
 
export default Home;