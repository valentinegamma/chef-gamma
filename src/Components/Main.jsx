import { useState } from "react"
import Claude from "./Claude"
export default function Main() {

  const [ingredient, setIngredient] = useState(['Milk', 'Meat'])

  const ingredientList = ingredient.map(item => <li key={item}>{item}</li>)
  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient")
    {newIngredient ? setIngredient(prev => [...prev, newIngredient]) : null}
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

      {ingredient.length >=3 ? <Claude />: null}
    </main>
  )
}