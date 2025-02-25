const Subscribe = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-14 md:mt-32">
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">We make your inbox better</h1>
          <p className="text-lg text-gray-700 mb-10 md:w-7/12 mx-auto">
            Sign up to our newsletter to receive grooming tips, style
            inspiration, exclusive access to pre-launch product pricing and
            more.
          </p>
          <form className="mt-10 flex items-center p-2 md:p-0 md:w-9/12 mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-20 px-5 py-3 rounded-s-md focus:outline-none focus:ring-1 focus:ring-[#e53e29]"
            />
            <button
              type="submit"
              className="px-7 py-3 h-20 text-sm font-bold text-white bg-[#e53e29] rounded-e-md hover:bg-slate-800 uppercase"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
