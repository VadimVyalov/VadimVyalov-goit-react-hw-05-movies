import PropTypes from 'prop-types';
import { Header } from './Searchbar.styled';
import { MdOutlineImageSearch } from 'react-icons/md';
const Searchbar = ({ onSubmit }) => (
  <Header>
    <form onSubmit={onSubmit}>
      <button type="submit">
        <MdOutlineImageSearch />
      </button>
      <input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        className="font-sans text-sm font-medium text-black"
      />
    </form>
  </Header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
