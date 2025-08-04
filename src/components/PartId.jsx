import { useState } from 'react'

export function PartId({ id, name }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <score-part id={id}>
        <part-name>{name}</part-name>
      </score-part>
    </>
  )
}

export default PartId