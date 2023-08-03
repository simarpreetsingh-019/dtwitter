import React, { useState } from 'react';

const Tweet = (props:any) => {
  const [tweet , setTweet] = useState<string>("");
  const [disable , setDisable] = useState(true);
  const [charCount ,  setCharCount] = useState(0);

  function updateTweet(text :string ){
    setTweet(text)
    if(text.length >50)
    {
      setDisable(true);
      return;
    }
    else{
      if(text.length>0)
      {
        setDisable(false);
      }
      else{
        setDisable(true);
      }

    }
    setCharCount(text.length)
  }

  return (
    <div>
    
    <label >Enter form details </label>
    <div className="d-flex flex-column justify-content-center align-items-center h-100" 
      style={{ padding:20 ,paddingBottom : 0, display:'flex', justifyContent : 'center' }} >
        <label >Your Name </label>
        <input
        name = "name"
        type = "text"
        placeholder = "Enter your name"
        value = {tweet}
        onChange={(e) => updateTweet(e.target.value) }
        >
        </input>
        
        <div className="charCount" 
      style={{ paddingTop:1 , display:'flex', justifyContent :'center' }}>
        <p>Character count : {charCount}</p>
      </div>
      </div>

      <button className = "btn btn-success btn-lg flex-column justify-content-center align-items-center h-50" disabled = {disable}
      //style={disable ? {disabled : true } : {disabled : false } }
       onClick={(e) => props.tweet_content(tweet)} >Submit Details</button>

    </div>
  )
}


export default Tweet