import Highlight from "./Highlight";

import RecipeCard from "./RecipeCard";
import Allrecipe from "./Allrecipe";
import About from "../About/About";

function Home() {
  return (
    <div>
      <Highlight></Highlight>
      <RecipeCard></RecipeCard>
      <Allrecipe></Allrecipe>
      <About></About>
    </div>
  );
}

export default Home;
