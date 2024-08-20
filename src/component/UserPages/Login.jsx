// LoginPage component for user authentication
const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container for the login form */}
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        {/* Page heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login to Recipe Hub
        </h1>
        {/* Login form */}
        <form className="space-y-4">
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
            Login
          </button>
        </form>
        {/* Link to the sign-up page for new users */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-Basil hover:text-Basil-dark">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
