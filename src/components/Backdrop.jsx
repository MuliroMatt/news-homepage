import React from 'react'

const Backdrop = ({children, open}) => {
  return (
    <div className={`backdrop ${open}`}>
        {children}
    </div>
  )
}

export default Backdrop