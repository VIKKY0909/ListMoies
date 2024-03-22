import React from "react";
import { useEffect,useState } from "react";
import './app.css';
import SearchIcon from './search.svg';
import Moviecard from "./Moviecard";
// 884c45d9

const apiKey = "884c45d9"; // Consider using a more secure environment variable for the API key
const baseUrl = `http://www.omdbapi.com?apikey=${apiKey}`
const movie={
    "Title": "Lauf um Dein Leben - Vom Junkie zum Ironman",
    "Year": "2008",
    "imdbID": "tt0954542",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDJhZjA5MWEtOTE5Yy00MWJiLTgwNjQtMDliOWI0NWJmZDZkXkEyXkFqcGdeQXVyMjY1ODY2Ng@@._V1_SX300.jpg"
}

const App = () =>{

    const[movies,setMovies] =useState([]);
    const[searchterm,setSearchterm] =useState('');
    const serch= async(title) =>{
        const response = await fetch(`${baseUrl}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        serch();
    },[])
    return(   
    
    <div className="app">
        <h1>My movies</h1>


        <div className="search">
            <input 
            placeholder="Search for your movies"
            value={searchterm}
            onChange={(e)=>setSearchterm(e.target.value)}
            ></input>
            <img 
            src={SearchIcon}
            alt="Search"
            onClick={()=> serch(searchterm)}
            />
        </div>
        {
            movies?.length>0
            ? (
                <div className="container">
                    {movies.map((movie)=>(
                        
                        
                    <Moviecard movie={movie}/>
                    ))}
                </div>
            ):(
                <div className="empty">
                    <h2>Not Found</h2>
                </div>
            )

        }
        

    </div>
    
    );
}
export default App;