import { GlobalContext } from "../Context/Context";
import AllCard from "./AllCard";
import { useContext } from "react";

function Allrecipe() {
  const { foodHub } = useContext(GlobalContext);
  console.log(foodHub);
  return (
    <div className="mt-10">
      <div
        className="w-full text-center text-4xl mb-5"
        style={{ fontWeight: "bold" }}
      >
        <h1>TASTY FOOD HUB</h1>
      </div>

      <div>
        <div className="w-full justify-center flex flex-wrap">
          {foodHub.map(
            (item, index) =>
              index < 10 && <AllCard item={item} key={item.id}></AllCard>
          )}
        </div>
      </div>
    </div>
  );
}

export default Allrecipe;
