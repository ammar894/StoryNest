import React from 'react'
import { useId } from 'react'

function Select({
    options = [],
    label,
    className = "h-100",
    ...props
},ref) {
  const id = useId()  
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='inline-block'>{label}</label>}
        <select {...props} ref={ref} id={id} className={`px-3 py-2 rounded-lg bg-white 
        
        focus:bg-gradient-to-l(_red,_blue) border-gray-400 w-full h-11 ${className}`}>
            {options?.map((option)=>(
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)