import { useState } from "react"

export default function State() {
  const [state, setState] = useState(true)

  function changeValue() {
    return(
      setState(prev =>  !prev)
    )
  }

  return(
    <>
      <section className="state-section">
        <button
          onClick={changeValue} className="State-btn">
          { state? "Yes": "No"}
        </button>
      </section>
    </>
  )
}