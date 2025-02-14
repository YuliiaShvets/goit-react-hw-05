import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/moviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/movieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/movieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/movieReviews/MovieReviews"));
const Navigation = lazy(() => import("./components/navigation/Navigation"));
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"));

function App() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                        <Route path="cast" element={<MovieCast />} />
                        <Route path="reviews" element={<MovieReviews />} />
                    </Route>
                    <Route path="/not-found" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;