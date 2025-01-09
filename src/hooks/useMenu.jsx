import { useEffect, useState } from "react";


const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((menuItems) => {
        setMenu(menuItems);
        setLoading(false)
      });
  }, []);
  return [menu, loading]
}

export default useMenu;