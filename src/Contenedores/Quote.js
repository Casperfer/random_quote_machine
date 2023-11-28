import React from 'react';
import Button from './Button'




function Quote(props){

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
            '#000000',
             '#FFFFFF',
             '#FF0000',
            '#00FF00',
             '#0000FF',
             '#FFFF00',
             '#FFA500',
            '#FFC0CB',
            '#800080',
            '#808080',
             '#A52A2A',
            '#00FFFF',
            '#FF00FF',
            '#C0C0C0',
            '#FFD700'
        ]




        let randIndex=Math.floor(Math.random()* quotes.length);
        setRandomQuote(quotes[randIndex])
        let rand = Math.floor(Math.random()*colors.length);
        setColor(colors[rand])
        
      
    }

   const styles ={
    backgroundColor:color
   }

    return(
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
           <button id='button' className='button' onClick={getNewQuote } >Nueva Frase</button>
          <a href={'https://twitter.com/intent/tweet?text=' + encodeURI(' ' + randomQuote.text + ' ' + randomQuote.author)}
          
          id='tweet-quote' target='_blank'>tweet-quote </a>
           </div>
          
        </div>
    )
}

export default Quote;