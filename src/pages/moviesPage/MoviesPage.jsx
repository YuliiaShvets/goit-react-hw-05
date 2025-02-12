import MovieList from "../../components/movieList/MovieList";
import { useState, useEffect } from "react";
import { searchMovies } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import s from "../moviesPage/MoviesPage.module.css"

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("q") || "");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        updateSearchParams("q", query);
        if (!query) return;

        let isCancelled = false;
        setIsLoading(true);

        searchMovies(query)
            .then((data) => {
                if (!isCancelled) setMovies(data);

            })
            .finally(() => {
                if (!isCancelled) setIsLoading(false);
            });

        return () => {
            isCancelled = true;
        };
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
    };

    const updateSearchParams = (key, value) => {
        const updatedParams = new URLSearchParams(searchParams);
        updatedParams.set(key, value);
        setSearchParams(updatedParams);
    };

    return (
        <div className={s.moviePage}>
            <form className={s.movieForm} onSubmit={handleSearch}>
                <input className={s.inputMovie} value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className={s.searchBtn} type="submit">Search</button>
            </form>
            <MovieList movies={movies} isLoading={isLoading} />
        </div>
    );
}

export default MoviesPage;