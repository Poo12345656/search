import React from 'react'

function Button({text,...rest}) {
  return (
    <div>
      <button
    type="button"
    {...rest}
    >{text}</button></div>
  )
}

export default Button