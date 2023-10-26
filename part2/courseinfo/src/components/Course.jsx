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

export default Course