import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Drink() {
  const [detailDrink, setDetailDrink] = useState([]);
  const { idDrink } = useParams();
  console.log("iam para", idDrink);

  useEffect(() => {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    async function fetchDetailDrink() {
      const response = await axios.get(apiUrl);

      console.log("haha", response.data.drinks);
      setDetailDrink(response.data.drinks);
    }
    fetchDetailDrink(idDrink);
  }, []);

  return (
    <div>
      {detailDrink.map((drink) => {
        console.log(drink.strDrink);

        return (
          <div>
            <h1>Detail of {drink.strDrink}</h1>
            <ul>
              <li>
                <div>
                  <img src={drink.strDrinkThumb} height="100" />
                  <p>Category: {drink.strCategory}</p>
                  <p>Glass: {drink.strGlass}</p>
                  <h4>Ingredients</h4>
                  <li></li>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Drink;
