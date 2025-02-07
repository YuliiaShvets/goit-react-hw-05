import s from "../loadMore/LoadMore.module.css";

const LoadMore = ({ handleClick }) => {
    return(
        <div>
<button className={s.loadMore} onClick={handleClick}>Load more</button>
</div>
    );
};

export default LoadMore;