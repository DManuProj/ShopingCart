import { LogOut, Menu, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { logoutUser } from "@/slices/auth/authSlice";
import { clearCartOnLogout } from "@/slices/cart/cartSlice";
import { Toaster } from "react-hot-toast";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { items } = useSelector((state) => state.cart);
  const { currentUser, isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCartOnLogout());
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <nav className="  flex items-center justify-between py-6 max-w-[90rem] mx-auto bg-white ">
      {/* Logo Section */}
      <div className="font-semibold text-3xl">
        <Link to="/">OcTars</Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-4">
          <Link to="/">Home</Link>
        </div>
        {isAuthenticated ? (
          <div className="flex gap-2">
            <Link to="/cart" className="flex items-center gap-2">
              <ShoppingCart size={32} />
              {items.length > 0 && (
                <span className="relative mb-6 -ml-4 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
              <span>Cart</span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="bg-black text-white rounded-full w-10 h-10">
                {currentUser && currentUser?.name?.toUpperCase().split("")[0]}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel
                  onClick={handleLogout}
                  className="cursor-pointer items-center text-red-700 flex gap-4"
                >
                  Logout
                  <LogOut className="size-4" />
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Button aschild="true">
            <Link to="/register">Sign Up</Link>
          </Button>
        )}
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsDrawerOpen(true)}>
          <Menu size={32} />
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed z-20 top-0 right-0 h-full w-full max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="absolute top-4 right-4 text-white bg-slate-800 p-2 rounded-full"
        >
          <X />
        </button>

        {/* Drawer Content */}
        <div className="flex flex-col items-center p-6 mt-10 ">
          <Link to="/" className="py-2 text-lg">
            Home
          </Link>
          <Link to="/shop" className="py-2 text-lg">
            Shop
          </Link>
          {isAuthenticated ? (
            <div>
              <Link to="/cart" className="py-2 text-lg flex items-center gap-2">
                <ShoppingCart size={24} />
                {items.length > 0 && (
                  <span className="absolute mb-5 ml-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
                <span>Cart</span>
              </Link>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="w-full mt-4 text-red-700"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button aschild="true" className="w-full mt-4">
              <Link to="/register">Sign Up</Link>
            </Button>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
      <Toaster position="bottom-right" />
    </nav>
  );
};

export default NavBar;
