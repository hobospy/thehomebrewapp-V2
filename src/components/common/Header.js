import React from 'react';
import { NavLink } from 'react-router-dom';

import MenuBookOutlined from '@material-ui/icons/MenuBookOutlined';
import InvertColorsOutlinedIcon from '@material-ui/icons/InvertColorsOutlined';
import LocalDrinkOutlinedIcon from '@material-ui/icons/LocalDrinkOutlined';

import '../../css/header.css';

const Header = () => {
  return (
    <div className='main-menu'>
      <div className='main-menu-brews'>
        <NavLink
          to={`/brews`}
          className={({ isActive }) =>
            'main-menu-button' + (isActive ? ' main-menu-button-active' : '')
          }
        >
          <LocalDrinkOutlinedIcon fontSize='inherit' />
        </NavLink>
      </div>
      <div className='main-menu-recipes'>
        <NavLink
          to={`/recipes`}
          className={({ isActive }) =>
            'main-menu-button' + (isActive ? ' main-menu-button-active' : '')
          }
        >
          <MenuBookOutlined fontSize='inherit' />
        </NavLink>
      </div>
      <div>
        <NavLink
          to={`/waterprofiles`}
          className={({ isActive }) =>
            'main-menu-button' + (isActive ? ' main-menu-button-active' : '')
          }
        >
          <InvertColorsOutlinedIcon fontSize='inherit' />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
