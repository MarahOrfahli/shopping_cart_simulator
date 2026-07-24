import Products from '../../data/products.json'
import { useCart } from '../../hooks/cartContext';
import ProductCard from '../product_card/productCard';
const Main = () => {
  const { addToCart } = useCart()
  return (
    <main className="pt-16 pb-20 bg-gray-100">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Our Products</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {Products.map((product, key) => (
          <ProductCard addToCart={addToCart} product={product} key={key} />
        ))}
      </div>
      </div>
    </main>
  );
};

export default Main;