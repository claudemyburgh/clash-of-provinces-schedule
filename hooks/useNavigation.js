import React, { useState } from 'react'

const useNavigation = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen((prevOpen) => !prevOpen)

  const isOpen = () => {
    return open ? ' open' : ''
  }

  return {
    open,
    toggleOpen,
    isOpen,
  }
}

export default useNavigation
