// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="container">
      <div className="content">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="website logo"
          className="image"
        />
        <p className="para">
          Fashion is a part of daily air and it's doesn't quite hepls that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolvution. Your fashion makes you been seen and and
          heard that way you are. So celelbrate the seasons new and exciting
          fashion in your own way.
        </p>
        <button className="button" type="button">
          Shop Now
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="website logo"
          className="image-desktop"
        />
      </div>
    </div>
  </>
)

export default Home
