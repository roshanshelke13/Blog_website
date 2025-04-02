import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import Blog from '../components/Blog';

const RelatedBlog = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    const [blog,setBlog] =useState(null);
    const[relatedBlogs,setRelatedBlogs] = useState([]);
    const location =useLocation();
    const navigate=useNavigate();

    const {setLoading,loading} =useContext(AppContext);
    const segments = location.pathname.split('/');
    const blogId = segments.at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);

        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

        try{
            const res=await fetch(url);
            const data =await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("error ji");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect (() => {
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])

  return (
    <div className='w-screen flex flex-col items-center justify-center'>
        <Header/>

        <div className='mt-20 gap-6 flex mb-[-60px] text-xl items-center'>
            <button onClick={() => navigate(-1)} className='border py-2 px-4 bg-gray-300 rounded-xl' >
                Back
            </button>
        </div>

        <div className='mt-[130px] mb-[100px] w-5/12'>
        {
            loading ? 
            (<div>
                <p>loading</p>
            </div>) :
            blog ?
            (<div>
                <Blog data={blog}></Blog> 
                <h2 className='uppercase mt-[-20px] mb-[50px] text-[40px] text-center text-rose-950 font-bold '>Related Blogs</h2>

                {
                    relatedBlogs.map((post,index) =>(
                        <div>
                            <Blog data={post} key={index}></Blog>
                        </div>    
                    ))
                }

            </div>):
            (
                <div>
                    <p>NO DATA FOUND</p>
                </div>    
            )
        }
        </div>
    </div>  
  )
}

export default RelatedBlog