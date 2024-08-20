/* eslint-disable react/prop-types */

const Instructions = ({ stepsMore }) => {
  // Check if analyzedInstructions is not empty and has at least one item
  if (!stepsMore || stepsMore.length === 0) {
    return null;
  }

  // Extract steps from the first object in the array
  const steps = stepsMore[0].steps;

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside">
        {steps.map((step, index) => (
          <li key={index} className="text-gray-700 mb-1">
            {step.step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
