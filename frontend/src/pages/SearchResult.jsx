import { useLocation } from 'react-router-dom';
import { ProductItem } from '../components/ProductItem';
import { useProducts } from '../hooks/useProducts';
import '../sass/searchResult.scss';

export const SearchResult = () => {
  const { search } = useLocation();

  const { isLoading, categories, products } = useProducts(search);

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div className="result">
      <div className="result__route">
        <p>{categories.map((cat) => cat.name).join(' > ')}</p>
      </div>
      <div className="result__list">
        {products.map((product) => (
          <ProductItem key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};
