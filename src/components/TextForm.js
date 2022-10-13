import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppper case click" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("Uppper case click" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleLoCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleClearClick = () => {
        // console.log("Uppper case click" + text);
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new Text";   //wrong way to change the text
    // setText("new text"); //corect way to change the text
    
  return (
    <>
    
    <div className="container" style={{backgroundColor: props.mode==='dark'?'white': 'white'}}>
        <h1 >{props.heading}</h1>
       <div className="mb-3">         
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white': 'white'}} rows="8"></textarea>
        <button className="btn btn-primary mx-2 my-4" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-4" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-4" onClick={handleClearClick}>Clear Text</button> 
        <button className="btn btn-primary mx-2 my-4" onClick={handleLoCopy}>Copy Text</button> 
        <button className="btn btn-primary mx-2 my-4" onClick={handleExtraSpaces}>Remove extra spaces</button> 
         </div>
    </div>
    <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'grey': 'white'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
