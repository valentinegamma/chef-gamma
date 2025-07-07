import { useState } from "react";
import { getRecipeFromMistral } from "./Server.js";

export default function Claude() {
  const [recipe, setRecipe] = useState(null);

  const handleClick = async () => {
    const result = await getRecipeFromMistral();
    setRecipe(result);
  }

  return (
    <>
      <section className="claude-flex">
        <div>
          <h2>Ready for a recipe?</h2>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button 
          onClick={handleClick}>
            Get a recipe
        </button>
        </section>

        <section>
          {recipe}
        </section>
    </>
  )
}