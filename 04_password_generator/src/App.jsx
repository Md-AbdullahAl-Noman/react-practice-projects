import { useEffect, useState ,useRef, useCallback } from 'react';

function App() {

  const [password, setPassword] = useState('');
  const [length ,setLength] = useState(6);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);


  const generatePassword = () => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) {
      chars += '0123456789';
    }
    if (includeChars) {
      chars += '!@#$%^&*()';
    }
    let password = '';
    for (let i = 1; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length +1 ));
    }
    setPassword(password);
  }

  // console.log(password);

 useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeChars,setPassword ]);


  const copyRef =useRef(null);

  const copyToClipboard=useCallback(()=>{
    copyRef.current.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  


  return (
    <>
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white w-[70%] h-auto p-6 border rounded-lg shadow-lg">
          <h1 className="text-3xl text-center mb-4">Password Generator</h1>
          <div className="flex items-center mb-4">
            <input
              type="text"
              className="border rounded-xl p-2 flex-grow mr-2"
              placeholder="Generated password"
              value={password}

              ref={copyRef}
            />
            <button className="border rounded-lg bg-blue-600 text-white px-4 py-2" onClick={copyToClipboard}>
              Copy
            </button>
          </div>
          <div className="mb-4 gap-2 text-sm">
            <input type="range" min={6} max={100} value={length} className="w-[50%] cursor-pointer gap-2" onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="length" className="text-black text-xl">Length :{length}</label>
          </div>
          <div className="flex items-center space-x-4 mb-2">
            <input type="checkbox" id="numbers" className="mr-2"  onChange={()=>setIncludeNumbers((prev)=>!prev)}/>
            <label htmlFor="numbers" className="text-gray-700">
              Include Numbers
            </label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" id="characters" className="mr-2" onChange={()=>setIncludeChars((prev)=>!prev)}/>
            <label htmlFor="characters" className="text-gray-700">
              Include Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
