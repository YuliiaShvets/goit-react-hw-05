import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
import s from "../goBackButton/GoBackButton.module.css";

const GoBackButton = () => {
        const location = useLocation();
        const navigate = useNavigate();
    
    
        const backLink = useRef(location.state ?.from ?? "/movies");
    
    
        const handleGoBack = () => {
            navigate(backLink.current);
        };
    
        return (
            <div className={s.button}>
            <button className={s.backButton} onClick={handleGoBack}>
                Go Back
            </button>
            </div>
        );
    }
    
    export default GoBackButton;