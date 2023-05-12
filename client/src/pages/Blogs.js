import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
    // Blog states
    const [blogs, setBlogs] = useState([]);
    // Get Blogs
    const getAllBlog = async () => {
        try {
            const { data } = await axios.get(`/api/v1/blog/all-blog`);
            if (data.success) {
                setBlogs(data.blogs);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // getting data using useEffect
    useEffect(() => {
      getAllBlog()
    },[])

    return(
      <>
        <div>
          <BlogCard/>
        </div>
      </>
    )
};

export default Blogs;
