import React, {useState} from 'react'
import './index.css'

const EvenOddApp = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Count is Even')

  const handleIncrement = () => {
    const randomValue = Math.floor(Math.random() * 101) // Generate a random value between 0 and 100
    const updatedCount = count + randomValue
    setCount(updatedCount)
    setMessage(updatedCount % 2 === 0 ? 'Count is Even' : 'Count is Odd')
  }

  return (
    <div className="even-odd-app-container">
      <h1>Count {count}</h1>
      <p>{message}</p>
      <button className="increment-button" onClick={handleIncrement}>
        Increment
      </button>
      <p>Increase By Random Number Between 0 to 100</p>
    </div>
  )
}

export default EvenOddApp
