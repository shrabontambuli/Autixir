import Image from "next/image";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-[#F2F6F7]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-9 max-w-screen-2xl mx-auto py-20 px-7 lg:px-0">
        <div>
          <div className="w-44">
            <Image
              src="/image/logo.webp"
              alt="logo"
              width={101}
              height={45}
              priority
            />
          </div>
          <p className="text-base text-gray-600 mt-5">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum is dummy text of the printing.
          </p>
          <ul className="mt-5 space-y-6">
            <li className="text-gray-600 hover:text-[#e53e29] transition-all flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              Brooklyn, New York, United States
            </li>
            <li className="text-gray-600">
              <a
                href="#"
                className="hover:text-[#e53e29] transition-all flex items-center gap-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                +0123-456789
              </a>
            </li>
            <li className="text-gray-600">
              <a
                href="#"
                className="hover:text-[#e53e29] transition-all flex items-center gap-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                example@example.com
              </a>
            </li>
            <div className="flex justify-between w-6/12">
              <li className="text-gray-600">
                <a
                  href="#"
                  className="hover:text-[#e53e29] transition-all flex items-center gap-4"
                >
                  <FaFacebookF size={20} />
                </a>
              </li>
              <li className="text-gray-600">
                <a
                  href="#"
                  className="hover:text-[#e53e29] transition-all flex items-center gap-4"
                >
                  <FaTwitter size={20} />
                </a>
              </li>
              <li className="text-gray-600">
                <a
                  href="#"
                  className="hover:text-[#e53e29] transition-all flex items-center gap-4"
                >
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li className="text-gray-600">
                <a
                  href="#"
                  className="hover:text-[#e53e29] transition-all flex items-center gap-4"
                >
                  <FaYoutube size={20} />
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-bold mt-5">Company</h1>
          <ul className="mt-5 space-y-6">
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">About</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">Blog</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">All Products</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">Locations Map</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">FAQ</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-bold mt-5">Services</h1>
          <ul className="mt-5 space-y-6">
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">Order tracking</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">Wish List</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">Login</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">My account</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">Promotional Offers</a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-bold mt-5">Customer Care</h1>
          <ul className="mt-5 space-y-6">
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">Login</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">My account</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">Wish List</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">Order tracking</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">FAQ</a>
            </li>
            <li className="text-gray-600 footer-li transition-all flex items-center gap-4">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-bold mt-5">Customer Care</h1>
          <p className="text-base text-gray-600 mt-5">
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>

          <form className="mt-10 flex items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-14 px-5 py-3 text-sm text-gray-600rounded-s-md focus:outline-none focus:ring-1 focus:ring-[#e53e29]"
            />
            <button
              type="submit"
              className="px-4 py-3 h-14 text-sm font-bold text-white bg-[#e53e29] rounded-e-md hover:bg-slate-800 transition-all"
            >
              <IoIosSend size={20} />
            </button>
          </form>

          <h1 className="text-xl font-bold mt-8">We Accept</h1>
          <div className="mt-6">
            <Image
              src="/image/payment-4.webp"
              alt="logo"
              width={300}
              height={60}
              priority
            />
          </div>
        </div>
      </div>
      <div className="bg-[#1A202C] py-10 text-center text-white">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-sm">�� 2023 Autixir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
