// 6:20
import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'

const Navbar = () => {
  
  const [isShowLinks, setIsShowLinks] = useState(true);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height; //data of container
    console.log(linksHeight);

    if(isShowLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }

  }, [isShowLinks])
  return (
    <div className="nav-center">
      <div className="nav-header">
        <h1 className="nav-myname">Brayam Corral Flores</h1>
        <button className="nav-toggle" onClick={() => setIsShowLinks(!isShowLinks)}>
          <FaBars />
        </button>
      </div>
      {/* <div className= {`${isShowLinks ? "links-container show-container" : "links-container"}`}> */}
      <div className= "links-container" ref = {linksContainerRef}>
        <ul className="links" ref = {linksRef}>
        {links.map((link) => {
          const {id, url, text} = link;
          return (<li key={id}>
            <a href = {url}>{text}</a>
          </li>
          );
        })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((socialIcon) => {
          const {id, url, icon} = socialIcon;
          return (
            <li key ={id}>
              <a href ={url}>{icon}</a>
            </li>
          )
        })}
        </ul>
    </div>
  );
}

export default Navbar
