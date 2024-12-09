import { useState } from 'react'

const StatisticLine = (props) => {
  return (
  <tr>
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </tr>
  )
}


const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = all === 0 ? 0 : (props.good - props.bad) / all
  const positive = all === 0 ? 0 : (props.good / all) * 100


  if (all === 0) {
  
  return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  )
  } 
    
    return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
        <StatisticLine text="good" value={props.good}></StatisticLine>
        <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
        <StatisticLine text="bad" value={props.bad}></StatisticLine>
        <StatisticLine text="all" value={all}></StatisticLine>
        <StatisticLine text="average" value={average}></StatisticLine>
        <StatisticLine text="positive" value={`${positive} %`} ></StatisticLine>
        </tbody>
      </table>
    </div>
  )
}


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)


  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={goodClick}
        text='good'
        />
      <Button
        handleClick={neutralClick}
        text='neutral'
        />
      <Button
        handleClick={badClick}
        text='bad'
        />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
