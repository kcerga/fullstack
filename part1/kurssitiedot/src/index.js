import React from 'react'
import ReactDOM from 'react-dom'
/**
 * Fullstack osa1 kurssitiedot
 * 
 * 
 */

 //Component Header to handle the title 
 const Header = (props) => {
     return (
         <h1>{props.course.title}</h1>
     )
 }

 //Component that renders the names and exercises of each part
 const Part = (props) => {
     return (
         <p><b>Part:</b> {props.part}, <b>Exercises:</b> {props.exercise}</p>
     )
 }

 //Content- component that handles each of the Part components
 const Content = (props) => {
     return (
         <div>
            <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercise} />
            <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercise} />
            <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercise} />
         </div>
     )
 }

 //Total amount of exercises
 const Total = (props) => {
     return (
         <p>Total number of exercises: {props.course.parts[0].exercise + props.course.parts[1].exercise + props.course.parts[2].exercise}</p>
     )
 }

const App = () => {
    //A constant that takes all the information of the course (title and parts names and exercises)
  const course = {
      title: 'Half Stack application development',
      parts: [
          {
              name: 'Fundamentals of React',
              exercise: 10
          },
          {
            name: 'Using props to pass data',
            exercise: 7
        },
        {
            name: 'State of a component',
            exercise: 14
        }
      ]
    }

  return (

    //Send the course information to the other components
    <div>
      <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))