/* eslint-disable react/prop-types */

// Card component for displaying recipe information including image, title, rating, likes, and comments
import { FaCommentDots } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

function Card({ item }) {
  // Function to reduce the recipe title to a maximum of three words
  const reduceTitleInThreeWords = (item) => {
    const title = item.title;
    const words = title.split(" ");
    if (words.length > 3) {
      return words.slice(0, 3).join(" ");
    } else {
      return title;
    }
  };

  // Get the shortened title
  const title = reduceTitleInThreeWords(item);

  return (
    <div className="shadow-lg rounded-md cursor-pointer">
      <div className="w-[18rem]">
        {/* Container for the recipe image */}
        <div>
          <img src={item.image} alt="Recipe image" />
        </div>

        <div>
          {/* Recipe title */}
          <h1
            className="text-center pt-2 text-Basil"
            style={{
              fontSize: "1.3rem",
              fontFamily: "sans-serif",
              fontWeight: "600",
            }}
          >
            {title}
          </h1>
          <div className="flex justify-between p-3">
            <div className="flex gap-4">
              {/* Comment and like icons */}
              <span className="text-Carrot">
                <FaCommentDots />
              </span>
              <span>
                <AiOutlineLike />
              </span>
            </div>
            {/* Rating stars */}
            <span className="flex text-Carrot">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
