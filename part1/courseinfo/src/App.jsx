import { useState } from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}


const Part = (props) =>{
  return (
    <p>{props.part} {props.exercises}</p>
  )
}


const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </>
  )
}

const Total  = (props) =>{
  return (
    <>
    <p>Number of exercises {props.parts[0].exercises  + props.parts[1].exercises + props.parts[2].exercises }</p>
    </>
  )
}


const Hello = ({ name, age }) => {

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

// const App = () => {


//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   const parts = course.parts


  
//   const name = 'Arto Hellas'
//   const age= 31


//   const Boton = (props) => {
//     const {counter} = props
//     return (
//       <div>{counter}</div>
//     )
//   }


//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//       <Hello  name={name} age={age} />

//     </div>
//   )
// }


const Display = ({ counter }) => <div>{counter}</div>


const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}


// const App = () => {
//   const [counter, setCounter] = useState(0)

//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => {

//     console.log('increasing, value before', counter)
//     setCounter(counter + 1)
//   }

//   const decreaseByOne = () => { 

//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {

//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setToZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   )
// }


// const App = () => {

//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0
//   })

//   const handleLeftClick = ()=>{
//     setClicks({...clicks,left:clicks.left +1})
//   }


//   const handleRightClick = ()=>{
//     setClicks({...clicks,right: clicks.right + 1})
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )

// }


const App = () =>{

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleLeftClick = ()=>{
    const updateLeft = left + 1
    setLeft(updateLeft)
    setAll(allClicks.concat("L"))
    setTotal(right+updateLeft)
  }

  const handleRightClick = ()=>{
    const updateRight = right + 1
    setRight(updateRight)
    setAll(allClicks.concat("R"))
    setTotal(left+updateRight)
  }


  return(
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>{total}</p>

    </div>
  )

}


export default App