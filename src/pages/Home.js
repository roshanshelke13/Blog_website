import React from 'react'
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center absolute">
      <Header></Header>
      <Blogs/>
      <Pagination></Pagination>
    </div>
  )
}

export default Home