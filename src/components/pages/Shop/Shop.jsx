"use client";
import ShopBanner from "./ShopBanner";
import ServiceTime from "@/components/ServiceTime/ServiceTime";
import ShopSideContent from "./ShopSideContent";
import { useState } from "react";
import ProductCard from "@/components/ProductCards/ProductCard";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Wheel Bearing Retainer",
      price: 118.26,
      oldPrice: 162.0,
      rating: 4,
      imageUrl: "/image/1.webp",
      isNew: true,
    },
    {
      id: 2,
      name: "Brake Conversion Kit",
      price: 68.0,
      oldPrice: 85.0,
      rating: 4,
      imageUrl: "/image/9.webp",
      isNew: true,
    },
    {
      id: 3,
      name: "Shock Mount Insulator",
      price: 73.6,
      oldPrice: 92.0,
      rating: 5,
      imageUrl: "/image/11.webp",
      isNew: false,
    },
  ];
  const [sortOption, setSortOption] = useState("Default Sorting");

  const sortedProducts = () => {
    switch (sortOption) {
      case "Sort by price: low to high":
        return [...products].sort((a, b) => a.price - b.price);
      case "Sort by price: high to low":
        return [...products].sort((a, b) => b.price - a.price);
      case "Sort by new arrivals":
        return products.filter((product) => product.isNew);
      default:
        return products;
    }
  };
  const sortingOptions = [
    "Default Sorting",
    "Sort by popularity",
    "Sort by new arrivals",
    "Sort by price: low to high",
    "Sort by price: high to low",
  ];
  return (
    <div>
      <div>
        <ShopBanner />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-10 my-16 md:28 px-2 lg:px-0">
          <div className="lg:col-span-2">
            <div className=" text-center md:flex justify-between items-center mb-10">
              <p className="font-semibold text-lg mb-8">
                Showing 1-{products.length} of {products.length} results
              </p>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border focus:outline-none focus:ring-1 focus:ring-[#e53e29] p-2 rounded"
              >
                {sortingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {sortedProducts()?.map((item, index) => (
                <ProductCard key={index} data={item} />
              ))}
            </div>
          </div>
          <div>
            <ShopSideContent />
          </div>
        </div>
      </div>
      <div>
        <ServiceTime />
      </div>
    </div>
  );
};

export default Shop;
