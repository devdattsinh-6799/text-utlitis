
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'light';
    }
  }
  return (
    <>
  {/* <Navbar/> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">
  <TextForm heading="Enter your text to analyze" mode={mode}/>
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
