import {useEffect} from "react";
import "./App.css";
import SearchIcon from "./search.svg"
const API_URL='http://www.omdbapi.com?apikey=d0db8a45';

const post={
    "Title": "Batman: The Animated Series",
    "Year": "1992–1995",
    "imdbID": "tt0103359",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
}

const App = () => {
    const searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();

        console.log(data.Search);
    }
    useEffect(()=>{
        searchMovies('batman');
    
    },[]);

 return(
       <>
       <div className="app">
            <h1>MoviesWorld</h1>
            

        <div className="search">
           <input
            placeholder="Search for a movie"
            value="batman"
            onChange={()=>{}}
            />
            <img
            src={SearchIcon}
            alt="Search Icon"
            onClick={()=>{}}
            />
            </div>

            <div className="container">
                 <div className="movie">

                    <div>
                        <p>{post.Year}</p>
                    </div>

                    <div>
                        <img src={post.Poster} alt={post.Title}/>
                    </div>
                    </div>

                </div>
        </div>
        </>
    );
 
}

export default App;