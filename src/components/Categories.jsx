import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

const Categories = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((menuItems) => {
        setMenu(menuItems);
      });
  }, []);
  return (
    <div className="w-4/5 mx-auto">
      <SectionHeader
        subHeader={"from 11:00PM to 10:00PM"}
        header={"Order Online"}
      ></SectionHeader>
      <div>
        {menu
          .filter((item) => item.category === "popular")
          .map((menuItem) => (
            <div className="bg-gray-100 px-2 py-2 mt-5 text-green-600" key={menuItem.id}>
              <h2>{menuItem.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
