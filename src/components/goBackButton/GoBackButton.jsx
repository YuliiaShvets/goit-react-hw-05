import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
import s from "../goBackButton/GoBackButton.module.css";

const GoBackButton = () => {
    const location = useLocation();
    const navigate = useNavigate();


    const backLink = useRef(
        location.state?.from === "/" ? "/" : location.state?.from ?? "/movies"
    );
    
    const handleGoBack = () => {
        navigate(backLink.current);
    };

    return (
        <button className={s.goBackButton} onClick={handleGoBack}>
            Go Back
        </button>
    );
}

export default GoBackButton;