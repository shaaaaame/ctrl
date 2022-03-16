import React from 'react'

function ExpandContent(props) {
  return (props.trigger ? (
    <div>
        <p>{props.content}</p>
    </div>
  )

  : (""));
}

export default ExpandContent