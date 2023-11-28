
import './App.css';
import React, { useState, useEffect} from 'react';





function App() {

  const[quotes,setQuotes]=React.useState([]);
  const[randomQuote,setRandomQuote]=React.useState([]);
  const[color,setColor]=React.useState([]);
  React.useEffect(() =>{
    async function fetchData () {
        const response= await fetch('https://type.fit/api/quotes')
        const data= await response.json();

        setQuotes(data);
        let randIndex= Math.floor(Math.random()*data.length);
        setRandomQuote(data[randIndex])
    }
    fetchData();
}, [])

const getNewQuote = ()=>{
    const colors=[
      "#f9d6de", 
       "#d1dbe7",  
       "#d8e7d4", 
        "#f9ecca", 
         "#dfcee8", 
          "#eaeaea",  
          "#fddab9",  
          "#b9eac7",  
          "#f7efe6",  
          "#dfcee8"
    ]




    let randIndex=Math.floor(Math.random()* quotes.length);
    setRandomQuote(quotes[randIndex])
    let rand = Math.floor(Math.random()*colors.length);
    setColor(colors[rand])
    
  
}

const styles ={
backgroundColor:color
}


  return (
    <div className="App"  style={styles}>
      <header className="App-header">
      <div id='quote-box' className='quote-box'> 
        <div className='card'>
            {randomQuote ? (
                <>
                <p id='text'className='text'>&quot;{randomQuote.text}&quot;</p>
           <p id='author'className='author'>{randomQuote.author || 'No author'}</p>
                </>
            ) : (
                <h2>Loading</h2>
            )

            }
        </div>
           
           <div className='actions'>
           <button id='new-quote' className='button' onClick={getNewQuote } >Nueva Frase</button>
          <a href={'https://twitter.com/intent/tweet?text=' + encodeURI(' ' + randomQuote.text + ' ' + randomQuote.author)}
          
          id='tweet-quote' target='_blank'>tweet-quote </a>
           </div>
          
        </div>
      </header>
     
    </div>
  );
}

export default App;

