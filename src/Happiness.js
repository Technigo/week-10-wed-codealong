import React from 'react'

export const Happiness = (props) => {
  return (
    <div className="happiness">
      <label>
        <input
          type="radio"
          value="happy"
          onChange={() => props.setHappiness('happy')}
          checked={props.happiness === 'happy'} />

        <span role="img" aria-label="Happy face">
          😄
        </span>
      </label>

      <label>
        <input
          type="radio"
          value="sad"
          onChange={() => props.setHappiness('sad')}
          checked={props.happiness === 'sad'} />
        <span role="img" aria-label="Sad face">
          😞
        </span>
      </label>
    </div>
  )
}
