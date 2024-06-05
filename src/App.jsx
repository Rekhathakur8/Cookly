import "./App.css";
import Nav from "./component/navbar/Nav";
import Slider from "./component/slider_section/Slider";
import Home from "./component/home/Home";
import Footer from "./component/footer/Footer";
// import SignUp from "./component/UserPages/SignUp";
// import Singal from "./component/recipeCard/Singal";
// import Login from "./component/UserPages/Login";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Slider></Slider>
      <Home></Home>
      <Footer></Footer>
      {/* <SignUp></SignUp> */}
      {/* <Login></Login> */}
      {/* <Singal></Singal> */}
    </div>
  );
}

export default App;
