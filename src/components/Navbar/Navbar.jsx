import { useState } from 'react';
import './Navbar.css'

function Navbar() {
    const [active, setActive]= useState('home');
    const [isShowMenu, setIsShhowMenu] =useState(false);
    const [heightScroll, setHeightScroll] =useState(0);
    const showMenuLayout= () =>{
        setIsShhowMenu(!isShowMenu);
    }
    window.addEventListener('scroll', function(){
        const scrollHeight = window.scrollY;
        setHeightScroll(scrollHeight);
        
    })

    return ( 
        <div className={`navbar-wrapper ${heightScroll>0? 'navbar-white':''}`}>
            <div className={`navbar wrapper `}>
            <div className="navbar-container ">
                <div className="navbar-logo">
                    <h3 className="logo">Startup Landing</h3>
                </div>
                <ul className="nav-links ">
                    <li onClick={()=>setActive('home')} className={`nav-link ${active==='home'?'active': ''}`}>
                        <a href="#">Home</a>
                    </li>
                    <li onClick={()=>setActive('feature')} className={`nav-link ${active==='feature'?'active': ''}`}>
                        <a href="#feature">Features</a>
                    </li>
                    <li onClick={()=>setActive('testimonial')} className={`nav-link ${active==='testimonial'?'active': ''}`}>
                        <a href="#testimonial">Testimonial</a>
                    </li>
                    <li onClick={()=>setActive('pricing')} className={`nav-link ${active==='pricing'?'active': ''}`}>
                        <a href="#price">Pricing</a>
                    </li>
                </ul>
                <div className="nav-right">
                    <button className="btn">Get Started</button>
                    <div onClick={showMenuLayout} className="toggle-menu">
                        <i className="fa-sharp fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
            <div className={`drawer ${isShowMenu ? 'drawer-open':''}`}
                onClick={showMenuLayout}
            ></div>
            <div className={`menu-layout ${isShowMenu ? 'menu-open':''}`}>
                    <div onClick={showMenuLayout}  className="menu-close">
                    <i className="fa-sharp fa-solid fa-xmark"></i>
                    </div>
                    <ul className="menu-links ">
                        <li onClick={()=>setActive('home')} className={`menu-link ${active==='home'?'active': ''}`}>
                            <a href="#">Home</a>
                        </li>
                        <li onClick={()=>setActive('feature')} className={`menu-link ${active==='feature'?'active': ''}`}>
                            <a href="#feature">Features</a>
                        </li>
                        <li onClick={()=>setActive('testimonial')} className={`menu-link ${active==='testimonial'?'active': ''}`}>
                            <a href="#testimonial">Testimonial</a>
                        </li>
                        <li onClick={()=>setActive('pricing')} className={`menu-link ${active==='pricing'?'active': ''}`}>
                            <a href="#price">Pricing</a>
                        </li>
                    </ul>
                    <div className="menu-social">
                        <a target="_blank" rel="noreferrer" href='https://www.facebook.com/' className="menu-social-item"><i className="fa-brands fa-facebook-f"></i></a>
                        <a target="_blank" rel="noreferrer" href='https://twitter.com/?lang=vi' className="menu-social-item"><i className="fa-brands fa-twitter"></i></a>
                        <a target="_blank" rel="noreferrer" href='https://github.com/' className="menu-social-item"><i className="fa-brands fa-github-alt"></i></a>
                        <a target="_blank" rel="noreferrer" href='https://dribbble.com/' className="menu-social-item"><i className="fa-brands fa-dribbble"></i></a>
                    </div>
                </div>
        </div>
        </div>
     );
}

export default Navbar;