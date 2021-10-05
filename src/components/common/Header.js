import React from 'react';
import { NavLink } from 'react-router-dom';

import MenuBookOutlined from '@material-ui/icons/MenuBookOutlined';
import InvertColorsOutlinedIcon from '@material-ui/icons/InvertColorsOutlined';
import LocalDrinkOutlinedIcon from '@material-ui/icons/LocalDrinkOutlined';

import './Header.css';

const Header = () => {
  return (
    <div className='main-menu'>
      <div className='main-menu-brews'>
        <NavLink to={`/brews`} className='main-menu-button'>
          <LocalDrinkOutlinedIcon fontSize='inherit' color='inherit' />
        </NavLink>
      </div>
      <div className='main-menu-recipes'>
        <NavLink to={`/recipes`} className='main-menu-button'>
          <MenuBookOutlined fontSize='inherit' color='inherit' />
        </NavLink>
      </div>
      <div className='main-menu-water'>
        <NavLink to={`/waterprofiles`} className='main-menu-button'>
          <InvertColorsOutlinedIcon fontSize='inherit' color='inherit' />
        </NavLink>
      </div>
      {/* <NavLink to='/brews' activeClassName='activeStyle'>
        Brews
      </NavLink>
      {' | '}
      <NavLink to='/recipes' activeClassName='activeStyle'>
        Recipes
      </NavLink>
      {' | '}
      <NavLink to='/waterProfiles' activeClassName='activeStyle'>
        Water Profiles
      </NavLink> */}
    </div>
  );
};

export default Header;
