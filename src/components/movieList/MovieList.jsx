import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies, isLoading }) => {
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <ul className={s.movieList}>
            {movies.map(movie => (
                <li key={movie.id} className={s.movieItem}>
                    <Link to={`/movies/${movie.id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                            className={s.movieImage}
                        />
                        <p className={s.movieTitle}>{movie.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;
