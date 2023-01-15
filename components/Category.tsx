import React from "react";

interface CategoryProps {
  name: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Category = ({ name, onClick }: CategoryProps) => (
  <button
    onClick={onClick}
    className="text-sm font-normal mt-3 pt-1 pl-3 pr-3 pb-1 mr-3 rounded-full border-none bg-[#e6e5e7] text-[#222222]"
  >
    {name}
  </button>
);

export default Category;
