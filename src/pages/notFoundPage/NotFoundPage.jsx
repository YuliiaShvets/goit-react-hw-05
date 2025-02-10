import { Link } from "react-router-dom";
import GoBackButton from "../components/goBackButton/GoBackButtob.jsx";

const NotFoundPage = () => {
    return (
        <>
            <h1>404 - Not Found</h1>
            <Link to="/"><GoBackButton /></Link>
        </>
    );
}

export default NotFoundPage;