import Filters from "./filters/Filters";
import Recipes from "./recipes/Recipes";

// MainRecipe component to display the filter options and the list of recipes
function MainRecipe() {
  return (
    <div>
      {/* Filters component to allow users to filter recipes */}
      <Filters></Filters>

      {/* Recipes component to display the list of recipes */}
      <Recipes></Recipes>
    </div>
  );
}

export default MainRecipe;
