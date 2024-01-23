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
      <Header course = {course}/>
      <Content course = {course} />
      <Total course = {course}/>
    </div>
  )
}

const Header = props => <h1>{props.course.name}</h1>

const Content = props => {
    return (<>
      <Part part = {props.course.parts[0]}/>
      <Part part = {props.course.parts[1]}/>
      <Part part = {props.course.parts[2]}/>
    </>
    )
}

const Part = props => <p>{props.part.name} {props.part.exercises}</p>

const Total = props => {
  var total = 0
  props.course.parts.forEach(
    part => total += part.exercises
  )
  return <p>{total}</p>
}

export default App