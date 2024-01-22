import { useState } from 'react'

const App = () => {

  const HandleVote = () => {
    const copy = {...votes}
    if (selected in copy){
      copy[selected] += 1
    } else {
      copy[selected] = 1
    }
    if ("max" in copy){
      if (copy[selected] > copy[copy["max"]]){
        copy["max"] = selected
      }
    } else{
      copy["max"] = selected
    }
    setVotes(copy)
  }

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
  const [votes, setVotes] = useState({})

  console.log("Random number selected", selected)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Votes votes={votes} selected={selected} />
      <Button onClick={HandleVote} text="Vote"/>
      <Button onClick={()=>setSelected(Math.floor(Math.random() * (anecdotes.length)))} text="Next Anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votes["max"]]}</p>
    </div>
  )  
}

const Votes = ({votes, selected}) => {
  if (selected in votes){
    return <p>has {votes[selected]} votes</p>
  } else {
    return <p>has 0 votes</p>
  }
}

const Button = ({onClick, text}) => 
  <button onClick={onClick}>{text}</button>

export default App