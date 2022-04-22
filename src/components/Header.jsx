import React from 'react';
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {logout, reset} from '../features/auth/authSlice';

function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    dispatch(reset());
  };

  return (
    <header className='header'>
         <div className='logo'> 
             <Link to='/'>GoalSetter</Link>
         </div>
         <ul>
           {user ? (
               <button type='submit' onClick={handleLogout}>
               <Link to='/' >
                   <FaSignOutAlt /> Logout
               </Link>
               </button>
           ) : (
             <>
          <li>
            <Link to='/login' >
                <FaSignInAlt /> Login
            </Link>
         </li>
         <li>
            <Link to='/register' >
                <FaUser /> Register
            </Link>
         </li>
         </>
           )}
         </ul>
    </header>
  )
}

export default Header