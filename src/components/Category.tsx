import React from "react";

interface CategoryProps {
  name: string;
}

const Category = ({ name }: CategoryProps) => <button>{name}</button>;

export default Category;
