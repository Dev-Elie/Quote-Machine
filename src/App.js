import React ,{useState,useEffect} from "react"
import "./App.css"

const App = () => {

  const [quotes,setQuotes] = useState('')

  const getQuote = ()=>{
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
        let randomQuote = Math.floor(Math.random()*data.length)
        setQuotes(data[randomQuote])
    })
  }

  useEffect(()=>{
    getQuote()
  },[])


  return (
    <div className="container">
             <div id="quote-box" className="card mx-auto">
            <div class="card-body">
                <h2 id="text" className="text-center">

               <i class="fa fa-quote-left" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;	
               <span></span>
                  {quotes.text} 
                 </h2>

                <p id="author" className="text-end"> - {quotes.author} </p>

                <div className="col col-md-2"></div>

                <div className="d-flex bd-highlight mb-3">
                    <div className="me-auto p-2 bd-highlight">
                        <a href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer">
                            <button id="tweet-quote" type="btn" className="btn btn-primary"> <i className="fa fa-twitter"></i> </button>
                        </a>
                        
                    </div>
                    <div className="p-2 bd-highlight">
                        <button type="btn" className="btn btn-primary" id="new-quote" onClick = {getQuote} >New Quote</button>
                    </div>
                </div>
            </div>
        </div>
        <footer class="text-center fixed-bottom">Designed by <a href="https://develie-portfolio.netlify.app/">Dev Elie</a> </footer>
    </div>
    
  );
}

export default App;
