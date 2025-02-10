import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api.js";
import s from "./MovieCast.module.css";

const MovieCast = () => {
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

        <div>
            <h2>Actors</h2>
                <ul>
                    {cast.map(actor => (
                        <li key={actor.id}>
                            <img className={s.actorImage} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} />
                            <h3>{actor.name}</h3>
                            <p>Character: {actor.character}</p>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default MovieCast;