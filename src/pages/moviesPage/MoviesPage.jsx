import MovieList from "../../components/movieList/MovieList";
import { useState, useEffect } from "react";
import { searchMovies } from "../../services/api";
import { useSearchParams, useNavigate } from "react-router-dom";
import s from "../moviesPage/MoviesPage.module.css";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryFromParams = searchParams.get("q") || "";
    const [query, setQuery] = useState(queryFromParams);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!queryFromParams) return;

        let isCancelled = false;
        setIsLoading(true);

        searchMovies(queryFromParams)
            .then((data) => {
                if (!isCancelled) {
                    if (data.length === 0) {
                        navigate("/not-found");
                    } else {
                        setMovies(data);
                    }
                }
            })
            .catch(() => {
                navigate("/not-found");
            })
            .finally(() => {
                if (!isCancelled) setIsLoading(false);
            });

        return () => {
            isCancelled = true;
        };
    }, [queryFromParams, navigate]);

    const handleSearch = (e) => {
        e.preventDefault();
        updateSearchParams("q", query);
    };

    const updateSearchParams = (key, value) => {
        const updatedParams = new URLSearchParams(searchParams);
        if (value) {
            updatedParams.set(key, value);
        } else {
            updatedParams.delete(key);
        }
        setSearchParams(updatedParams);
    };

    return (
        <div className={s.moviePage}>
            <form className={s.movieForm} onSubmit={handleSearch}>
                <input
                    className={s.inputMovie}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movie..."
                />
            </form>
            <MovieList movies={movies} isLoading={isLoading} />
        </div>
    );
};

export default MoviesPage;