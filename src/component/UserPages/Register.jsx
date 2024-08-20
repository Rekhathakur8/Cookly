import { useState } from "react";

// Register component for user sign-up
const Register = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!"); // Alert if passwords do not match
      return;
    }
    // Log form data or submit it to a server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container for the registration form */}
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        {/* Page heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create an Account
        </h1>
        {/* Registration form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name input field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Basil focus:border-Basil sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          {/* Email input field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Basil focus:border-Basil sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          {/* Password input field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Basil focus:border-Basil sm:text-sm"
              placeholder="********"
            />
          </div>
          {/* Confirm Password input field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Basil focus:border-Basil sm:text-sm"
              placeholder="********"
            />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-Basil text-white py-2 px-4 rounded-md shadow-sm hover:bg-Basil-dark focus:outline-none focus:ring-2 focus:ring-Basil focus:ring-offset-2"
          >
            Register
          </button>
        </form>
        {/* Link to login page for existing users */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-Basil hover:text-Basil-dark">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
