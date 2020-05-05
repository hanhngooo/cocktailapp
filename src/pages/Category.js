import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Category() {
  const [cocktailCategory, setCocktailCategory] = useState([]);
  const { category } = useParams();
  console.log("iam para", category);

  //   const category = "Milk / Float / Shake";
  //   const parsed = category.replace(new RegExp(" ", "g"), "_");
  //   console.log(parsed);

  useEffect(() => {
    const apiurl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    async function fetchSpecificCategory() {
      const response = await axios.get(apiurl);

      console.log("haha", response.data.drinks);
      setCocktailCategory(response.data.drinks);
    }
    fetchSpecificCategory();
  }, []);

  return (
    <div>
      <h1>List of {decodeURIComponent(category)}</h1>
      <ul>
        {cocktailCategory.map((type) => {
          console.log(type.strDrink);
          return (
            <div>
              <li>
                <Link to={`/drink/${encodeURIComponent(type.idDrink)}`}>
                  {type.strDrink}
                </Link>

                <div>
                  <img src={type.strDrinkThumb} height="100" alt="pic" />
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Category;
