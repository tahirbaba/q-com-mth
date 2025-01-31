'use client'; // Add this at the top of your page

import { useParams } from 'next/navigation'; // Importing useParams()

const ProductDetail = () => {
  const { id } = useParams(); // Now it should work

  return <div>Product Details for {id}</div>;
};

export default ProductDetail;
