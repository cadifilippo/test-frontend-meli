import { SearchBox } from './SearchBox';

export const Layout = ({ children }) => {
  return (
    <>
      <SearchBox />
      <div className="container">{children}</div>
    </>
  );
};
