import { FC } from 'react';
import React from 'react';
import { MenuType } from '../../model/types';
import { Link } from 'react-router-dom';

interface MenuProps {
  links: { name: string; href: string }[];
}

export const Menu: FC<MenuProps> = ({ links }) => {
  return (
    <>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm bg-base-100 z-50 mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
