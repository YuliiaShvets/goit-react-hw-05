import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api.js";
import s from "../movieReviews/MovieReviews.module.css";

const MovieReviews = () => {
        const { movieId } = useParams();
        const [reviews, setReviews] = useState([]);
    
        useEffect(() => {
            fetchMovieReviews(movieId).then(setReviews);
        }, [movieId]);
    
        return (
            <div className={s.movieRewievs}>
                <h2 className={s.movieRewievsTitle}>Review</h2>
                {reviews.length > 0 ? (
                    <ul className={s.movieRewievsList}>
                        {reviews.map(review => (
                            <li key={review.id}>
                                <h3>{review.author}</h3>
                                <p>{review.content}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                        <p className={s.pReviews}>No reviews</p>
                    )}
            </div>
        );
    }
    
    export default MovieReviews;