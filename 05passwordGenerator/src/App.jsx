import { useState, useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*"
    
    let char;
    for(let i = 1; i <= length; i++) {
      char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
    
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => 
    passwordGenerator()
  , [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <h2 className='text-white text-2xl'>Password Generator</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <div className="flex items-center gap-2 mb-4">
            <input type="text" id="password" className="w-full p-2 text-orange-400 bg-gray-700 rounded-lg outline-none" placeholder='Password' value={password} readOnly ref={passwordRef}/>
            <button className="outline-none bg-green-500 text-black px-3 shrink-0 rounded-2xl py-2 cursor-pointer" onClick={copyPasswordToClipboard} >copy</button>
        </div>
        <div className="flex items-center gap-2 mb-4">
            <input type="range" id="length" min={8} max={25} value={length}  className="w-full accent-orange-500 cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}/>
            <label className='text-orange-500'>Length : {length}</label>
        </div>
        <div className="flex gap-4 text-orange-400">
            <label><input type="checkbox" id="includeNumbers" defaultChecked={numAllowed} onChange={() => {
              setNumAllowed((prev) => !prev);
            }}/> Numbers</label>
            <label><input type="checkbox" id="includeSymbols" defaultChecked={charAllowed} onChange={() => {
              setCharAllowed((prev) => !prev);
            }}/> Characters</label>
        </div>
    </div>
    </>
  )
}

export default App
