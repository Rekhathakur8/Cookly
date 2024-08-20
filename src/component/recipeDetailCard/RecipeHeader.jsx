/* eslint-disable react/prop-types */

const RecipeHeader = ({ title }) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
    </div>
  );
};

export default RecipeHeader;
