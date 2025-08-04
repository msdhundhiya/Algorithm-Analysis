import React from 'react';
import { NavLink } from 'react-router-dom';
import { codeExamples } from '../data/codeExamples';

const Nav = () => {
  const links =Object.keys(codeExamples)
  return (
    <nav className="bg-white shadow-md rounded-xl p-2 sticky top-4 z-10">
      <ul className="flex flex-wrap justify-center gap-2">
        {links.map(algo => (
          <li key={algo}>
            <NavLink to={`/sort/${algo}`}
            className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 block ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-blue-100 hover:text-blue-700'
                }`
              }>
              {codeExamples[algo].name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;