import { useState } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
function Slider() {
  const slides = [image1, image2, image3, image4, image5];
  const [curretIndex, seCurrentIndex] = useState(0);

  const nextSlide = () => {
    seCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    seCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  return (
    <div>
      <button
        className="left-arrow absolute top-1/2 transform -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white p-5 rounded"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <div className="w-full">
        <img
          src={slides[curretIndex]}
          style={{
            height: "80vh",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <button
        className="right-arrow absolute top-1/2 transform -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white p-5 rounded"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
