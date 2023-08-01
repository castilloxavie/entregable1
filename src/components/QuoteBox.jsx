import './style/QuoteBox.css'

export const QuoteBox = ({handleChangeQuote, quote, currentFooter}) => {
  console.log(quote);
  return (
    
    <section className='quoteBox'>

        
          <h1 className='titel'>CosmicScape.</h1>
        
        
        <section className='text'>

            <article className='content-text'>
              <p>
                {quote.phrase}
              </p>
            </article>

            <section className='content-button'>
              <button className='button' onClick={handleChangeQuote}>RandomChic</button>
            </section>
        </section>

            <section className='footer-image'>
                
                  <footer className={`planet ${currentFooter}`}>
                  </footer>
                  
                
                <section className='footer-text'>
                  <h4 className='footers'>{quote.author}</h4>
                </section>
            </section>
      
    </section>
    
  )
}
export default QuoteBox;