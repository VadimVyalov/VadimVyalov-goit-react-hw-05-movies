import { NavLink } from 'react-router-dom';
const Trending = ({ films, location }) => (
  <ul
    className="gap-5 grid
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4 
                xl:grid-cols-5
  "
  >
    {films.map(item => (
      <li
        key={item.id}
        className="rounded-md border border-black border-solid overflow-hidden
        transition-all duration-300
        hover:shadow-lg hover:shadow-sky-500 hover:scale-105 "
      >
        <NavLink
          className="p-0 "
          to={`/Movies/${item.id}`}
          state={{ from: location }}
        >
          <img
            className="w-full p-0"
            src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
            alt={`Poster: ${item.title}`}
          />
          <p className="mx-2 font-sans text-sm font-medium truncate ...">
            {item.original_title}
          </p>
        </NavLink>
      </li>
    ))}
  </ul>
);
export default Trending;
