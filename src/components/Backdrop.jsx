import React from 'react'

const Backdrop = ({children, onClick}) => {
  return (
    <div 
    onClick={onClick}
    className='backdrop'>
        {children}
    </div>
  )
}

export default Backdrop