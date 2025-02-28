import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-1">
          <div className="relative">
            <div className="w-full lg::h-[615px]">
              <Image
                src="/image/about.webp"
                alt=""
                width={615}
                height={700}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bg-[#e53e29] flex justify-center items-center w-48 h-48 border-8 absolute bottom-0 md:bottom-24 lg:bottom-0 right-0 md:right-0 lg:right-2">
              <div className="text-white">
                <h1 className="text-2xl font-medium">
                  <span className="text-6xl">25</span>+
                </h1>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div>
            <div className="px-3">
              <h3 className="text-lg text-[#e53e29] font-bold mb-2">
                About Us
              </h3>
              <h1 className="text-4xl lg:text-6xl font-bold mt-6">
                Safety Is Our First & Main Priority.
              </h1>
              <div className="mt-10 md:mt-6 border-s-2 border-[#e53e29] ps-10 lg:p-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <p className="mt-10 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed
                do eius mod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad min im veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequ at.
              </p>
              <div className="mt-14 ">
                <button className="hover:bg-[#e53e29] border-2 border-[#e53e29] transition-all px-6 py-4 hover:text-white font-medium">
                  OUR SERVICES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
