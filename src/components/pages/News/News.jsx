import NewsCard from "@/components/NewsCard/NewsCard";
import NewsSideContent from "./NewsSideContent";
import ServiceTime from "@/components/ServiceTime/ServiceTime";
import NewsBanner from "./NewsBanner";

const News = () => {
  const news = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <div>
        <NewsBanner />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-10 my-28 px-2 lg:px-0">
          <div className="lg:col-span-2">
            <div className="grid grid-flow-row gap-10">
              {news?.map((item, index) => (
                <NewsCard key={index} data={item} />
              ))}
            </div>
          </div>
          <div>
            <NewsSideContent />
          </div>
        </div>
      </div>
      <div>
        <ServiceTime />
      </div>
    </div>
  );
};

export default News;
