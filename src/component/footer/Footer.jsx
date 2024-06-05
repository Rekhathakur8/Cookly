import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="flex my-10 gap-5">
        <div
          className="flex justify-center items-center rounded-full text-2xl"
          style={{
            backgroundColor: "rgb(8,102,255)",
            color: "white",
            width: "40px",
            height: "40px",
          }}
        >
          <FaFacebookF />
        </div>
        <div
          className="flex justify-center items-center rounded-full text-2xl"
          style={{
            backgroundColor: "rgb(18,125,238)",
            color: "white",
            width: "40px",
            height: "40px",
          }}
        >
          <FaTwitter />
        </div>
        <div
          className="flex justify-center items-center rounded-full text-2xl"
          style={{
            backgroundColor: "rgb(10,102,194)",
            color: "white",
            width: "40px",
            height: "40px",
          }}
        >
          <TiSocialLinkedin />
        </div>
        <div
          className="flex justify-center items-center rounded-full text-2xl"
          style={{
            backgroundColor: "rgb(212,7,116)",
            color: "white",
            width: "40px",
            height: "40px",
          }}
        >
          <FaInstagram />
        </div>
        <div
          className="flex justify-center items-center rounded-full "
          style={{
            backgroundColor: "rgb(255,121,0)",
            color: "white",
            width: "40px",
            height: "40px",
          }}
        >
          <FaGoogle />
        </div>
        <div>
          <FaGithub
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </div>
      </div>
      <div className="w-full" style={{ backgroundColor: "rgb(201,201,201)" }}>
        <div>
          <div
            className="text-center text-dark p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-dark" href="#">
              MDBootstrap.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
