import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const  MovieList = ({ movies, isLoading }) => {

    const noImageSrc = `data:image/svg+xml;charset=UTF-8,
    <svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="white"/>
        <text x="50%" y="50%" font-size="20" fill="black" text-anchor="middle" alignment-baseline="middle">No Image</text>
    </svg>`;

    const location = useLocation();
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <>
            {movies.length > 0 ? (
                <ul className={s.listMovies}>
                    {movies.map(({ id, title, poster_path }) => (
                        <li key={id} className={s.movieItem}>
                            <Link
                                className={s.link}
                                to={`/movies/${id}`}
                                state={{ from: location }}
                            >
                                <img
                                    className={s.poster}
                                    src={poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : "https://via.placeholder.com/200x300"}
                                    alt={title}
                                    onError={(e) => (e.target.src = noImageSrc)}
                                />
                                <p>{title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No movies</p>
            )}
        </>
    );
}

export default MovieList;