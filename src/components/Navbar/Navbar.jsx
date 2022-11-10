import { useRef } from 'react';
import { useEffect, useState } from 'react';
import './Navbar.css'
import {navLink} from '../../constants'



function Navbar() {
    const [active, setActive]= useState('home');
    const [isShowMenu, setIsShhowMenu] =useState(false);
    const [heightScroll, setHeightScroll] =useState(0);
    const showMenuLayout= () =>{
        setIsShhowMenu(!isShowMenu);
    }
    const heightNav= useRef();
    let heigthFeature;
    if(heightScroll>0){
        heigthFeature=navLink.map((item, index) =>{
            const itemScrollNav= document.querySelector(`#${item.name}`);
            return ({
                id: index,
                name: item.name,
                start: itemScrollNav? itemScrollNav.offsetTop- heightNav.current.offsetHeight : 0  ,
                end : itemScrollNav? (itemScrollNav.offsetTop+ itemScrollNav.offsetHeight) :0 
            })
        })
    }
   
    useEffect(()=>{

        heightScroll>0 && heigthFeature.forEach(item =>{
            let check=false;

            heigthFeature.forEach(item =>{
                if(heightScroll>= item.start && heightScroll<= item.end){
                    check= true;
                }
                
            })
            if(heightScroll>= item.start && heightScroll<= item.end ){
                setActive(item.name);
            }
            
            if(!check){
                setActive('')
            }
        })
    },[heightScroll])
    useEffect(() =>{
        

        window.addEventListener('scroll', function(){
            const scrollHeight = window.scrollY;
            setHeightScroll(scrollHeight);
            
        })

        return window.removeEventListener('scroll', function(){
            const scrollHeight = window.scrollY;
            setHeightScroll(scrollHeight);
            
        })
    },[])

    return ( 
        <div ref={heightNav} className={`navbar-wrapper ${heightScroll>0? 'navbar-white':''}`}>
            <div className={`navbar wrapper `}>
            <div className="navbar-container ">
                <div className="navbar-logo">
                    <a href='#' className="logo">Startup Landing</a>
                </div>
                <ul className="nav-links ">
                    {
                        navLink.map((item, index) =>(
                            <li key={index} onClick={()=>setActive(item.name)} className={`nav-link ${active===item.name ? 'active': ''}`}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))
                    }
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
                        
                        {
                        navLink.map((item, index) =>(
                            <li  key={index} onClick={()=>{setActive(item.name);showMenuLayout()  }} className={`menu-link ${active===item.name ? 'active': ''}`}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))
                    }
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