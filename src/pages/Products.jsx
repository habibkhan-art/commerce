import React from "react";
import { useLocation } from "react-router-dom";
import products from "../data/Products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || "";

  // Safe filtering
  const filteredProducts = products.filter(
    (product) =>
      product && product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">
        {searchTerm ? `Search Results for "${searchTerm}"` : "All Products"}
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-400 text-lg">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) =>
            product ? <ProductCard key={product.id} product={product} /> : null
          )}
        </div>
      )}
    </div>
  );
};

export default Products;