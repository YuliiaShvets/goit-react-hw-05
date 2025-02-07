import { Bars } from "react-loader-spinner";
import s from "../loader/Loader.module.css";

const Loader = ({ loading }) => {
    return (
<div className={s.loader}>
    <Bars  
    height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={loading} />
  </div>
    );
};

export default Loader;