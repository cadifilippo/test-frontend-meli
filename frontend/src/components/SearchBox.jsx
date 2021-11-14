import { Link, useLocation } from 'react-router-dom';
import { useSearchBox } from '../hooks/useSearchBox';
import '../sass/searchBox.scss';
import logo from '../assets/Logo_ML.png';

export const SearchBox = () => {
  const { search } = useLocation();
  const { text, handleChange, handleSubmit } = useSearchBox(search);

  return (
    <>
      <header>
        <nav>
          <form onSubmit={handleSubmit}>
            <Link to="/">
              <img src={logo} alt="Mercado Libre Logo" />
            </Link>
            <input
              type="text"
              id="search-box"
              className="search-box"
              placeholder="Nunca dejes de buscar"
              value={text}
              onChange={handleChange}
            />
            <button className="search-button" type="submit" />
          </form>
        </nav>
      </header>
    </>
  );
};
