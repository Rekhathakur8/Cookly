// start

import { useContext } from "react";
import { GlobalContext } from "../../../Context/Context";
import Card from "./Card";

// RecipeCards component to display a list of recipe cards
function RecipeCards() {
  // Access the randomRecipe array from the global context
  const { randomRecipe } = useContext(GlobalContext);

  return (
    <div className="w-full mt-10 px-10 flex justify-center">
      <div className="flex gap-5 justify-center flex-wrap">
        {/* Map over the randomRecipe array to create a Card component for each recipe */}
        {randomRecipe.map((item) => (
          <Card item={item} key={item.id}></Card>
        ))}
      </div>
    </div>
  );
}

export default RecipeCards;

//end{code}
