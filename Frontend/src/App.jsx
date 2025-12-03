import { useState } from 'react'
import './App.css'
import CodeEditor from './components/CodeEditor'
import ReviewPanel from './components/ReviewPanel'

function App() {
  const [code, setCode] = useState('')
  const [review, setReview] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCodeReview = async () => {
    if (!code.trim()) return
    
    setLoading(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/ai/get-review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code })
      })
      
      const data = await response.text()
      setReview(data || 'No review available')
    } catch {
      setReview('Error: Could not get code review')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>AI Code Review</h1>
        <button 
          onClick={handleCodeReview} 
          disabled={loading || !code.trim()}
          className="review-btn"
        >
          {loading ? 'Reviewing...' : 'Review Code'}
        </button>
      </header>
      
      <main className="main">
        <div className="editor-section">
          <h2>Code Input</h2>
          <CodeEditor code={code} setCode={setCode} />
        </div>
        
        <div className="review-section">
          <h2>AI Review</h2>
          <ReviewPanel review={review} loading={loading} />
        </div>
      </main>
    </div>
  )
}

export default App
