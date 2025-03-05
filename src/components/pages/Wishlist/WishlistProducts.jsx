import Image from "next/image";
import { FaCartPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
const WishlistProducts = () => {
  return (
    <div>
      <div className="overflow-x-auto my-20">
        <table className="min-w-full border-b">
          <tbody>
            <tr className="h-16">
              <td className="py-2 px-4 border-b">
                <button className="border-2 rounded-full hover:bg-[#e53e29] hover:text-white transition-all p-3">
                  <RiDeleteBin6Line size={24} />
                </button>
              </td>
              <td className="py-2 px-4">
                <div className="w-24 h-24">
                  <Image
                    src="/image/1.webp"
                    alt="img"
                    width={100}
                    height={100}
                    style={{ objectFit: "cover" }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </td>
              <td className="py-2 px-4">
                <h2 className="text-xl font-semibold hover:text-[#e53e29]">
                  Wheel Bearing Reta
                </h2>
              </td>
              <td className="py-2 px-4">
                <h4 className="text-base text-[#e53e29] font-semibold">
                  $118.26
                </h4>
              </td>
              <td className="py-2 px-4 text-lg font-semibold">In Stock</td>
              <td className="py-2 px-4">
                <button
                  className="px-4 inline-flex items-center justify-between w-32 py-3 text-sm font-bold text-white hover:bg-[#e53e29] bg-slate-800 transition-all"
                >
                    Add to cart
                  <FaCartPlus size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishlistProducts;
