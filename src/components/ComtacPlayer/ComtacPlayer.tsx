import * as React from 'react'

export interface ComtacPlayerProps {
  scenario: 'first-responder'
  id: string
}

const ComtacPlayer = (props: ComtacPlayerProps) => {
  return (
    <div>
      {props.scenario === 'first-responder' && <p>First Responder</p>}
      <p>{props.id}</p>
    </div>
  )
}

export default ComtacPlayer
