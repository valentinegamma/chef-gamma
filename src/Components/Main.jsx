import { useState } from "react"
import { getRecipeFromMistral } from "./Server.js";

export default function Main() {

  const [ingredient, setIngredient] = useState([])
  const [recipe, setRecipe] = useState(null);

  const ingredientList = ingredient.map(item => <li key={item}>{item}</li>)
  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient")
    {newIngredient ? setIngredient(prev => [...prev, newIngredient]) : null}
  }

  const handleClick = async () => {
    const result = await getRecipeFromMistral(ingredient);
    setRecipe(result);
  }

  return(
    <main>
      <form action={handleSubmit}
      >
        <input 
        className="form-input"
        type="text" 
        placeholder="eg. pork"
        aria-label="Add ingredient"
        name="ingredient"
        />
        <button className="form-button"> Add ingredient </button>
      </form>
      {ingredient.length > 0 ? <h1 className="ingredient-heading">Ingredients on hand:</h1>: null}
      {ingredientList}

      <section className="claude-flex">
        <div>
          <h2>Ready for a recipe?</h2>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={handleClick}>Get a recipe</button>
      </section>

      <section>
        {recipe}
      </section>
    </main>
  )
}