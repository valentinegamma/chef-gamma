import { useState } from "react"
import ReactMarkdown from 'react-markdown'
import { getRecipeFromMistral } from "./Server.js";

export default function Main() {

  const [ingredient, setIngredient] = useState([])
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const ingredientList = ingredient.map(item => <li key={item}>{item}</li>)
  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient")
    {newIngredient ? setIngredient(prev => [...prev, newIngredient]) : null}
  }

  const handleClick = async () => {
    setLoading(true);
    const result = await getRecipeFromMistral(ingredient);
    setRecipe(result);
    setLoading(false);
  }

  return(
    <main>
      <form action={handleSubmit}>
        <input 
          className="form-input"
          type="text" 
          placeholder="eg. pork"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="form-button"> Add ingredient </button>
      </form>
      {ingredient.length > 0 ? 
        <>
          <h1 className="ingredient-heading">Ingredients on hand:</h1>
          {ingredientList}
          <button className="clear-button" onClick={() => setIngredient([])}>
            Clear ingredients
          </button>
        </>
      : null}

      <section className="claude-flex">
        <div>
          <h2>Ready for a recipe?</h2>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={handleClick}>Get a recipe</button>
      </section>

      <section>
        {loading ? (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#333"
            style={{ display: "block", margin: "2rem auto" }}
          >
            <g fill="none" fillRule="evenodd">
              <g transform="translate(2 2)" strokeWidth="3">
                <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"/>
                </path>
              </g>
            </g>
          </svg>
        ) : (
          <section className="recipe-container">
            <ReactMarkdown>{recipe}</ReactMarkdown>
          </section>
        )}
      </section>
    </main>
  )
}