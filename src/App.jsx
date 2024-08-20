import "./App.css";

import Home from "./component/home/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import About from "./component/About/About";
import Register from "./component/UserPages/Register";
import Login from "./component/UserPages/Login";
import Contact from "./component/contact/Contact";
import SearchedRecpList from "./component/queryRecipe/SearchedRecpList";
import Detailcard from "./component/recipeDetailCard/Detailcard";
import { useContext } from "react";
import { GlobalContext } from "./component/Context/Context";

function App() {
  const { selectedRecipe } = useContext(GlobalContext);

  return (
    <div>
      {/* Define routes for the application */}
      <Routes>
        {/* Main layout route */}
        <Route path="/" element={<Layout></Layout>}>
          {/* Home route */}
          <Route path="/" element={<Home></Home>}></Route>

          {/* About page route */}
          <Route path="/about" element={<About></About>}></Route>

          {/* Register page route */}
          <Route path="/register" element={<Register></Register>}></Route>

          {/* Login  page route */}
          <Route path="/login" element={<Login></Login>}></Route>

          {/* Contact page route */}
          <Route path="/contact" element={<Contact></Contact>}></Route>

          {/* Recipe detail page route, showing selected recipe details */}
          <Route
            path="/recipe/:id"
            element={
              selectedRecipe ? (
                <Detailcard recipe={selectedRecipe} />
              ) : (
                <div>Recipe not found</div>
              )
            }
          ></Route>

          {/* Search results page route */}
          <Route
            path="/result"
            element={<SearchedRecpList></SearchedRecpList>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
