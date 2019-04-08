import React from 'react';
import './HeaderStyle.css';
import { NavLink } from 'react-router-dom';


function Header(props) {
    return (
        <header>


         <NavLink className="link" to="/"><h1 className="logo">Books Store</h1></NavLink>

            <NavLink to="/books" className="link book"
                exact activeStyle={{ color: "#fff" }}

            >Books</NavLink>
            
            { props.isLogined ? <NavLink to="/logout" className="link"
                                        exact activeStyle = {{ color: "#fff" }}>Logout</NavLink>
                              : <NavLink to="/login" className="link" 
                                        exact activeStyle = {{ color: "#fff" }}>Login</NavLink>
            }



        </header>
    )
}

export default Header;
