import React, { useState } from 'react';

export default function Main(props) {


// handle uppercase
const upper = ()=>{
  let textUpper = text.toUpperCase();
  setText(textUpper)
}

// handle preview
  const preview = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('');
// handle copy
const copyBtn = ()=>{
    let copy = document.querySelector('#form');
    copy.select();
    navigator.clipboard.writeText(copy.value);
}
//handle speech
const speech = ()=>{
  if(text==="" || text===' '){
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Please Enter Your Text First"));
  }else{
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  } 
}
//handle color
const colorHandle = (event)=>{
  sethexColor(event.target.value);
}
const[hexColor, sethexColor]= useState('#000');
 console.log(hexColor);

  return (
    <>
      <div className="container dark-mode">
        <h1 className="">testApp</h1>
        <div className="mb-3"></div>
        <div className="mb-3">
          <textarea
            className={`form-control color-${props.color}`}
            style={{ color: hexColor }}
            id="form"
            rows="6"
            value={text}
            onChange={preview}
            placeholder="Enter Your Text Here">
          </textarea>
          <div class="btn-cont d-flex">
            <button className="btn btn-primary mt-4 mx-2" onClick={upper}>
              Convert Text To Upper Case
            </button>
            <button className="btn btn-primary mt-4 copy-button mx-2" onClick={copyBtn}>
              Copy Text
            </button>
            <button className="btn btn-primary mt-4 copy-button mx-2" onClick={speech}>
              Text to Speech
            </button>
            <div class="cont mt-4 mx-2">
              <label htmlFor="colorpicker">Text Color: </label>
              <input type="color" id="colorpicker" onChange={colorHandle} />
            </div>
          </div>
        </div>
        <div className="count-words">
          <p>Number of words: {text.split(' ').length}</p>
        </div>
        <div className="preview">
          <h3>Preview: {text}</h3>
          <p>  </p>
        </div>

      </div>
    </>
  )
}
