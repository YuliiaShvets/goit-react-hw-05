import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api.js";
import GoBackButton from "../../components/goBackButton/GoBackButton.jsx";
import s from "../movieDetailsPage/MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchMovieDetails(movieId).then(setMovie).then(() => setIsLoading(false));

    }, [movieId]);
    if (isLoading) {
        return <p>Loading...</p>
    }
    return movie ? (
        <div>
            <GoBackButton />
            <div className={s.movie}>
                <img className={s.imgMovie} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <h1>{movie.title}</h1>
                <p >Score: {Math.round(movie.vote_average * 10)}%</p>
                <p className={s.descriptionMovie}>Overview: {movie.overview}</p>
                <ul className={s.genresList}>Genres: 
                    {
                        movie.genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))
                    }
                </ul>
            </div>


            <div className={s.movieLink}>
                <Link className={s.link} to={`cast`}>Actors</Link>
                <Link className={s.link} to={`reviews`}>Reviews</Link>

            </div>
            <Outlet />
        </div>
    ) : (
            <p>Not found</p>
        );
}

export default MovieDetailsPage;