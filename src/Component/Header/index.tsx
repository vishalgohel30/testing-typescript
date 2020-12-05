import React from 'react'
// import { NavLink, Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

interface Props {

}

const Header = (props: Props) => {
    return (
        <section className="w3l-header-4">
            <header id="headers4-block" className="editContent">
                <div className="container">
                    <div className="d-grid nav-mobile-block header-align">
                        <div className="logo">
                            {/* <Link className="brand-logo editContent" to={'/'}>My Website</Link> */}
                            {/* <!-- if logo is image enable this   
                    <a className="brand-logo" href="#index.html">
                        <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                    </a> -->  */}
                        </div>
                        <input type="checkbox" id="nav" />
                        <label className="nav" htmlFor="nav"></label>
                        <nav>
                            <label htmlFor="drop" className="toggle"><span className="fa fa-bars" style={{ outline: "none", cursor: "inherit" }}></span></label>
                            <input type="checkbox" id="drop" />
                            <ul className="menu">
                                <li className="propClone"><NavLink to="/"  exact>Home</NavLink></li>
                                <li className="propClone"><NavLink to="/skills"  >skills</NavLink></li>
                                <li className="propClone"><NavLink to="/contact"  >Contact</NavLink></li>
                                {/* <li className="propClone"><NavLink to="/about"  >About</NavLink></li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </section>
    )
}
export  default Header;