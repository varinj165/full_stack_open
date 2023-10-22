const Header = (props) => {
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.curpart} {props.curexercises}
      </p>
    </>
  )
}

const Content = (props) => {
  console.log(props)

  return (
    <>
      {props.parts.map((value,index) => (
        <Part key={index} curpart={value.name} curexercises={value.exercises}/>
      ))}
    </>
  )
}

const Total = (props) => {
  let totalSum = 0

  props.parts.forEach(element => {
    totalSum += element.exercises
  });
  return (
    <>
      <p>Number of exercises {totalSum}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App