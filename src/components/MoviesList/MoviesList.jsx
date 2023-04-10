import { Link } from 'components/SharedLayout/SharedLayout.styled';
const MoviesList = ({ films, location }) => (
  <ul>
    {films.map(item => (
      <li key={item.id}>
        <Link to={`/Movies/${item.id}`} state={{ from: location }}>
          {item.name} {item.original_title}
        </Link>
      </li>
    ))}
  </ul>
);
export default MoviesList;
