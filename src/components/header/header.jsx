import React from 'react'
import './header.css'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '../../assets/lionel.jpg'
import HeaderSocial from './headerSocial' //import of headerSocial component
export const Header = () => {
return (
<header>
<div className='container header__container'>
<h5>Hello I'm</h5>
<h1>Asonglefac Zingwa Joseph Lionel</h1>
<h5 className='text-light'>Software Engineer </h5>
<CTA/>
<HeaderSocial/> 
<div className='my_image'>
<img src={me} alt=''/>
</div>
<a href='#contact' className='scroll__down'>Scroll down</a>
</div>
</header>
)
}
export default Header;