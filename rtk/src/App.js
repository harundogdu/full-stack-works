import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './features/product/productSlice';

function App() {
  const product = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <div>
      {product.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='productContainer'>
          {product.products.map(item => (
            <div key={item.id}>
              <span>{item.name}</span>
              <p>{item.unitPrice}</p>
            </div>
          ))}
        </div>
      )}

      {product.isError && <div>{product.isError}</div>}
    </div>
  );
}

export default App;
