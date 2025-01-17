import { useState } from 'react'


const Button = ({text,onClick}) => {
   return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
   )

}


const StatisticLine = ({text,value}) =>{
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
} 


const Statistics = ({good, neutral, bad}) =>{

  const all = bad + neutral + good
  const average = (good - bad)/all 
  const positive = (good/all  * 100) + "%"

  if(all>0){

    return (
      <div>
        <p>statistics</p>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </tbody>
        </table>
        
      </div>
    )

  }else{
    return(
      <div>
        <p>statistics</p>
        <p>No feedback given</p>
      </div>
    )
  }

  

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = ()=>{
    setGood(good + 1)
  }
  const handleClickNeutral = ()=>{
    setNeutral(neutral + 1)
  }
  const handleClickBad = ()=>{
    setBad(bad + 1)
  }

  return (
    <div>
      <p>give feedback</p>
      <Button text="good" onClick={handleClickGood}  />
      <Button text="neutral" onClick={handleClickNeutral}  />
      <Button text="bad"  onClick={handleClickBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App