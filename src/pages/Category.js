import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const Category = () => {

    const {fetchBlogdata} =useContext(AppContext);
    const navigate =useNavigate();
    const location=useLocation()
    const category = location.pathname.split("/").at(-1);

  return (
    <div className='w-screen flex flex-col items-center justify-center'>
        <Header></Header>

        <div className='mt-20 gap-6 flex mb-[-60px] text-xl items-center'>
            <button onClick={() => navigate(-1)} className='border py-2 px-4 bg-gray-300 rounded-xl'>
                Back
            </button>

            <h2 className='font-bold'>
                Blogs on <span>{category}</span>
            </h2>
        </div>

        <Blogs></Blogs>
        <Pagination></Pagination>
    </div>
  )
}

export default Category