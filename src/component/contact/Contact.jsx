const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-Basil py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-xl text-white">
            love to hear from you. Get in touch with us!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-Basil">Get in Touch</h2>
            <p className="mt-4 text-Slate">
              Whether you have a question, feedback, or just want to say hello,
              we are here to help.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <form className="bg-gray-100 p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label
                  className="block text-Slate font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full p-3 border rounded-lg"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-Slate font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full p-3 border rounded-lg"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-slate font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full p-3 border rounded-lg"
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <button
                className="bg-Tomato text-white py-3 px-6 rounded-full hover:bg-red-600 transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
