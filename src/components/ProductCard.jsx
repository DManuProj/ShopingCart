import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/slices/cart/cartSlice";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ id, image, count, name, price, description }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addItem({ id, image, name, price, count }));

    const existingItem = items.find((item) => item.id === id);
    if (existingItem) {
      toast.error("Item Already in Cart!", {
        duration: 5000,
        style: {
          padding: "16px",
          color: "#fff",
          background: "#282828",
          duration: 10000,
        },
      });
    } else {
      toast.success("Item Added to Cart Successfully !", {
        duration: 5000,
        style: {
          padding: "16px",
          color: "#fff",
          background: "#282828",
          duration: 10000,
        },
      });
    }
  };

  return (
    <Card className="border border-gray-300   ">
      <div className="flex flex-col p-4">
        <div className="h-80 bg-card rounded-lg items-center flex flex-col justify-center  relative">
          <img
            src={image}
            alt={name}
            className="block md:h-80 md:w-80 h-full w-full  object-cover"
          />
        </div>
        <Separator className="mt-4  border border-gray-300" />
        <div className="flex  h-16 mt-4 items-center text-2xl   justify-between font-semibold">
          <h2>{name}</h2>
          <span className="text-2xl font-bold">${price}</span>
        </div>
        <div className="mt-1 flex-wrap   ">
          <p>{description}</p>
        </div>
        <div className="mt-1 pt-4  ">
          <Button onClick={handleAddToCart} className="w-full">
            <ShoppingCart /> Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
