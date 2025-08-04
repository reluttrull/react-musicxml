import { useState } from 'react'

export function Part({ id, children }) {
  const [count, setCount] = useState(0)

  return (
    <part id={id}>
      {children}
    </part>
  )
}

export default Part