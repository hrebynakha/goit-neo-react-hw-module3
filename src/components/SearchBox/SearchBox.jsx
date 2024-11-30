import { IconContext } from "react-icons";
import css from "./SearchBox.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = ({ handleChange }) => {
  return (
    <div className={css.inputWrap}>
      <input
        className={css.sbox}
        type="text"
        placeholder="Input search value"
        onChange={handleChange}
      />
      <IconContext.Provider value={{ className: "icon", size: 25 }}>
        <AiOutlineSearch />
      </IconContext.Provider>
    </div>
  );
};

export default SearchBox;
