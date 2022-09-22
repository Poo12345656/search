import React from 'react'

function Input({placeHolder,type,...rest}) {
  return (
    <div>
      <input
      type={type}
      placeHolder={placeHolder}
      {...rest}
      />
    </div>
  )
}

export default Input