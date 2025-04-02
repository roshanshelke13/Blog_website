import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import './App.css';
import { Routes,Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import RelatedBlog from "./pages/RelatedBlog";
import Category from "./pages/Category";
import Tag from "./pages/Tag";

function App() {

  const {fetchBlogdata} = useContext(AppContext);

  const[searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=> {
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchBlogdata(Number(page),tag)
    }

    else if(location.pathname.includes("categories")){
      const category = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchBlogdata(Number(page),null,category)
    }
    else{
      fetchBlogdata(Number(page));
    }

  },[location.pathname,location.search]);

  return (
    <div className="w-screen h-screen flex flex-col items-center absolute">
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/blog/:blogId" element={<RelatedBlog></RelatedBlog>}/>
        <Route path="/categories/:category" element={<Category></Category>} />
        <Route path="/tags/:tag" element={<Tag></Tag>} />
      </Routes>
    </div>
  )

}

export default App;
