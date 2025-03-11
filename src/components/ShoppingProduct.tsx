import '../styles/ShoppingProduct.css';

import { useSelector } from 'react-redux';

import { RootState } from '../types/types';
import Product from './Product';

const ShoppingProduct = () => {
  const { products, total } = useSelector(
    (store: RootState) => store.shopping
  );
  console.log(products);
  return (
    <div className='content'>
     <div className='total'>Total: ${total}</div>
      <div className='card-container'>
        {products.length > 0 ? products.map((product) => {
          return (
            <Product
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
            />
          );
        }):
        <h1 className='empty'>There aren't any product Now!</h1>}
      </div>
    </div>
  );
};

export default ShoppingProduct;
