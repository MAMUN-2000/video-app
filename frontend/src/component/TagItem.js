import { useDispatch, useSelector } from "react-redux";
import { deleted, selected } from "../features/filter/filterSlice";

function TagItem(tag) {
  const dispatch = useDispatch();
  const { filterTags } = useSelector((state) => state.filterVideo);
  const isselected = filterTags.includes(tag.title) ? true : false;

  const handleTagSelect = () => {
    if (isselected) {
      dispatch(deleted(tag.title));
    } else {
      dispatch(selected(tag.title));
    }
  };

  const style = isselected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  return (
    <div className={style} onClick={handleTagSelect}>
      {tag.title}
    </div>
  );
}

export default TagItem;
