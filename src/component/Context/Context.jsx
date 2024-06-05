/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// First, you need to create a context using the createContext function from React.

export const GlobalContext = createContext(null);

// The Provider component will hold the state and the functions that need to be shared.

// create a provider componant

export function MyProvider({ children }) {
  const [randomRecipe, setRandomRecipe] = useState([]);

  const [foodHub, setFoodHub] = useState([]);

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
        console.log("i am printing erro", error);
      }
    };
    handleLoading();
  }, []);

  useEffect(() => {
    const allRecipe = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        setFoodHub(data.recipes);
      } catch (error) {
        console.log(error);
      }
    };

    allRecipe();
  }, []);

  return (
    <GlobalContext.Provider value={{ randomRecipe, foodHub }}>
      {children}
    </GlobalContext.Provider>
  );
}
