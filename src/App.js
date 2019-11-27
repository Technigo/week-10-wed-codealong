import React, { useState } from 'react'
import { Summary } from './Summary'
import { Happiness } from './Happiness'
import { Input } from './Input'

export const App = () => {
  const [happiness, setHappiness] = useState('happy')
  const [feeling, setFeeling] = useState('')
  const [today, setToday] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [question, setQuestion] = useState('happiness')

  // foo[0] = state item
  // foo[1] = function to change the state item

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }

  const handleContinueClick = () => {
    if (question === 'happiness') {
      setQuestion('feeling')
    } else if (question === 'feeling') {
      setQuestion('today')
    }
  }

  return (
    <div>
      {showResult && (
        <Summary feeling={feeling} happiness={happiness} />
      )}

      {!showResult && (
        <form onSubmit={handleSubmit}>
          {question === 'happiness' && (
            <Happiness
              happiness={happiness}
              setHappiness={setHappiness} />
          )}

          {question === 'feeling' && (
            <Input
              label="How are you feeling?"
              value={feeling}
              setValue={setFeeling} />
          )}

          {question === 'today' && (
            <div>
              <Input
                label="What are you going to do today?"
                value={today}
                setValue={setToday} />

              <button type="submit">
                Send my feelings
              </button>
            </div>
          )}

          {question !== 'today' && (
            <button type="button" onClick={handleContinueClick}>
              Continue
            </button>
          )}
        </form>
      )}
    </div>
  )
}
