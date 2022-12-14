import {useState, useEffect} from "react";
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
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies("Batman")        
    },[])
    return (
        <div className="app">
            <h1>Filmowe Zagłębie</h1>
            <div className="search">
                <input placeholder="Wpisz szukany tytuł"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            searchMovies(searchTerm)}}}>
                </input>
                <img src={SearchIcon} alt="searchicon"
                onClick={()=>searchMovies(searchTerm)}>
                </img>
            </div>
            {movies?.length > 0
            ?   (<div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>)
                : (
                    <div className="empty">
                        <h1>Nie odnaleziono żadnych filmów</h1>
                    </div>
                )
                }
            </div>

    
        
    );
}

export default App;