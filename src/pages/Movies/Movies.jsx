import { useLocation, useSearchParams } from 'react-router-dom';
import { useFetch } from 'tools/apiGet';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const url = `search/company`;

  const location = useLocation();

  const [searchString, setSearchString] = useSearchParams('');
  const [options, setOptions] = useState({
    query: searchString.get('query'),
    page: 1,
  });

  const { data, isLoaded, error } = useFetch(url, options);

  const onSubmit = evt => {
    evt.preventDefault();

    const inputString = evt.currentTarget.elements.query;
    const inputValue = evt.currentTarget.elements.query.value.trim();
    if (!inputValue) {
      toast.error(`Введи `);
      return;
    } else if (options.query === inputValue) {
      toast.error(`Вже шукали "${inputValue}" `);
      inputString.value = '';
      return;
    }

    setSearchString({ query: inputValue });
    setOptions(prev => ({ ...prev, query: inputValue }));
    inputString.value = '';
  };

  useEffect(() => {
    if (data?.total_results <= 0 && options.query) {
      toast.error('нема нікого !');
    }
    // eslint-disable-next-line
  }, [data]);

  if (error) {
    toast.error(error);
  }

  const showList = data?.total_results > 0 && !error;
  const showLoader = isLoaded && !error;
  const films = data?.results;

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {showLoader && <Loader />}
      {showList && <MoviesList films={films} location={location} />}
    </>
  );
};

export default Movies;
