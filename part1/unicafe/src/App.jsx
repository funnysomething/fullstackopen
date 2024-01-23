import { useState } from 'react'
import Button from './Button'
import StatisticLine from './StatisticLine'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick = {() => setGood(good + 1)} text = 'Good' />
      <Button onClick = {() => setNeutral(neutral + 1)} text= 'Neutral' />
      <Button onClick = {() => setBad(bad + 1)} text='Bad' />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

const Statistics = ({good, bad, neutral}) => {
  if (good + bad + neutral === 0){
    return <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
  }
  return <div>
    <h1>Statistics</h1>
    <table>
      <tbody>
        <StatisticLine text="Good" value={good}/>
        <StatisticLine text="Bad" value={bad}/>
        <StatisticLine text="Neutral" value={neutral}/>
        <StatisticLine text="All" value={good+bad+neutral} />
        <StatisticLine text="Average" value={(good-bad)/3} />
        <StatisticLine text="Postive" value={(good/(good+bad+neutral)*100)+"%"} />
      </tbody>
    </table>
    </div>
}

export default App