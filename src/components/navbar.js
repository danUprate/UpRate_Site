import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
export { Navbar }

const Navbar = () => {



  return (
    <nav className="nav-bar">
      
      <Link className="nav-bar__logo" to="/"><img src="./images/uprate_logo.svg"/></Link>

      <ul className="nav-bar__links">
        <CustomLink className="btn" to="/workers">For Workers</CustomLink>
        <CustomLink className="btn" to="/hiring-companies">For Hiring Companies</CustomLink>
        <li><button className="btn btn--sec">Sign In</button></li>
      </ul>

    </nav>
  )
}

function CustomLink({to, children, ...props}){
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvePath.pathname, end: true})

  return(
    <li className={isActive ? "is-active" : ""}>
      <Link className="btn" to={to} {...props}>
       {children}
      </Link>
    </li>
  )

}