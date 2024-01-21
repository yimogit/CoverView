import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/icons/mo.png'
const Header = () => {

  return (

    <div className="text-xl md:px-2 flex  border-b border-gray-100 p-2">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="w-8 h-8 mx-4" />
        <h1 className="font-semibold" style={{color:"#3d73ad"}}>文章封面生成器</h1>
      </Link>

      <div className="ml-auto md:mr-4">
        <a href="https://github.com/yimogit/CoverView"  target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain dev-icon text-2xl"></i></a>
      </div>
    </div>

  );
}

export default Header;