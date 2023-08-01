import { useState } from "react";

import QuoteBox from "./components/QuoteBox";
import  quotes from "./quotes/spaceCuriosities.json"
import { getRandon } from "./utils/randon";

import './App.css'

const listBg = ['bg1', 'bg2', 'bg3']
const footerImg = ['footer', 'footer1', 'footer2']


function App() {

  // console.log(getRandon(quotes));

  const [quote, setQuote] = useState(getRandon(quotes));
  const [currentBg, setCurrentBg] = useState(getRandon(listBg))
  const [currentFooter, setCurrentFooter] = useState(getRandon(footerImg))



  const handleChangeQuote = () => {
    setQuote(getRandon(quotes))
    setCurrentBg(getRandon(listBg))
    setCurrentFooter(getRandon(footerImg))
  }

  
  return (
    <main className={`app ${currentBg} `}>

      <QuoteBox handleChangeQuote={handleChangeQuote} quote= {quote} currentFooter ={currentFooter} />
      
      
    </main>
    
  )
}


export default App
