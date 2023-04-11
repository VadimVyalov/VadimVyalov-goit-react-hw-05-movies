import { Link } from 'components/SharedLayout/SharedLayout.styled';
const MoviesList = ({ films, location }) => (
  <ul className="pt-4 flex flex-col gap-1 w-max">
    {films.map(item => (
      <li key={item.id} className="w-full">
        <Link to={`/Movies/${item.id}`} state={{ from: location }}>
          {item.name} {item.original_title}
        </Link>
      </li>
    ))}
  </ul>
);
export default MoviesList;
