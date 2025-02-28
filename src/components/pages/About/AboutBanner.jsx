import Link from "next/link";

const AboutBanner = () => {
  return (
    <div className="bg-[url('/image/contact-bg.jpg')] bg-center bg-cover w-full h-[450px]">
      <div
        className="w-full h-full"
        style={{ backgroundColor: "rgba(7, 28, 31, .9)" }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center md:text-start md:flex md:justify-between items-center h-[450px] md:p-6 lg:p-0 pt-32 md:pt-0">
            <div>
              <h3 className="text-lg text-[#e53e29] font-bold">
                Welcome to our company
              </h3>
              <h1 className="text-white text-5xl md:text-6xl font-bold mt-6">
                About Us
              </h1>
            </div>
            <div className="flex items-center justify-center md:justify-start mt-10">
              <Link
                href="/"
                className="text-white hover:text-[#e53e29] font-medium transition-all"
              >
                Home
              </Link>
              <span className="mx-4 text-gray-500">|</span>
              <h4 className="text-[#e53e29] font-medium">About Us</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
