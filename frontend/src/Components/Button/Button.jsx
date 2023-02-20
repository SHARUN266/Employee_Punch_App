import React from 'react'
import "./style.scss"
function Button({children}) {
  return (
   <button  className='btn'>{children}</button>
  )
}

export default Button