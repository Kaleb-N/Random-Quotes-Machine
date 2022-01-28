function App(){
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit//api/quotes");
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        
        }
        fetchData();
    }, [])

    const getNewQuote = () => {
        let randIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randIndex])
    }

    return (
        <div class="container pt-5">
            <div class="container">
                <div class="card-header">Inspirational Quotes</div>
                <div class="card-body">
                    {randomQuote ? (
                        <>
                        <h5 class="card-title">- {randomQuote.author || "anonymous"}</h5>
                        <p class="card-text">&quot;{randomQuote.text}&quot;</p>
                        </>
                    ) : (
                        <h2>loading</h2>
                    )}

                    <div class="row">
                        <div class="col-xs-7">
                            <button onClick={getNewQuote} class="btn btn-primary">New Quote</button>
                            <a href='https://twitter.com/intent/tweet' class="btn btn-warning"><i class="fa fa-twitter"></i>Tweet</a>
                            
                        </div>
                        
                           
                    </div>
                </div>
            </div>
            
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("app"));
/*{quotes.map(quote => (
    <div>{quote.text}</div>
    ))}->*/