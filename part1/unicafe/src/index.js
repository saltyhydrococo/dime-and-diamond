import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick,text}) => 
  <button onClick={handleClick}>
    {text}
  </button>

const Statistic = ({text, value}) =>
  <table>
      <tr>
        <td style={{ width:'102px' }}>{text}</td>
        <td>{value}</td>
    </tr>
  </table>

const Statistics = ({good, neutral, bad}) => {
  const all = () => good + neutral + bad
  const averageRound = (good*1 + neutral*0 + bad*-1) / all()
  const average = () => averageRound.toFixed(2)
  const positiveRound = (good/all())*100
  const positive = () => positiveRound.toFixed(2) + ' %'
  
  if (all() === 0) {
    return(<p>No feedback given.</p>)
  } else {
    return (
      <div>
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />  
      <Statistic text="Bad" value={bad} />  
      <Statistic text="All" value={all()} />
      <Statistic text="Average" value={average()} />
      <Statistic text="Positive" value={positive()} />
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button
        handleClick={() => setGood(good + 1)}
        text='good'
      />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text='neutral'
      />
      <Button
        handleClick={() => setBad(bad + 1)}
        text='bad'
      />
      <h1>Statistics:</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)