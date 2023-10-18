import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello World {props.name}, you are {props.age}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <>
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
    </>
  )
}

function App() {
  const now = new Date()
  const a = 10
  const b = 20
  const name = 'Varin'
  const age = 33
  console.log(now, a+b)

  return (
    <div>
      <p>Hello World, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name='Jaggi'age={26+10}/>
      <Hello name={name} age={age}/>
      <Footer />
    </div>
  )
}

export default App
