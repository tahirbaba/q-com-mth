// src/components/CartItem.tsx
import { FC } from 'react';

interface CartItemProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  onIncreaseQuantity: (id: number) => void;
  onDecreaseQuantity: (id: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartItem: FC<CartItemProps> = ({
  id,
  name,
  imageUrl,
  price,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem
}) => {
  return (
    <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 object-cover rounded-md mr-6"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-lg text-gray-600">{`$${price.toFixed(2)} each`}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="bg-gray-300 text-gray-800 py-1 px-3 rounded-full"
          onClick={() => onDecreaseQuantity(id)}
        >
          -
        </button>
        <span className="mx-4 text-lg">{quantity}</span>
        <button
          className="bg-gray-300 text-gray-800 py-1 px-3 rounded-full"
          onClick={() => onIncreaseQuantity(id)}
        >
          +
        </button>
      </div>
      <button
        className="text-red-600 font-semibold"
        onClick={() => onRemoveItem(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
