import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResults from './pages/searchResults/SearchResults';
import Explore from './pages/explore/Explore';
import { fetchDataFromApi } from './utils/api';
import PageNotFound from './pages/404/PageNotFound';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useFetch from './hooks/useFetch';
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeslice";
import { useEffect } from 'react';
import Header from './components/Header/Header';


function App() {

  const dispatch = useDispatch();


  useEffect(()=>{
    fetchApiConfig();
  },[])

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
        console.log(res);

        const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
        };

        dispatch(getApiConfiguration(url));
    });
};
  return (
    <>
 <BrowserRouter>

 <Header></Header>
 
          
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResults />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
         
        </BrowserRouter>

      
   
    </>
  )
}

export default App
