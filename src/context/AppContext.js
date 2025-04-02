import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({children}){

    //data that to ne send has to created
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalpages, setTotalPages] = useState(null);
    const navigate=useNavigate();

    //data filling
    async function fetchBlogdata(page = 1,tag="", category="") {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url+= `&tag=${tag}`;
        }
        if(category){
            url+=  `&category=${category}`;
        }
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("error hai")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    

    function handlePageChange(page){
        navigate({search: `page=${page}`});
        setPage(page);

    }

    //this data is created as a context
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalpages,
        setTotalPages,
        handlePageChange,
        fetchBlogdata
    };

    //value is sended in APP
    return <AppContext.Provider value={value}>       
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;