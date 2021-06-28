import React from "react";
import "./key";
import Axios from "axios";

function App() {
  var url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}
  &app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const getRecipe = async function () {
    var result = await Axios.get(url);
    console.log(result.data);
  };
  return (
    <div>
      <h1>Food Recipe Palaza </h1>
    </div>
  );
}

export default App;
