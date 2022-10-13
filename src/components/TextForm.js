import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppper case click" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        // console.log("Uppper case click" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleLoCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove extra spaces!", "success");
    }
    const handleClearClick = () => {
        // console.log("Uppper case click" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Clear text!", "success");
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
    
    <div className="container" style={{color: props.mode==='dark'?'white': '#042743'}}>
        <h1 >{props.heading}</h1>
       <div className="mb-3">         
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white': '#042743'}} rows="8"></textarea>
        <button className="btn btn-primary mx-2 my-4" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-4" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-4" onClick={handleClearClick}>Clear Text</button> 
        <button className="btn btn-primary mx-2 my-4" onClick={handleLoCopy}>Copy Text</button> 
        <button className="btn btn-primary mx-2 my-4" onClick={handleExtraSpaces}>Remove extra spaces</button> 
         </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white': '#042743'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
    </div>
    </>
  )
}
