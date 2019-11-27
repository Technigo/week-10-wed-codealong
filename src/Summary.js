import React from 'react'

export const Summary = (props) => (
  <div>
    <h1>Heres your result!</h1>

    <p>You are {props.happiness === 'happy' ? 'Super happy!' : 'Sad :('}</p>
    <p>You feel: {props.feeling}</p>
  </div>
)
