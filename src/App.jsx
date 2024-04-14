import { useState } from 'react'
import './App.css'
import NewsLetter from './components/newsLetter/NewsLetter';
import SubThanks from './components/newsLetter/submit/thanks'

function App() {
  
  const [status, setStatus] = useState(false);

  function handleStatus() {
    setStatus(!status);
  }

  return (
    <div className='bg-charcoalGrey h-screen md:grid md:content-center'>
      
        <NewsLetter handleStatus={handleStatus} status={status} />
        {
          status && <SubThanks handleStatus={handleStatus} />
        }
    </div>
  )
}

export default App
