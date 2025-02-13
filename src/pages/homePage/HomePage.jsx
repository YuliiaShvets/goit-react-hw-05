import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api.js";
import MovieList from "../../components/movieList/MovieList.jsx";
import s from "../homePage/HomePage.module.css";


const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchTrendingMovies()
            .then(data => setMovies(data))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className={s.homePage}>
            <h1 className={s.homeTitle}>Trending Movies!!!</h1>
            <MovieList movies={movies} isLoading={isLoading} />
        </div>
    );
}

export default HomePage;
