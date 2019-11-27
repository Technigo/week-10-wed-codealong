import React, { useState } from 'react'

export const App = () => {
  const [happiness, setHappiness] = useState('happy')
  const [feeling, setFeeling] = useState('')
  const [showResult, setShowResult] = useState(false)

  // foo[0] = state item
  // foo[1] = function to change the state item

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }

  return (
    <div>
      {showResult && (
        <div>
          <h1>Here's your result!</h1>

          <p>You are {happiness === 'happy' ? 'Super happy!' : 'Sad :('}</p>
          <p>{feeling}</p>
        </div>
      )}

      {!showResult && (
        <form onSubmit={handleSubmit}>
          <div className="feelings">
            <label>
              <input
                type="radio"
                value="happy"
                onChange={() => setHappiness('happy')}
                checked={happiness === 'happy'} />

              <span role="img" aria-label="Happy face">
                😄
              </span>
            </label>

            <label>
              <input
                type="radio"
                value="sad"
                onChange={() => setHappiness('sad')}
                checked={happiness === 'sad'} />
              <span role="img" aria-label="Sad face">
                😞
              </span>
            </label>
          </div>

          <div className="thought">
            <label>
              How are you feeling?
              <input type="text" value={feeling} onChange={(event) => setFeeling(event.target.value)} />
            </label>
          </div>

          <button type="submit">
            Send my feelings
          </button>
        </form>
      )}
    </div>
  )
}
