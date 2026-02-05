import { openWhatsApp } from "../utils/whatsapp";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>

        <p className="text-sm text-gray-500 mt-1">
          Product ID: {product.productId}
        </p>

        <p className="text-gray-700 mt-1 font-medium">
          ₹{product.price}
        </p>

        {/* Stock Status */}
        {product.inStock ? (
          <p className="mt-2 text-sm font-medium text-green-600">
            In Stock
          </p>
        ) : (
          <p className="mt-2 text-sm font-medium text-red-600">
            Out of Stock
          </p>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={() => openWhatsApp(product)}
          disabled={!product.inStock}
          className={`mt-4 px-4 py-2 rounded text-white ${
            product.inStock
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {product.inStock ? "Order on WhatsApp" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
