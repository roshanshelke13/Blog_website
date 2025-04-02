import React from 'react'
import { NavLink } from 'react-router-dom';


const Blog = ({data}) => {
    

  return (
    <div className='flex flex-col mt-[-25px] mb-5' >
        <div className='flex flex-col '>
            <NavLink to={`/blog/${data.id}`} className='font-bold text-2xl hover:underline cursor-pointer'>{data.title}</NavLink>
            <p className='my-1 flex gap-1'>By <span className='italic'>{data.author}</span> on  
            <NavLink to={`/categories/${data.category.trim().replace(/ /g, "-")}`}><span 
            className='font-bold underline cursor-pointer'>{data.category}</span></NavLink>
            </p>
            <p>Posted on {data.date}</p>
        </div>

        <div className='my-4'>
            <span>{data.content}</span>
        </div>

        <div className='flex gap-3 text-blue-600 font-bold mb-10 underline cursor-pointer'>
            {
                data.tags.map((tag,index) => {
                    return <div key={index} > <NavLink to={`/tags/${decodeURIComponent(tag).trim().replace(/ /g, "-")}`}><span> #{tag} </span></NavLink> </div>
                })
            }
        </div>
    </div>
  )
}

export default Blog;

