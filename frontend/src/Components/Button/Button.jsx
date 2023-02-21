import React from 'react'
import "./style.scss"
function Button({children,onClick}) {
  return (
   <button onClick={onClick}  className='btn'>{children}</button>
  )
}

export default Button