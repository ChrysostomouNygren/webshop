import React from 'react'
import "./css/Header.css"

// Fixa så jag kan använda svg's.



function Header() {
  return (
    <header>
        <h1>webshop</h1>
        <div>
            {/* knapp med emoji förstoringsglas */}
            <input type="text" placeholder='Sök produkter'/>
            <p>
              <button> <img src="src\components\resources\search-pngrepo-com.png" alt="search" /></button>
            </p>
            {/* emoji, figur */}
            <p> <img src="src\components\resources\user-profile-pngrepo-com.png" alt="profile" /> kundsida</p>
            {/* emoji, varukorg */}
            <p> <img src="src\components\resources\shopping-cart-pngrepo-com.png" alt="cart" /> varukorg</p>
        </div>
    </header>
  )
}

export default Header