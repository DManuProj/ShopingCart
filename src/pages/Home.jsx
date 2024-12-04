import Layout from "@/components/Layout";
import Products from "@/components/Products";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <section className="flex flex-col h-full max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg min-h-[60vh] overflow-hidden">
          {/* Hero Content */}

          <div className="flex flex-col justify-center bg-[#f4f8f9] gap-4 p-8 md:p-16">
            <h1 className="text-4xl md:text-5xl font-semibold ">
              Premium Product Online Shop
            </h1>
            <p className="text-gray-700">
              Explore a wide range of high-quality products handpicked for you.
              From the latest tech gadgets to stylish accessories, we offer the
              best in class.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <Products />
    </Layout>
  );
};

export default Home;
