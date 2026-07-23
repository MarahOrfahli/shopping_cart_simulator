import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const ProductCard = ({product}) => {

    function formatName(str) {
  return str
    .split('_')
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
}

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="relative pb-[75%] bg-white-200 overflow-hidden">
        <img
          src={'src/assets/products/product_' + product.type + '.jpg'}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain object-center"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h4 className="text-lg font-semibold text-gray-900 mb-1 leading-tight lg:h-12">
            {product.name}
        </h4>
        <div className="flex justify-between">
            <p className="text-indigo-600 font-bold text-xl mb-4">$ {product.price.toFixed(2)}</p>
            <span className="text-gray-400 font-bold italic">{formatName(product.type)}</span>
            </div>
        
        <div className="mt-auto">
          <button
            onClick=""
            className="w-full bg-green-900 hover:bg-green-800 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            
            <FontAwesomeIcon icon={faCartPlus} size="x" color="white" />
            <i className="fas fa-cart-plus"></i> Add to Cart{" "}
            {/* addToCart(${product.id}) */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
