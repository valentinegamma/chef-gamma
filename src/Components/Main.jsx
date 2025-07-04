import { useState } from "react"
export default function Main() {

  const [ingredient, setIngredient] = useState([])

  const ingredientList = ingredient.map(item => <li key={item}>{item}</li>)
  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredient(prev => [...prev, newIngredient])
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
      {ingredientList}
    </main>
  )
}