import { useParams, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { useFetch } from 'tools/apiGet';
import Loader from 'components/Loader/Loader';
import { Link } from 'components/SharedLayout/SharedLayout.styled';
//import { BackLink } from 'components/BackLink/BackLink';
import { toast, Zoom } from 'react-toastify';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const navigate = useNavigate();
  const url = `/movie/${id}`;
  const { data, isLoaded, error } = useFetch(url);

  const CloseButton = () => (
    <button onClick={() => navigate(backLinkHref)}>Go to Back</button>
  );

  useEffect(() => {
    if (data !== null) {
      setMovieInfo(data);
    }
    if (error) {
      //   console.log(error);

      //toastId.current =
      toast.error(error, {
        closeButton: CloseButton,
        onClose: () => navigate(backLinkHref),
        transition: Zoom,
      });
    }
    // eslint-disable-next-line
  }, [error, data]);

  const showDetail = movieInfo && !error;
  const showLoader = isLoaded && !error;
  return (
    <>
      {showLoader && <Loader />}
      {showDetail && (
        <>
          <button
            onClick={() => {
              navigate(backLinkHref);
            }}
          >
            Back to list
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`}
            alt={`Poster: ${movieInfo.title}`}
          />
          <h2>{`${movieInfo.original_title} (${movieInfo.release_date.slice(
            0,
            4
          )})`}</h2>
          <p>User score: {movieInfo.vote_average}</p>
          <h3>Overview</h3>
          <p>{movieInfo.overview}</p>
          <h3>Genres</h3>
          <p>{movieInfo.genres.map(e => e.name).join(' | ')}</p>
          <p>Additional information</p>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
