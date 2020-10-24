import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import logo from './logo.jpg';
import Delivery from '../Delivery';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// Material UI Icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../Footer';

const Navbar = ({
  logout,
  auth: { isAuthenticated, loading, user },
  children,
}) => {
  const authLinks = (
    <ul className='navbar-nav mr-right mb-2 mb-lg-0'>
      <li className='nav-item'>
        {' '}
        <a href='/' className='nav-link disabled'>
          {' '}
          Welcome {user && user.name}
        </a>
      </li>

      <li className='nav-item'>
        <Link to='/product' className='nav-link'>
          Products
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/change-password' className='nav-link'>
          <LockOpenIcon fontSize='small' />
          Change Password
        </Link>
      </li>
      {user && user.role === 'Admin' && (
        <li className='nav-item'>
          <Link to='/register' className='nav-link'>
            <PersonAddIcon fontSize='small' />
            Signup
          </Link>
        </li>
      )}

      <li className='nav-item'>
        <Link to='/login' onClick={logout} className='nav-link'>
          <ExitToAppIcon fontSize='small' />
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <>
      <ul className='navbar-nav mr-auto mb-2 py-3 mb-lg-0'></ul>
    </>
  );

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light shadow sticky-top'>
        <div className='container'>
          <Link to='/' className='navbar-brand font-weight-bold display-6'>
            <img
              src='https://lh3.googleusercontent.com/proxy/ahAQ--6kP9cICfzHiadDlCzrUtkYdmEKcfBv0SEZW1DExzOAfkRWOuheE4AYkYXYEBwLn2oQvfaRlU8NszstWs3-sBi1w-SOugnkJpceiXkzSw'
              width='60'
              height='auto'
              class='d-inline-block align-top'
            />
          </Link>
          <button
            className='navbar-toggler shadow-none'
            type='button'
            data-toggle='collapse'
            data-target='#navbarToggler'
            aria-controls='navbarToggler'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarToggler'>
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0'></ul>
            <ul className='navbar-nav mx-right mb-2 mb-lg-0'>
              {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
            </ul>
            {!loading && (
              <>
                {isAuthenticated ? (
                  ''
                ) : (
                  <form className='d-flex'>
                    <input
                      className='form-control mr-2 shadow-none'
                      type='search'
                      placeholder='Search'
                      aria-label='Search'
                    />
                    <button className='btn btn-outline-secondary' type='submit'>
                      <SearchIcon />
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </nav>

      <div className=''>{children}</div>

      {/* <Delivery /> */}
      {/*  */}
      {/* <Footer /> */}

      <div className='text-muted card-footer pt-20  text-center footer'>
        Developer Contact -{' '}
        <strong>
          <a href='mailto:ahmaat19@gmail.com'>ahmaat19@gmail.com</a>
        </strong>
      </div>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
