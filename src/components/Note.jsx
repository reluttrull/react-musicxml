import { useEffect, useState } from 'react'

export function Note({ pitch, duration, type }) {
  const [count, setCount] = useState(0)


  return (
    <note>
      <pitch>
        <step>{pitch.substring(0,pitch.length-1)}</step>
        <octave>{pitch[pitch.length-1]}</octave>
      </pitch>
      <duration>{duration}</duration>
      <type>{type}</type>
    </note>
  )
}

export default Note