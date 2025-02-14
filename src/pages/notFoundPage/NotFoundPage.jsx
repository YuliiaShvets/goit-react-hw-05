import { Link } from "react-router-dom";
import GoBackButton from "../../components/goBackButton/GoBackButton.jsx";
import s from "../notFoundPage/NotFoundPage.module.css"

const NotFoundPage = () => {
    return (
        <div className={s.notfound}>
            <h1 className={s.notFoundTitle}>404 - Not Found</h1>
            <Link to="/"><GoBackButton /></Link>
        </div>
    );
}

export default NotFoundPage;