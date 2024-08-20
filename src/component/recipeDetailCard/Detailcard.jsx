/* eslint-disable react/prop-types */
import RecipeHeader from "./RecipeHeader";
import ImageGallery from "./ImageGallary";
import IngredientsList from "./IngredientList";
import Instructions from "./Instructions";
function Detailcard({ recipe }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-5">
      <RecipeHeader title={recipe.title} author={recipe.author} />
      <ImageGallery images={recipe.image} />
      <IngredientsList ingredients={recipe.extendedIngredients} />
      <Instructions stepsMore={recipe.analyzedInstructions} />
    </div>
  );
}

export default Detailcard;
