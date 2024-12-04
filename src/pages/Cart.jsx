import CartItem from "@/components/CartItem";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { clearCart } from "@/slices/cart/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total price
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <Layout>
      <div className="flex-col sm:flex-row   max-w-[90rem] mx-auto flex w-full gap-8">
        {/* Cart Section */}
        <Card className="flex-[0.7] max-w-7xl s w-full flex flex-col p-3 border border-gray-300 shadow-lg mx-auto">
          <div className="flex w-full justify-between items-center mb-4">
            <div className="flex gap-4 items-center">
              <h2 className="ont-bold text-2xl sm:text-2xl ">Cart</h2>
              <p className="text-sm sm:text-base">({items.length} products)</p>
            </div>
            <Button
              onClick={handleClearCart}
              variant="destructive"
              className="text-xs sm:text-sm"
            >
              Clear cart
            </Button>
          </div>

          <div className="flex flex-col w-full mt-4">
            {/* Cart Item Header */}
            <div className="w-full flex justify-between gap-4 text-sm sm:text-lg font-semibold px-4 pb-2">
              <p className="flex-[0.4]">Product</p>
              <p>Count</p>
              <p>Price</p>
              <p className="text-center">Action</p>
            </div>

            <Separator className="border border-gray-200" />
            <div className="mt-2 relative">
              {/* Render Cart Items */}
              <div className="overflow-y-auto max-h-[16rem] h-a sm:max-h-[26rem]">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Total Cart Section */}
        <div className="flex-[0.3] px-3 py-8">
          <Card className="h-fit bg-slate-200 rounded-3xl shadow-lg p-3 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="flex flex-col gap-8">
              <h2 className="font-semibold text-sm sm:text-base">Promo code</h2>
              <div className="flex w-full justify-between items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Type promo code"
                  className="text-sm sm:text-base"
                />
                <Button
                  className="rounded-2xl w-32 text-xs sm:text-sm"
                  type="button"
                >
                  Apply
                </Button>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <div className="flex w-full justify-between">
                  <p className="text-sm sm:text-base">Subtotal</p>
                  <span className="text-sm sm:text-base">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex w-full justify-between">
                  <p className="text-sm sm:text-base">Discount</p>
                  <span className="text-sm sm:text-base">$0.00</span>
                </div>
                <div className="flex w-full text-xl font-bold justify-between">
                  <p>Total</p>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <Button className="text-xs sm:text-sm">Checkout</Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
