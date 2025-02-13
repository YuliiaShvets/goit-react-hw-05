import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api.js";
import s from "./MovieCast.module.css";

const MovieCast = () => {

    const noImageSrc = `data:image/svg+xml;charset=UTF-8,
    <svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="white"/>
        <text x="50%" y="50%" font-size="20" fill="black" text-anchor="middle" alignment-baseline="middle">No Image</text>
    </svg>`;

    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchMovieCast(movieId).then(setCast).then(() => { setIsLoading(false) });
    }, [movieId]);
    if (isLoading) {
        return <p>Loading...</p>;
    }
    
    return (

        <div className={s.actors}>
            <h2 className={s.actorsTitle}>Actors</h2>
                <ul className={s.actorsList}>
                    {cast.map(actor => (
                        <li key={actor.id} className={s.actorsItem}>
                            <img className={s.actorImage} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} 
                            onError={(e) => (e.target.src = noImageSrc)}
                            />
                            <h3 className={s.actorsName}>{actor.name}</h3>
                            <p className={s.actorsCaracter}>Character: {actor.character}</p>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default MovieCast;