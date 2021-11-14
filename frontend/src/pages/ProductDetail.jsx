import { useParams } from 'react-router';
import { useDetails } from '../hooks/useDetails';
import '../sass/productDetail.scss';

export const ProductDetail = () => {
  const { id } = useParams();
  const { isLoading, product } = useDetails(id);

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  if (!product) {
    return <h2>El producto no existe!</h2>;
  }

  const { title, picture, price, condition, sold_quantity, description } =
    product;

  const [amount, cents] = price?.amount
    ? price.amount.toString().split('.')
    : ['0', '0'];

  const textCondition = condition === 'new' ? 'Nuevo' : 'Usado';

  return (
    <>
      <div className="product">
        <div className="product__main">
          <img src={picture} alt={title} />
          <div className="product__main__info">
            <h4>{`${textCondition} - ${sold_quantity}`}</h4>
            <h3>{title}</h3>
            <h2>
              {`$ ${parseInt(amount).toLocaleString('es')}`}
              <span className="price__cents">{cents && `${cents}`}</span>
            </h2>
            <button className="button">Comprar</button>
          </div>
        </div>
        <div className="product__details">
          <h3>Descripción del producto</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
