import HeroPage from "./HeroPage";
import LatesRecipe from "./latestRecipes/LatesRecipe";
import MainRecipe from "./Recipes/MainRecipe";
import About from "../About/About";
import Contact from "../contact/Contact";

// The Home component serves as the main landing page, aggregating key sections of the website.
function Home() {
  return (
    <div>
      {/* HeroPage component displays the main banner or introductory section */}
      <HeroPage></HeroPage>

      {/* LatesRecipe component showcases the latest recipes */}
      <LatesRecipe></LatesRecipe>

      {/* MainRecipe component lists the main featured recipes */}
      <MainRecipe></MainRecipe>

      {/* About component provides information about the website or company */}
      <About></About>

      {/* Contact component offers contact information and a form for user inquiries */}
      <Contact></Contact>
    </div>
  );
}

export default Home;
