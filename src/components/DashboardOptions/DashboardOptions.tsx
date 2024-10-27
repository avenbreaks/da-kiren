import React, { useState } from 'react'
import useClickOutside from '../../hooks/useClickOutside'

const DashboardOptions = () => {
  // 
  const [isOpen, toggle] = useState(false)

  const { ref } = useClickOutside<HTMLDivElement>(() => toggle(false))
  const openOptions = () => toggle(true)

  return (
    <div ref={ref} className='relative'>
      <i
        onClick={openOptions}
        className='bi bi-three-dots dark:text-white flex-grow-0 -mt-2 cursor-pointer'
      />
    </div>
  )
}

export default DashboardOptions
