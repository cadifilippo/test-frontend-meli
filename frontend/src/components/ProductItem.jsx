import { Link } from 'react-router-dom';
import '../sass/item.scss';
import delivery from '../assets/ic_shipping@2x.png';

export const ProductItem = ({ product = {} }) => {
  const { id, title, free_shipping, picture, price, condition } = product;
  const [amount, cents] = price?.amount
    ? price.amount.toString().split('.')
    : ['0', '0'];
  const textCondition = condition === 'new' ? 'Nuevo' : 'Usado';

  return (
    <Link to={`/items/${id}`} className="product-link">
      <div className="product-item">
        <img src={picture} alt={title} className="product-item__img" />
        <div className="product-item__info">
          <div className="product-item__info--price">
            <h2>
              {`$ ${parseInt(amount).toLocaleString('en')}`}
              <span className="price__cents">{cents && `${cents}`}</span>
            </h2>
            {free_shipping && <img src={delivery} alt="delivery" />}
          </div>
          <div className="product-item__info--title">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="product-item__province">
          <h3>{textCondition}</h3>
        </div>
      </div>
    </Link>
  );
};
