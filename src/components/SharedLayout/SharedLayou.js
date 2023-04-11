import { NavLink } from 'react-router-dom';

export const Link = ({ to, children }) => {
  const activeLink = 'bg-sky-500 hover:bg-sky-700 ';
  const unactiveLink = 'bg-sky-200 hover:bg-sky-700 ';

  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeLink : unactiveLink)}
    >
      {children}
    </NavLink>
  );
};
