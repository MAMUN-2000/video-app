import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import searchIcon from "../assets/search.svg";
import { searchItem } from "../features/filter/filterSlice";
function Search() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filterVideo);
  const [searchValue, setSearchValue] = useState(search);

  const handleSearchForm = (e) => {
    e.preventDefault();
    dispatch(searchItem(searchValue));
  };

  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form onSubmit={handleSearchForm}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search.."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">
          <img
            className="inline h-4 cursor-pointer"
            src={searchIcon}
            alt="Search"
          />
        </button>
      </form>
    </div>
  );
}

export default Search;
