import { useState } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ handleSetQuery }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      toast.error("This field cannot be empty. Please enter a value.", {
        style: {
          background: "rgb(245, 208, 167)",
          color: "black",
          fontWeight: "bold",
          padding: "12px",
          borderRadius: "10px",
        },
        position: "top-right",
      });
      return;
    }

    handleSetQuery(value);
    setValue(""); 
  };



  return (
    <form onSubmit={handleSubmit} className={s.searchForm}>
      <div className={s.search}>
    <input
    onChange={e => setValue(e.target.value)} value={value}
      type="text"
      placeholder="Search images and photos" 
      className={s.searchInput}
      
    />
    <button type="submit" className={s.searchBtn}>Search</button>
    </div>
  </form>
  );
};
 
export default SearchBar;

