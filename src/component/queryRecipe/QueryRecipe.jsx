/* eslint-disable react/prop-types */
function QueryRecipe({ query }) {
  return (
    <div className="w-[300px] text-center px-2">
      <div>
        <img src={query.image} alt="not present" />
      </div>
      <div>
        <h1>{query.title}</h1>
      </div>
    </div>
  );
}

export default QueryRecipe;
