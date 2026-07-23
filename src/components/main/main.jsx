// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Products from '../../data/products.json'
const Main = () => {

  return (
    <main className="pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Our Products</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {Products.map((product, key) => (
          <div key={key}>
            <div>{product.name}</div>
            {product.type}
            </div>
        ))}
      </div>
      </div>
    </main>
  );
};

export default Main;