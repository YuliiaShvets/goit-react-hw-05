import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api.js";
import MovieList from "../../components/movieList/MovieList.jsx";

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
        <div>
            <h1>Trending Movies</h1>
            <MovieList movies={movies} isLoading={isLoading} />
        </div>
    );
}

export default HomePage;
