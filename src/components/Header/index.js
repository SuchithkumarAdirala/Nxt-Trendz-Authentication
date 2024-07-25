import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="navbar-mobile-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
          className="logo"
          alt="website logo"
        />
        <div className="nav-content navbar-large-container">
          <ul className="nav-menu">
            <li className="nav-menu-link">Home</li>
            <li className="nav-menu-link">Product</li>
            <li className="nav-menu-link">Cart</li>
          </ul>
          <button type="button" className="logout-button">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
