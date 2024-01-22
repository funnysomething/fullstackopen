const Course = ({course}) => {
    return <div>
        <h1>{course.name}</h1>
        {course.parts.map((part)=> <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
        <Total parts = {course.parts} />
    </div>
}

const Part = ({name,exercises})=> <p>{name} {exercises}</p>

const Total = ({parts}) =>  <p><b>total of {parts.reduce((sum, part)=>sum+=part.exercises, 0)} exercises</b></p>

export default Course