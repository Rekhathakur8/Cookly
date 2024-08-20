import RecipeCards from "./RecipeCards";
import { FaAngleDown } from "react-icons/fa6";

// Recipes component to display a header and a list of recipe cards
function Recipes() {
  return (
    <div className="  flex justify-center items-center">
      <div>
        {/* Header section with title and filter option */}
        <div className="flex justify-between">
          <h1 className="px-10 text-Basil">Recipes</h1>
          {/* Filter button with dropdown icon */}
          <div className="py-2 px-5 border w-fit flex justify-center items-center gap-3 cursor-pointer">
            <span>Filter</span>
            <span>
              <FaAngleDown />
            </span>
          </div>
        </div>
        {/* RecipeCards component to display individual recipe cards */}
        <RecipeCards></RecipeCards>
      </div>
    </div>
  );
}

export default Recipes;
