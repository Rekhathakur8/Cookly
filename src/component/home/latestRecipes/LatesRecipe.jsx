// Import necessary hooks and context
import { useContext } from "react";
import { GlobalContext } from "../../Context/Context";

// LatesRecipe component to display a list of latest recipes
function LatesRecipe() {
  // Access randomRecipe from the global context
  const { randomRecipe } = useContext(GlobalContext);
  console.log(randomRecipe);

  return (
    // Main container for the Latest Recipes section
    <div className="mb-5 ">
      <div className="w-[80%]  mx-auto p-5">
        {/* Section heading */}
        <h1 className="px-10 text-Basil">Supar Delicious</h1>
        {/* Unordered list of recipes */}
        <ul className="flex flex-wrap justify-center items-center text-center text-secFont gap-2 mt-4 ">
          {/* Map over the randomRecipe array to display each recipe */}
          {randomRecipe.map((recipe, index) => {
            return (
              //List item for each recipe
              <li key={index} className="p-3  w-48 h-fit cursor-pointer">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-[10rem] h-[10rem] rounded-full p-2"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LatesRecipe;
