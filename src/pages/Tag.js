import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const Tag = () => {

    const {fetchBlogdata} =useContext(AppContext);
    const navigate =useNavigate();
    const location=useLocation()
    const tag = location.pathname.split("/").at(-1);

    // function returnHome(){
    //     fetchBlogdata(1,'','');
    //     navigate("/");
    // }

  return (
    <div className='w-screen flex flex-col items-center justify-center'>
        <Header></Header>

        <div className='mt-20 gap-6 flex mb-[-60px] text-xl items-center'>
            <button onClick={() => navigate(-1)} className='border py-2 px-4 bg-gray-300 rounded-xl'>
                Back
            </button>

            <h2 className='font-bold'>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>

        <Blogs></Blogs>
        <Pagination></Pagination>
    </div>
  )
}

export default Tag