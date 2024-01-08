import React from 'react'
import { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import {VscAccount} from "react-icons/vsc";
import {BsSliders} from "react-icons/bs";
import "./Header.scss";
import Sidebar from '../Sidebar/Sidebar';
import Search from './Search/Search';
import AuthModel from '../Auth/AuthModel';



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showsidebar, setshowsidebar] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [openAuthModel,setOpenAuthmodel] = useState(false)

  const handlescroll = () =>{
    const offset = window.scrollY;
    if(offset > 200) {
      setScrolled(true);
    }else{
      setScrolled(false)
    }
  }

  useEffect(()=>{
      window.addEventListener("scroll",handlescroll);
  },[])

  const handelOpen=()=>{
    setOpenAuthmodel(true)
  }
  const handleClose=()=>{
      setOpenAuthmodel(false)
  }
  return (
    <>
    <div>
    <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
          <div className='header-content'>
            <ul className="left">
             <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
            <div className="center">UNICODE</div>
            <div className='right'>
              <TbSearch onClick={()=> setshowSearch(true)}/>
              <VscAccount onClick={handelOpen}/>
              <span
              className='cart-icon' >
                <CgShoppingCart/>
                <span>5</span>
              </span>
              <span onClick={()=> setshowsidebar(true)}>
              <BsSliders/></span>
            </div>
          </div>
    </header>

          <AuthModel  handleClose={handleClose} open={openAuthModel}/>
    </div>
    

    
    {showsidebar && <Sidebar setshowsidebar={setshowsidebar} />}

    {showSearch && <Search setshowSearch={setshowSearch} />}
    
    </>
  )
}

export default Header