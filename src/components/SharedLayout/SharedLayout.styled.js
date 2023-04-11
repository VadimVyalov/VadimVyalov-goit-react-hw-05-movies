import { NavLink } from 'react-router-dom';

export const Container = ({ children }) => (
  <div className="container  my-0 mx-auto py-0 px-4 pb-16">{children}</div>
);

export const Header = ({ children }) => (
  <header
    className="flex items-center justify-between
                 gap-4 px-0 py-4 mb-4 border-b 
                 border-black border-solid "
  >
    <nav className="flex gap-4"> {children} </nav>
  </header>
);

export const Link = ({ to, state, children }) => (
  <NavLink
    to={to}
    state={state}
    className="block w-full px-2 rounded-md hover:bg-sky-100"
  >
    {children}
  </NavLink>
);

export const MenuLink = ({ to, children }) => {
  const link =
    'py-2 px-8 rounded-md hover:bg-sky-100 border border-black border-solid';
  const activeLink = `${link} bg-sky-500 hover:bg-sky-700 text-white`;
  const unactiveLink = `${link} text-black`;

  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeLink : unactiveLink)}
    >
      {children}
    </NavLink>
  );
};
