import ServiceTime from "@/components/ServiceTime/ServiceTime";
import WishlistBanner from "./WishlistBanner";
import WishlistProducts from "./WishlistProducts";

const Wishlist = () => {
  return (
    <>
      <div>
        <WishlistBanner />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <WishlistProducts />
      </div>
      <div>
        <ServiceTime />
      </div>
    </>
  );
};

export default Wishlist;
