import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetch } from 'tools/apiGet';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  const url = `/movie/${id}/reviews`;
  const { data, isLoaded } = useFetch(url);

  useEffect(() => {
    if (data !== null) {
      setReviews(data.results);
      console.log(data.results);
    }
  }, [data]);

  return isLoaded ? (
    <Loader />
  ) : (
    reviews && (
      <>
        {reviews.map(e => (
          <li key={e.id}>
            <h3>{e.author}</h3>
            <img
              src={
                e.author_details.avatar_path
                  ? `https://image.tmdb.org/t/p/w185/${e.author_details.avatar_path}`
                  : `https://via.placeholder.com/185x185`
              }
              alt={`Poster: ${e.author_details.name}`}
            />
            <p>{e.content}</p>
            <p>{e.created_at}</p>
          </li>
        ))}
      </>
    )
  );
};

export default Reviews;
