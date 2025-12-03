import ReactMarkdown from 'react-markdown'

const ReviewPanel = ({ review, loading }) => {
  return (
    <div className="review-panel">
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Analyzing your code...</p>
        </div>
      ) : review ? (
        <div className="review-content">
          <ReactMarkdown>{review}</ReactMarkdown>
        </div>
      ) : (
        <div className="empty-state">
          <p>Submit your code to get an AI-powered review</p>
        </div>
      )}
    </div>
  )
}

export default ReviewPanel