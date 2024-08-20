/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// First, you need to create a context using the createContext function from React.

export const GlobalContext = createContext(null);

// The Provider component will hold the state and the functions that need to be shared.

// create a provider componant

export function MyProvider({ children }) {
  // random recipes api used in LatestRecipe componant
  const [randomRecipe, setRandomRecipe] = useState([]);

  // indian recipe
  const [indRecipe, setIndRecipe] = useState([]);

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const [searchedData, setSearchedData] = useState(null);

  // fetch random recipes from spooncular api
  useEffect(() => {
    const handleLoading = async () => {
      try {
        const res = await fetch(
          "https://api.spoonacular.com/recipes/random?apiKey=cef2b6ff157d4c1fb35167b10accb23a&number=5"
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        setRandomRecipe(data.recipes);
      } catch (error) {
        console.log("i am printing error", error);
      }
    };
    handleLoading();
  }, []);

  // indian recipes
  useEffect(() => {
    const handleLoading = async () => {
      try {
        const res = await fetch(
          "https://api.spoonacular.com/recipes/random?apiKey=cef2b6ff157d4c1fb35167b10accb23a&number=5&include_tags=vegiterian&cuisine=panjabi"
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        setIndRecipe(data.recipes);
      } catch (error) {
        console.log("i am printing error", error);
      }
    };
    handleLoading();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=cef2b6ff157d4c1fb35167b10accb23a`
        );
        const data = await response.json();
        console.log(data.results);
        setSearchedData(data.results);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [searchQuery]);

  return (
    <GlobalContext.Provider
      value={{
        randomRecipe,
        indRecipe,

        selectedRecipe,
        setSelectedRecipe,
        inputValue,
        setInputValue,
        searchedData,
        setSearchQuery,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
