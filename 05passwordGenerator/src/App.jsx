import { useCallback, useEffect } from "react";
import { useState } from "react";

function App()
{

  const [password,setPassword]= useState('');
  const [length , setLength] = useState(14);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);

  useEffect(()=>{

    let pass = "" ;
    
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "12345678";
    if(charAllowed)   str+='/@#$%^&*~!<>|'

    for (let i = 0; i < length ; i++) {
      pass += str.charAt(Math.random() * str.length);
    }
   
    setPassword(pass);
},[length,numberAllowed,charAllowed]);

  return (
    <div className="flex w-full text-white h-screen text-center" style={{backgroundColor: '#111'}}>
      <div className="m-auto p-3 rounded-xl" style={{backgroundColor:'#333',width:'600px',height:'200px'}}>
        <h1 className="text-3xl">Password Generator</h1>
        <div className="inputs">
            <div className="m-5">
              <input type="text" className="rounded p-1 text-black" style={{width:'420px'}}
              value={password} onChange={(e)=>setPassword(e.target.value)}
               />
               <p>{password}</p>
              <button className="bg-blue-800 p-1 text-center rounded">copy</button>
            </div>
            <div className="flex justify-around m-5">
                <div>
                  <input type="range" name="" id="length" min={8} max={50} value={length} onChange={(e)=>setLength(e.target.value)}/>
                  <label htmlFor="length">length : {length}</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="numbers" onClick={()=>setNumberAllowed((prev)=>!prev)} />
                  <label htmlFor="numbers">Numbers</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="characters" onClick={()=>setCharAllowed((prev)=>!prev)} />
                  <label htmlFor="characters">Characters</label>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App;