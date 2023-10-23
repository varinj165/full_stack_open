import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (id) => () => {
    if (id === "good") {
      setGood(good + 1)
    }

    else if (id === "neutral") {
      setNeutral(neutral + 1)
    }

    else {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <h1>Give Feedback!</h1>
      <button onClick={handleClick('good')}>good</button>
      <button onClick={handleClick('neutral')}>neutral</button>
      <button onClick={handleClick('bad')}>bad</button>
      
      <h2>Statistics</h2>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App