import css from "./SearchBox.module.css";

const SearchBox = ({ handleChange }) => {
  return <input className={css.sbox} type="text" onChange={handleChange} />;
};

export default SearchBox;
