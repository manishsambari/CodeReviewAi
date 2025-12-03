import { useState } from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/themes/prism.css'

const CodeEditor = ({ code, setCode }) => {
  const [language, setLanguage] = useState('javascript')

  const highlightCode = (code) => {
    return highlight(code, languages[language] || languages.javascript, language)
  }

  return (
    <div className="code-editor">
      <div className="editor-controls">
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="language-select"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="clike">C/C++</option>
        </select>
      </div>
      
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={highlightCode}
        padding={10}
        className="editor"
        placeholder="Paste your code here for review..."
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          minHeight: '400px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          backgroundColor: '#f8f9fa'
        }}
      />
    </div>
  )
}

export default CodeEditor