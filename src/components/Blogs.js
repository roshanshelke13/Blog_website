import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Blog from './Blog';

const Blogs = () => {

  const {posts,loading,fetchBlogdata} = useContext(AppContext);

  return (
    <div className='mt-[130px] mb-[100px] w-5/12'>
        {
            loading ? (<Spinner/>) : (
                posts.length === 0 ? 
                (
                    <div>
                        <p>No Post Found</p>
                    </div>    
                ) :
                (
                    posts.map((post) => (
                        <Blog data={post} key={post.id} fetchBlogdata={fetchBlogdata}/>
                    ))
                )
            )
        }
    </div>
  )
}

export default Blogs