const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><strong>Total of {sum} exercises</strong></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {

  return (
    <>
      {parts.map((element) => (
        <Part key={element.id}part={element}/>))}  
    </>
  )
}

const Course = ({ course }) => {
  const sum = course.parts.reduce((totalSum,curValue) => (
    totalSum + curValue.exercises 
  ),0)
  
  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total sum={sum}/>
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App