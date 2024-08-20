/* eslint-disable react/prop-types */

const IngredientsList = ({ ingredients }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700 flex items-center mb-2">
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
              alt={ingredient.name}
              className="w-10 h-10 mr-4 rounded"
            />
            <span>{ingredient.original}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
