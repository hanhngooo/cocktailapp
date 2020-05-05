import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      //   const url = encodeURIComponent();
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      console.log(response.data.drinks);
      setCategories(response.data.drinks);
    }
    fetchCategories();
  }, []);

  return (
    <div>
      {categories.map((category) => {
        const cat = category.strCategory;
        return (
          <div>
            <li>
              <Link to={`/category/${encodeURIComponent(cat)}`}>{cat}</Link>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
