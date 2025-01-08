import { useState } from 'react'
import { createLogger } from 'vite'


const Button = ({text,onClick}) => {
  return (
   <div>
     <button onClick={onClick}>{text}</button>
   </div>
  )

}


const MostViews = (props) =>{

  const votes_ = props.votes
  const anecdotes_ = props.anecdotes

  const max_idx = votes_.indexOf(Math.max( ... votes_))

  if(votes_[max_idx]> 0){

    return (
      <div>
        <p>Anecdote with most votes</p>
        <p>{anecdotes_[max_idx]}</p>
        <p>votes:{votes_[max_idx]}</p>
      </div>
     )
  }

  return (
    <div>No feedback given</div>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)


  const votes_ini = anecdotes.map((x) => 0);

  const [votes, setVotes] = useState(votes_ini)

  const handleClickRandom = () =>{
    const random_number = Math.floor(Math.random() * anecdotes.length)
    console.log(random_number);
    setSelected(random_number)
  }

  const handleClickVote = () =>{
    const points = [...votes]
    points[selected] += 1
    setVotes(points)
  }



  return (
    <div>
      <p>Anecdote of the day</p>
      <p>{anecdotes[selected]}</p>
      <p>votes:{votes[selected]}</p>
      <Button text="next anecdote" onClick={handleClickRandom}/>
      <Button text="vote" onClick={handleClickVote}/>
      <MostViews votes={votes} anecdotes={anecdotes}  />


      

    </div>
  )
}

export default App