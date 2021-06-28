import React, { useState } from "react";
import { YOUR_APP_ID, API_KEY } from "./key";
import Axios from "axios";
import "./app.css";
import RecipeTile from "./Component/RecipeTile";

function App() {
  const [query, Setquery] = useState("");
  const [recipe, setrecipe] = useState([]);
  const [healthLabel, sethealthLabel] = useState("");

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${API_KEY}&&health=${healthLabel}`;

  const getRecipe = async function () {
    var result = await Axios.get(url);
    setrecipe(result.data.hits);
    console.log(result.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipe();
  };
  return (
    <div className="app">
      <h1>Food Recipe Palaza </h1>
      <form className="search_box" onSubmit={onSubmit}>
        <input
          className="search_input"
          type="text"
          placeholder="Enter Ingredients"
          value={query}
          onChange={(e) => Setquery(e.target.value)}
        />
        <input className="search_submit" type="submit" value="Search" />
        <select className="healthLabel">
          <option onClick={() => sethealthLabel("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabel("alcohol-free")}>Alcohol-free</option>
          <option onClick={() => sethealthLabel("immuno-supportive")}>Immune-Supportive</option>
          <option onClick={() => sethealthLabel("celery-free")}>Celery-free</option>
          <option onClick={() => sethealthLabel("dairy")}>Dairy</option>
          <option onClick={() => sethealthLabel("eggs")}>Eggs</option>
          <option onClick={() => sethealthLabel("fish")}>Fish</option>
          <option onClick={() => sethealthLabel("fodmap-free")}>FODMAP free</option>
          <option onClick={() => sethealthLabel("gluten")}>Gluten</option>
          <option onClick={() => sethealthLabel("keto")}>Keto</option>
          <option onClick={() => sethealthLabel("kidney-friendly")}>kidney-friendly</option>
          <option onClick={() => sethealthLabel("kosher")}>kosher</option>
          <option onClick={() => sethealthLabel("low-potassium")}>low-potassium</option>
        </select>
      </form>

      <div className="app_recipe">
        {recipe.map((r) => {
          return <RecipeTile recipe={r} />;
        })}
      </div>
    </div>
  );
}

export default App;
