

import logo from '../assets/lws.svg';

import { NavLink } from 'react-router-dom';
import Search from './Search';


function Navbar() {
   return (
         <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <NavLink  to="/">
                    <img
                        className="h-10"
                        src={logo}
                        alt="Learn with Sumit"
                    />
                </NavLink>
               <Search />
            </div>
        </nav>

  )
}

export default Navbar;
