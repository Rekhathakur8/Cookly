const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-Basil py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-xl text-white">
            Discover our passion for culinary creativity and community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-Basil">Our Story</h2>
            <p className="mt-4 text-Slate">
              Our journey began with a love for cooking and a desire to bring
              people together through food. We believe in the power of sharing
              recipes and culinary experiences, creating a vibrant community
              where everyone can learn, share, and enjoy.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-Basil">Our Mission</h2>
            <p className="mt-4 text-Slate">
              Our mission is to provide a platform where food enthusiasts can
              find and share recipes from around the world. We aim to inspire
              creativity in the kitchen and foster a sense of community among
              our users.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-Basil">Meet the Team</h2>
            <div className="mt-8 flex flex-wrap -mx-4">
              {/* Team Member 1 */}
              <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="bg-gray-100 p-6 rounded-lg text-center">
                  <img
                    src="team-member-1.jpg"
                    alt="Team Member 1"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-Basil">John Doe</h3>
                  <p className="text-Slate">Co-Founder & Chef</p>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="bg-gray-100 p-6 rounded-lg text-center">
                  <img
                    src="team-member-2.jpg"
                    alt="Team Member 2"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-Basil">
                    Jane Smith
                  </h3>
                  <p className="text-Slate">Co-Founder & Developer</p>
                </div>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-Basil">Join Us</h2>
            <p className="mt-4 text-Slate">
              Become a part of our growing community. Share your recipes, try
              new ones, and connect with fellow food lovers.
            </p>
            <button className="mt-8 bg-tomato text-white py-2 px-4 rounded-full hover:bg-red-600">
              Sign Up Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
