import { useState } from 'react'

export function PartList({ children }) {
  const [count, setCount] = useState(0)

  return (
    <part-list>
      {children}
    </part-list>
  )
}

export default PartList