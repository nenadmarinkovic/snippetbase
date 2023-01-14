import React from "react";

interface CategoryProps {
  name: string;
}

const Category = ({ name }: CategoryProps) => (
  <button className="text-sm font-light mt-3 pt-1 pl-3 pr-3 pb-1 mr-3 rounded-full border-none bg-[#222222] text-white">
    {name}
  </button>
);

export default Category;
