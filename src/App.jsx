import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PartList } from './components/PartList.jsx'
import { PartId } from './components/PartId.jsx'
import { Part } from './components/Part.jsx'
import { Measure } from './components/Measure.jsx'
import { Note } from './components/Note.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [xmlPre, setXmlPre] = useState('<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE score-partwise PUBLIC"-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">');

  return (
    <>
    <pre>{xmlPre}</pre>
    <pre>
      <score-partwise version="4.0">
        <PartList>
          <PartId id="1" name="soprano" />
          <PartId id="2" name="baritone" />
        </PartList>
        <Part id="1">
          <Measure number="1" keysig="G" time="4/4" clef="treble">
            <Note pitch="B4" duration="4" type="whole" />
          </Measure>
        </Part>
        <Part id="2">
          <Measure number="1" keysig="G" time="4/4" clef="bass">
            <Note pitch="F#3" duration="2" type="half" />
            <Note pitch="G3" duration="2" type="half" />
          </Measure>
        </Part>
      </score-partwise>
    </pre>
  </>
  )
}

export default App
