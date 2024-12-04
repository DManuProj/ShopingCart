import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import ProductList from "@/components/ProductList";
import { Input } from "@/components/ui/input";

import Tabs from "./Tabs";
import {
  airpodsMax,
  appleWatch,
  echoDot,
  iphone15,
  pixel8,
  pixelBuds,
  quietComfort,
  soundLink,
} from "@/assets/products";
import { Toaster } from "react-hot-toast";

const productsDummy = [
  {
    categoryId: "1",
    image: airpodsMax,
    _id: "1",
    name: "AirPods Max",
    price: 549.0,
    count: 1,
    description:
      "Premium headphones with immersive sound and active noise cancellation.",
  },
  {
    categoryId: "3",
    image: echoDot,
    _id: "2",
    name: "Echo Dot",
    price: 99.0,
    count: 1,
    description:
      "Compact smart speaker with Alexa for music, calls, and smart home control.",
  },
  {
    categoryId: "2",
    image: pixelBuds,
    _id: "3",
    name: "Galaxy Pixel Buds",
    price: 99.0,
    count: 1,
    description:
      "Wireless earbuds with clear sound, touch controls, and a sleek design.",
  },
  {
    categoryId: "1",
    image: quietComfort,
    _id: "4",
    name: "AirPods Max Pro",
    price: 249.0,
    count: 1,
    description:
      "Advanced headphones with superior sound quality and improved noise canceling.",
  },
  {
    categoryId: "3",
    image: soundLink,
    _id: "5",
    name: "Bose SoundLink",
    price: 119.0,
    count: 1,
    description:
      "Portable Bluetooth speaker with deep, powerful sound and durable design.",
  },
  {
    categoryId: "5",
    image: appleWatch,
    _id: "6",
    name: "Apple Watch 9",
    price: 699.0,
    count: 1,
    description:
      "Smartwatch for fitness tracking, notifications, and everyday convenience.",
  },
  {
    categoryId: "4",
    image: iphone15,
    _id: "7",
    name: "Apple iPhone 15",
    price: 1299.0,
    count: 1,
    description:
      "Latest smartphone with advanced cameras and a stunning display.",
  },
  {
    categoryId: "4",
    image: pixel8,
    _id: "8",
    name: "Galaxy Pixel 8",
    price: 549.0,
    count: 1,
    description:
      "Smartphone with brilliant photos, AI features, and great performance.",
  },
];

const categories = [
  { _id: "ALL", name: "All" },
  { _id: "1", name: "Headphones" },
  { _id: "2", name: "Earbuds" },
  { _id: "3", name: "Speakers" },
  { _id: "4", name: "Mobile Phones" },
  { _id: "5", name: "Smart Watches" },
];

const Products = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("ALL");
  const [products, setProducts] = useState(productsDummy);
  const [searchQuery, setSearchQuery] = useState("");

  const filterProducts = products.filter((product) => {
    const matchedCategory =
      selectedCategoryId === "ALL" || product.categoryId === selectedCategoryId;
    const matchedSearchQuery = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchedCategory && matchedSearchQuery;
  });

  const handleTabClick = (_id) => {
    setSelectedCategoryId(_id);
  };

  return (
    <section id="products" className="max-w-[90rem] mx-auto">
      <h2 className="text-4xl mt-8 text-center sm:text-start  font-semibold">
        Explore Our Products Here
      </h2>
      <div className=" flex w-full bg-slate-200  max-w-sm mt-5 items-center  space-x-2">
        <Input
          type="text"
          placeholder="Search Products"
          className="h-10 border border-gray-400   w-full "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Separator className="mt-4 font-bold" />
      <div className="flex gap-4 mt-4 flex-wrap">
        {categories.map((category) => (
          <Tabs
            key={category._id}
            _id={category._id}
            selectedCategoryId={selectedCategoryId}
            name={category.name}
            onTabClick={handleTabClick}
          />
        ))}
      </div>

      <main className="mt-6">
        {filterProducts.length === 0 && (
          <h1 className="text-2xl flex w-full justify-center h-32 bg-slate-500 items-center">
            No products found.
          </h1>
        )}
        <ProductList products={filterProducts} />
      </main>
      <Toaster position="bottom-right" />
    </section>
  );
};

export default Products;
