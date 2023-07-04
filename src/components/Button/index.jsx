import React from 'react'

function Button(props) {
  return (
    <a href="#" className='border-gray flex items-center gap-x-1 font-medium rounded-md border-[1.5px] p-2'>
        {props.icon}
        {props.content}
    </a>
  )
}

export default Button