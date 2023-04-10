import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetch } from 'tools/apiGet';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  const url = `/movie/${id}/credits`;
  const { data, isLoaded } = useFetch(url);

  useEffect(() => {
    if (data !== null) {
      setCast(data.cast);
    }
  }, [data]);

  return isLoaded ? (
    <Loader />
  ) : (
    cast && (
      <>
        {cast.map(e => (
          <li key={e.id}>
            <img
              src={
                e.profile_path
                  ? `https://image.tmdb.org/t/p/w185/${e.profile_path}`
                  : `https://via.placeholder.com/185x278`
              }
              alt={`Poster: ${e.name}`}
            />
            <p>{e.original_name}</p>
            <p>Pharacter: {e.character}</p>
          </li>
        ))}
      </>
    )
  );
};
export default Cast;
