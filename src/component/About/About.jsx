import backgroundImage from "../../assets/backgroundImage.jpg";

function About() {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-4xl text-center">About Us</h1>
      </div>
      <div
        className="mx-2 mt-1 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10">
          <div>
            <div className="w-[40%]" style={{ backgroundColor: "1B1A55" }}>
              <h2>Welcome to CookPal</h2>
              <p>
                At <span>CookPal</span> we believe that cooking should be a
                joyful and rewarding experience. Whether you are a seasoned chef
                or a beginner in the kitchen, our goal is to inspire and empower
                you to create delicious meals with ease.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[300px]" style={{ backgroundColor: "720455" }}>
              <h1>Our Story</h1>
              <p>
                CookPal was founded in 2024 by you joueng , a passionate foodie
                and home cook. What started as a small blog to share family
                recipes and culinary adventures has grown into a vibrant
                community of food lovers from around the world. Our journey
                began with a simple idea: to make home cooking accessible,
                enjoyable, and fun for everyone.
              </p>
            </div>

            <div className="w-[300px]" style={{ backgroundColor: "183D3D" }}>
              <h1>What We Offer</h1>
              <h2>Diverse Recipes</h2>
              <h2>Step-by-Step Instructions</h2>
              <h2>Cooking Tips and Tricks</h2>
              <h2>Meal Planning Guides</h2>
              <h2>Community and Interaction</h2>
            </div>

            <div className="w-[300px]" style={{ backgroundColor: "03001C" }}>
              <h1>Our Mission</h1>
              <p>
                Our mission at CookPal is to bring people together through the
                love of food. We strive to create a space where everyone feels
                welcome and inspired to explore the culinary world. We believe
                that cooking is more than just preparing meals; it is a way to
                express creativity, nurture relationships, and create lasting
                memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
