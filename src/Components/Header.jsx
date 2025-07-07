import chefgamma from '../assets/Chef-Gamma.svg'
function Header() {
  return(
    <>
      <header>
          <nav className="nav-list">
            <img src={chefgamma} alt="Chef Gamma" className="chef-gamma" />
            <span className="nav-heading">Chef Gamma</span>
          </nav>
      </header>
    </>
  )
}

export default Header