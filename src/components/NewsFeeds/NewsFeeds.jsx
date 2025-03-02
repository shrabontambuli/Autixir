import FlipCard from "@/components/FlipCard/FlipCard";
const NewsFeeds = () => {
  const news = [0, 1, 2, 3, 4, 5];

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-24">
        <div className="text-center my-24">
          <h3 className="text-lg text-[#e53e29] font-bold mb-2">
            [ blog & insights ]
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">News Feeds <span className="text-[#e53e29]">.</span></h1>
        </div>
        {/* Newsfeed Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-10 mt-24">
          {/* Newsfeed Item */}
          {news.map((item) => (
            <div key={item}>
              <FlipCard />
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <button className="hover:bg-[#e53e29] border-2 border-[#e53e29] transition-all w-32 h-12 mx-auto md:mx-0 hover:text-white font-medium flex justify-center items-center gap-2">
            SEE MORE
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsFeeds;
