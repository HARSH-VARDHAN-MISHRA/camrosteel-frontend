import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Sidecart from '../sidecart/Sidecart'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const [fixedHeader, setFixedHeader] = useState(false);
  


  const handleOpenBar = () => {
    setSidebar(true)
  }
  const handleCloseBar = () => {
    setSidebar(false)
  }

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 1) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };

  const [categ, setCateg] = useState([])
  const handleCategories = async () => {
    try {
      const response = await axios.get("https://api.camrosteel.com/api/v1/getAllCategorey")
      console.log(response.data);
      setCateg(response.data)
    } catch (error) {
      console.log(error);
    }
  }


  // For Handle the search functionality 
  const [searchInput, setSearchInput] = useState()

  const handleSearchtext = () => {
    window.location.href = `/search-by/${searchInput}`
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchtext();
    }
  }



  // --- Side Cart ---- 
  const [cartOpen, setCartOpen] = useState(false)
  const handleCartOpen = () => {
    setCartOpen(!cartOpen)
  }
  const handleCartClose = () => {
    setCartOpen(false)
  }


  useEffect(() => {
    handleCategories();
    
    // -- To fix the header at top -- 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const token = sessionStorage.getItem('token')
  const User = sessionStorage.getItem("user")
  const user = JSON.parse(User)

  return (
    <>
      <header className={fixedHeader ? 'fixed-top' : ''}>
        <div className="header-top text-center">
          <p>WELCOME TO CAMRO - STAINLESS STEEL WORLD</p>
        </div>

        <div className="header-navbar">

          <div className="logo">
            <Link to="/" ><img src={logo} alt="logo" /></Link>
          </div>


          <div className="search-bar">
            <input type="text"
              placeholder="Search for Cookware Sets"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="icons">
            {token ? (
                <Link to="/profile" className="cart icon">
                  <i class="fa-regular fa-user"></i>
                </Link>
            ):(
              <>
                <Link to="/login" className="cart icon">
                  <div className="cre">Login</div>
                </Link> 
                <span style={{color:"red"}}>|</span>
                {/* <Link to="/sign-up" className="cart icon">
                  <div className="cre">Create Account</div>
                </Link> */}
              </>
            )}

            

            <Link  onClick={handleCartOpen} className="cart icon">
              <i class="fa-solid fa-cart-shopping"></i>
              <span className='cart-numb'>1</span>
            </Link>
            <div className="bar icon" onClick={handleOpenBar}>
              <i class="fa-solid fa-bars"></i>
            </div>

          </div>

        </div>
      </header>

      <div className={`side-navbar ${sidebar ? "active" : ""}`}>
        <div className="closeSidebar" onClick={handleCloseBar}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <nav >
          <ul>

            <li><Link onClick={handleCloseBar} to="/">Home <i class="fa-solid fa-arrow-right"></i></Link></li>
            <li><Link onClick={handleCloseBar} to="/categories">Shop By Categories <i class="fa-solid fa-arrow-right"></i></Link></li>

            {categ.map((item, index) => (
              <li key={index}><Link onClick={handleCloseBar} to={`/ProductBy-Category/${item.category}`}>{item.category} <i class="fa-solid fa-arrow-right"></i></Link></li>
            ))}


          </ul>

          {token ? (
              <div className="bottom-nav">
                <div className="profile">
                  <div className="detail">
                    <h5>{user.Name}</h5>
                    <Link to="/profile" onClick={handleCloseBar}>View Profile</Link>
                  </div>
                </div>

              </div>
            ):(
              ""
            )}
            
            {/* <div className="bottom-nav">
              <div className="profile">
                <div className="pro-img">
                  <img src="https://avatars.githubusercontent.com/u/122715402?v=4" alt="" />
                </div>
                <div className="detail">
                  <h5>Deepak Verma</h5>
                  <Link to="/profile">View Profile</Link>
                </div>

              </div>
            </div> */}

        </nav>
      </div>

      <Sidecart cartOpen={cartOpen} handleCartClose={handleCartClose} />
    </>
  )
}

export default Header