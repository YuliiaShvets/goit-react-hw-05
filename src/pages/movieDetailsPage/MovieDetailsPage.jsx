import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api.js";
import GoBackButton from "../../components/goBackButton/GoBackButton.jsx";
import s from "../movieDetailsPage/MovieDetailsPage.module.css";
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

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
              <div>
                <img className={s.imgMovie} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              </div>
                <div>
                  <h1 className={s.movieDetailsTitle}>{movie.title}</h1>
                  <p className={s.scoreMovie}>Score: {Math.round(movie.vote_average * 10)}%</p>
                  <ul className={s.genresList}>Genres: 
                    {
                    movie.genres.map(genre => (
                     <li key={genre.id} className={s.genresItem}>{genre.name}</li>
                        ))
                    }
                  </ul>
                  <p className={s.descriptionMovie}>Overview: {movie.overview}</p>
                </div>
            </div>


            <div className={s.movieDetails}>
                <NavLink className={buildLinkClass} to={`cast`}>Actors</NavLink>
                <NavLink className={buildLinkClass} to={`reviews`}>Reviews</NavLink>
            </div>
            <Outlet />
        </div>
    ) : (
            <p>Not found</p>
        );
}

export default MovieDetailsPage;