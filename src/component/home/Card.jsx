/* eslint-disable react/prop-types */

function Card({ item }) {
  return (
    <div className="shadow-lg rounded-md cursor-pointer">
      <div className="w-[270px]  py-1">
        <div>
          <img src={item.image} alt="not available" />
        </div>

        <div>
          <h1
            className="text-center pt-2"
            style={{
              fontSize: "1.3rem",
              fontFamily: "sans-serif",
              fontWeight: "600",
            }}
          >
            {item.title}
          </h1>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Card;
