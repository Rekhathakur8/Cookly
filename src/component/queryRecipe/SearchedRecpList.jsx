/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import QueryRecipe from "./QueryRecipe";
function SearchedRecpList() {
  const { searchedData } = useContext(GlobalContext);
  return (
    <>
      <div className="w-[100%] flex justify-center ">
        <div className="flex flex-wrap w-[80%] justify-center mt-5">
          {searchedData.map((item) => (
            <QueryRecipe key={item.id} query={item}></QueryRecipe>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchedRecpList;
