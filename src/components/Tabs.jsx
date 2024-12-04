import React from "react";

const Tabs = ({ _id, selectedCategoryId, name, onTabClick }) => {
  const handleClick = () => {
    onTabClick(_id);
  };
  return (
    <button
      className={`border ${
        _id === selectedCategoryId ? "bg-[#edeef1]" : "border-[#edeef1]"
      } px-2 py-1 rounded-md`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Tabs;
