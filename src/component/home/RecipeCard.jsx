// lighte recipes

import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import Card from "./Card";
function RecipeCard() {
  const { randomRecipe } = useContext(GlobalContext);
  console.log(randomRecipe);
  return (
    <div className="w-full  mt-10 py-3 px-3 flex justify-center ">
      <div className="flex gap-5 justify-center">
        {randomRecipe.map((item) => (
          <Card item={item} key={item.id}></Card>
        ))}
      </div>
    </div>
  );
}

export default RecipeCard;
