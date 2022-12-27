// Write your code here
import './index.css'

const NotFound = () => (
  <div className="error-container">
    <img
      alt="not found"
      className="error"
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
    />
    <h1>Lost Your Way?</h1>
    <p>
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
