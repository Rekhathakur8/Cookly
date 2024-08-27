import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#8FBC8F] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-white mb-2">RecipeSite</h1>
            <p className="text-white">
              Your go-to destination for delicious recipes and culinary
              inspiration. Join our community and start cooking!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="text-white space-y-2">
              <li>
                <a href="/about" className="hover:text-[#FFA500]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/recipes" className="hover:text-[#FFA500]">
                  Recipes
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#FFA500]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[#FFA500]">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-[#FFA500]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a

                
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFA500]"
              >
                <TiSocialFacebookCircular className="text-3xl" />
              </a>
              <a
                
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFA500]"
              >
                <FaTwitter className="text-3xl text-white" />
              </a>
              <a
               
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFA500]"
              >
                <FaInstagram className="text-3xl text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
