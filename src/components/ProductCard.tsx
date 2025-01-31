// src/components/ProductCard.tsx
import { FC } from 'react';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
}

const ProductCard: FC<ProductCardProps> = ({ id, name, imageUrl, price, category }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-green-600">{name}</h3>
        <p className="mt-2 text-lg text-gray-600">{category}</p>
        <p className="mt-4 text-xl font-bold text-green-700">{`$${price.toFixed(2)}`}</p>
        <Link href={`/product/${id}`}>
          <button className="bg-green-600 text-white py-2 px-6 rounded-full mt-4">
            View Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
