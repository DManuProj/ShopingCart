import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../slices/cart/cartSlice";
import { Trash2 } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const { id, name, color, price, count, image } = item;

  const dispatch = useDispatch();
  // Dispatch increment action with item id
  const handleIncrement = () => {
    dispatch(incrementQuantity(id));
  };
  // Dispatch decrement action with item id
  const handleDecrement = () => {
    dispatch(decrementQuantity(id));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="w-full  flex justify-between items-center bg-slate-50 p-3 mb-2 rounded text-sm sm:text-base">
      {/* Product Info */}
      <div className="flex items-center gap-4 flex-[0.4]">
        <div className="h-10 w-16 sm:h-20 sm:w-20 w bg-gray-300 rounded">
          <img
            src={image}
            alt={name}
            className="object-cover h-full w-full rounded"
          />
        </div>
        <div>
          <p className="font-bold text-xs sm:text-base">{name}</p>
          <p className="text-xs sm:text-sm text-gray-500">{color}</p>
        </div>
      </div>

      {/* Count */}
      <div className="flex w-24  -mr-7  justify-center items-center gap-2">
        <button
          onClick={handleDecrement}
          className="px-2 py-1 bg-gray-200 rounded text-xs sm:text-sm"
          disabled={count <= 1} // Disable decrement if count is 1
        >
          <span>-</span>
        </button>
        <p className="text-sm sm:text-base">{count}</p>
        <button
          onClick={handleIncrement}
          className="px-2 py-1 bg-gray-200 rounded text-xs sm:text-sm"
        >
          <span>+</span>
        </button>
      </div>

      {/* Price */}
      <div className="text-gray-700   w-20 justify-center flex mr-9  text-sm sm:text-base">
        ${(price * count).toFixed(2)}
      </div>

      {/* Action */}
      <button
        onClick={handleRemoveItem}
        className="text-red-500 font-bold text-xs sm:text-sm"
      >
        <Trash2 />
      </button>
    </div>
  );
};

export default CartItem;
