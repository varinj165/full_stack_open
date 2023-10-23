import { useState } from 'react'

const calcAverage = (props) => {
  return (props.good - props.bad) / (props.good+props.bad+props.neutral)
}

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

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

  if (good != 0 || neutral != 0 || bad != 0) {
    return (
      <div>
        <h1>Give Feedback!</h1>
        <Button onClick={handleClick('good')} text='good'/>
        <Button onClick={handleClick('neutral')} text='neutral'/>
        <Button onClick={handleClick('bad')} text='bad'/>
        
        <h2>Statistics</h2>
  
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={good+neutral+bad}/>
        <StatisticLine text="average" value={calcAverage({good,neutral,bad})}/>
        <StatisticLine text="positive" value={(good / (good+bad+neutral)) * 100}/>
      </div>
    )
  }

  else {
    return (
      <div>
        <h1>Give Feedback!</h1>
        <Button onClick={handleClick('good')} text='good'/>
        <Button onClick={handleClick('neutral')} text='neutral'/>
        <Button onClick={handleClick('bad')} text='bad'/>
        
        <p>Statistics Not Given</p>
      </div>
    )
  }

  
}

export default App