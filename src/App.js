import {useEffect} from "react";
//code 27579622
import "./App.css"
import SearchIcon from "./search.png"
import MovieCard from "./movieCard";
const API_URL = "http://www.omdbapi.com?apikey=27579622";


const movie1={
    "Title": "The Batman",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
}
const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies("Batman")        
    },[])
    return (
        <div className="app">
            <h1>FilmoweZagłębie</h1>
            <div className="search">
                <input placeholder="Wpisz szukany tytuł"
                    value="Batman"
                    onChange={()=>{}}>
                </input>
                <img src={SearchIcon} alt="searchicon"
                onClick={()=>{}}>
                </img>
            </div>
            <div className="container">
                <MovieCard movie1={movie1}></MovieCard>
                
            </div>

        </div>
        
    );
}

export default App;