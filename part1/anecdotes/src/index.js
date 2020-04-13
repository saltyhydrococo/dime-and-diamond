import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const GetRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(anecdotes.length));
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const addPoints = () => {
    const add = [...points]
    add[selected] += 1
    setPoints(add)   
    }
  const mostVotes = Math.max(...points)
  const setMostVotes = points.indexOf(mostVotes)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <p><button onClick={(addPoints)}>vote</button>
      <button onClick={() => setSelected(GetRandomInt())}>next anecdote</button></p>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[setMostVotes]}</p>
      <p>has {mostVotes} votes</p>
            
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)