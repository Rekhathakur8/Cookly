import image6 from "../../assets/image6.jpg";

import { FaGoogle } from "react-icons/fa6";
function Login() {
  return (
    <div
      className="w-full h-[100vh] "
      style={{
        backgroundImage: `URL(${image6})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no repeat",
      }}
    >
      <div className="flex justify-center items-center h-[100vh] ">
        <div
          className="w-[60%] h-[600px] bg-transparent rounded-xl "
          style={{ boxShadow: "-10px 10px 30px 1px rgb(39,39,39)" }}
        >
          <div
            className="flex justify-end mt-10"
            style={{ fontFamily: "sans-serif" }}
          >
            <div className=" w-[60%]">
              <h1 className="text-4xl mb-2">
                Welcome to <span>COOKPAL</span>
              </h1>
              <p>
                if you don`t have an account?
                <a
                  href="#"
                  style={{ textDecoration: "underlined", color: "blue" }}
                >
                  Create Account
                </a>
              </p>

              <form>
                <div>
                  <div className="w-[90%] py-2 border-2 px-2 rounded-md my-3">
                    <input
                      type="text"
                      placeholder="Email"
                      className="outline-none bg-transparent"
                    />
                  </div>
                  {/* <div className="w-[90%] py-2 border-2 px-2 rounded-md my-3">
                    <input
                      type="text"
                      placeholder="Contact no"
                      className="outline-none bg-transparent"
                    />
                  </div> */}
                </div>

                <div>
                  <div className="w-[90%] py-2 border-2 px-2 rounded-md my-3">
                    <input
                      type="text"
                      placeholder="Password"
                      className="outline-none bg-transparent"
                    />
                  </div>
                  <a
                    href=""
                    style={{ textDecoration: "underlined", color: "blue" }}
                  >
                    Forgot password
                  </a>
                  pa
                </div>
              </form>
              <div className="bg-[red] w-[200px] py-1 flex justify-center rounded-full my-3">
                <button type="button">Log In</button>
              </div>

              <div className="flex my-1 gap-5">
                <div>
                  <p>
                    Or{" "}
                    <a
                      href=""
                      style={{ textDecoration: "underlined", color: "blue" }}
                    >
                      Log In
                    </a>{" "}
                    with
                  </p>
                </div>
                <div
                  className="flex justify-center items-center rounded-full "
                  style={{
                    backgroundColor: "rgb(255,121,0)",
                    color: "white",
                    width: "20px",
                    height: "20px",
                    fontSize: "10px",
                  }}
                >
                  <FaGoogle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
