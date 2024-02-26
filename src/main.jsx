import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const initialCommentData = {
  comments: [],
  replies: [],
  users: [] 
}

export const CommentContext = React.createContext(initialCommentData);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
