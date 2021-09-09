import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import { YOUR_APP_ID, YOUR_APP_KEY } from "./keys";
function App() {
  const [value, setValue] = useState("Avocado");
  const [data, setData] = useState(null);
  const [healthLables, setHealthLables] = useState("alcohol-free");
  const id = YOUR_APP_ID
  const key = YOUR_APP_KEY
  var url = `https://api.edamam.com/search?q=${value}&app_id=${id}&app_key=${key}&health=${healthLables.toString()}`;
  async function GetData() {
    const res = await fetch(url);
    const result = await res.json();
    const recipe = result.hits;
    return setData(recipe);
  }
  const onsubmit = (e) => {
    e.preventDefault();
    GetData();
  };

  return (
    <div className="app">
      <h1 className="app__title">Healthy Recipes</h1>
      <form className="app__searchForm" onSubmit={onsubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="Enter Any Ingedient"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>
      <div>
        <select
          onChange={(e) => {
            setHealthLables(e.target.value);
          }}
          className="app__healthlables"
        >
          <option value="alcohol-free"> alcohol-free </option>

          <option value="celery-free"> celery-free </option>

          <option value="crustacean-free"> crustacean-free </option>

          <option value="dairy-free"> dairy-free </option>

          <option value="egg-free"> egg-free </option>

          <option value="fish-free"> fish-free </option>

          <option value="fodmap-free"> fodmap-free </option>

          <option value="gluten-free"> gluten-free </option>

          <option value="immuno-supportive"> immuno-supportive </option>

          <option value="keto-friendly"> keto-friendly </option>

          <option value="kidney-friendly"> kidney-friendly </option>

          <option value="kosher"> kosher </option>

          <option value="low-fat-abs"> low-fat-abs </option>

          <option value="low-potassium"> low-potassium </option>

          <option value="low-sugar"> low-sugar </option>

          <option value="lupine-free"> lupine-free </option>

          <option value="mustard-free"> mustard-free </option>

          <option value="no-oil-added"> no-oil-added </option>

          <option value="paleo"> paleo </option>

          <option value="peanut-free"> peanut-free </option>

          <option value="pescatarian"> pescatarian </option>

          <option value="pork-free"> pork-free </option>

          <option value="red-meat-free"> red-meat-free </option>

          <option value="sesame-free"> sesame-free </option>

          <option value="shellfish-free"> shellfish-free </option>

          <option value="soy-free"> soy-free </option>

          <option value="sugar-conscious"> sugar-conscious </option>

          <option value="tree-nut-free"> tree-nut-free </option>

          <option value="vegan"> vegan </option>

          <option value="vegetarian"> vegetarian </option>

          <option value="wheat-free"> wheat-free </option>
        </select>
      </div>
      <div className="app__card">
        {data &&
          data.map((item, index) => {
            return (
              <Card
                key={index}
                item={item}
                index={index}
                link={item.recipe.url}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
