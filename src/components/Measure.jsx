import { useEffect, useState } from 'react'

export function Measure({ number, keysig, time, clef, children }) {
  const [count, setCount] = useState(0)
  const [fifths, setFifths] = useState(0);
  const keyMap = new Map();

  // Add key-value pairs
  keyMap.set("c", 0);
  keyMap.set("c#", 1);
  keyMap.set("db", 1);
  keyMap.set("d", 2);
  keyMap.set("d#", 3);
  keyMap.set("eb", 3);
  keyMap.set("e", 4);
  keyMap.set("f", 5);
  keyMap.set("f#", 6);
  keyMap.set("gb", 6);
  keyMap.set("g", 7);
  keyMap.set("g#", 8);
  keyMap.set("ab", 8);
  keyMap.set("a", 9);
  keyMap.set("a#", 10);
  keyMap.set("bb", 10);
  keyMap.set("b", 11);

  const rotate = (num) => {
    return (num + 7) % 12;
  }

  useEffect(() => {
    let start = keyMap.get("c"); // major
    let goal = keyMap.get(keysig.toLowerCase());
    // if minor
    if (keysig[0].toUpperCase() != keysig[0]) {
      start = keyMap.get("a");
    }
    let rotations = 0;
    while (start != goal) {
      rotations++;
      start = rotate(start);
    }
    setFifths(rotations);
  }, []);

  return (
    <measure number={number}>
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>{fifths}</fifths>
        </key>
        <time>
          <beats>{time.split("/")[0]}</beats>
          <beat-type>{time.split("/")[1]}</beat-type>
        </time>
        <clef>
          <sign>{clef == "treble" ? "G" : "F"}</sign>
          <line>{clef == "treble" ? "2" : "4"}</line>
        </clef>
      </attributes>
      {children}
    </measure>
  )
}

export default Measure