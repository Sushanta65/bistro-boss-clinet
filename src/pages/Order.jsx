import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderImg from "../assets/shop/banner2.jpg";
import Cover from "../components/shared/Cover";
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import FoodCard from "../components/FoodCard";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="w-4/5 mx-auto">
      <Cover coverImg={orderImg} title="Order Now"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          <div className="grid md:grid-cols-3 my-10 gap-10">
            {salad.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 my-10 gap-10">
            {pizza.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 my-10 gap-10">
            {soup.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 my-10 gap-10">
            {desserts.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 my-10 gap-10">
            {offered.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
