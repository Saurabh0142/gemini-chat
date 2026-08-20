import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ChatInput from './component/ChatInput'
import ChatResponse from './component/CharResponse'
import { fetchChatResponse } from './services/api'

function App() {
  const [response, setResponse] = useState(null);
  const [loading,setLoading]=useState(false);

  const handleQuestionSubmit= async(question)=>{
    setLoading(true);
    setLoading(null);

    try {
      const apiResponse= await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("Failed to get response")
    } finally{
      setLoading(false);
    }
  }
  if(loading){
    return (<h1>Loading...</h1>);
  }
  return (
    <div className='App'>
      <header className='bg-primary text-white text-center py-4'>
        <h1>Gemini chatgpt lite</h1>
        
      </header>
      <div className="container mt-4">
        <ChatInput onSubmit={handleQuestionSubmit}/>
        <ChatResponse response={response} />
      </div>
      
    </div>
  )
}

export default App
