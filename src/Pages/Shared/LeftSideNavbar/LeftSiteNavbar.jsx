import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSiteNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json").then((res) =>
      res.json().then((data) => setCategories(data))
    );
  }, []);
  return (
    <div>
      <div>
        {categories.map((categorie) => (
          <Link className="font-semibold text-xl block p-3 ">
            {categorie.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSiteNavbar;
