import React from "react";
import "./RecipeTile.css";

const RecipeTile = ({ recipe }) => {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipe_tile">
        <img className="recipeTile_img" src={recipe["recipe"]["image"]} />
        <p className="recipeTile-label">{recipe["recipe"]["label"]}</p>
      </div>
    )
  );
};

export default RecipeTile;
