// Import the main image used in the hero section
import mainImage from "../../assets/mainImage.png";

function HeroPage() {
  return (
    // // Hero section of the page with background and padding
    <section className="bg-HeroBg pt-5 px-10">
      <div className="flex justify-center items-center flex-wrap">
        <div>
          {/* Heading and subheadings */}
          <h1 className="text-Basil text-5xl font-bold font-secFont p-1">
            We Make Your Cooking Easier
          </h1>
          <p className="text-Golden text-2xl p-1">
            Discover and Share your favourite recipes
          </p>
          <p className="text-Slate text-lg p-1">
            Join our community and explore a world of culinary delights
          </p>

          {/* Primary and secondary buttons */}
          <div className="flex gap-5 p-1">
            <button className="bg-Tomato text-white py-2 px-5 hover:bg-darkTomato">
              Get Started
            </button>
            <button className="bg-Carrot text-white py-2 px-5 hover:bg-darkCarrot">
              Learn More
            </button>
          </div>
        </div>
        {/* Main image */}
        <img src={mainImage} alt="mainImage" className="w-[40rem]" />
      </div>
    </section>
  );
}

export default HeroPage;
