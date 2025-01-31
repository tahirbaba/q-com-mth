// src/app/category/fruits/page.tsx
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

const fruitsData = [
  {
    id: 1,
    name: 'Apple',
    imageUrl: 'https://images.unsplash.com/photo-1631542206925-d4f518cad9cf?w=500&auto=format&fit=crop&q=60',
    price: 3.0,
    category: 'Fresh Fruit',
  },
  {
    id: 2,
    name: 'Banana',
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60',
    price: 1.5,
    category: 'Fresh Fruit',
  },
  // Add more fruits as needed
];

const Fruits = () => {
  return (
    <div className="container mx-auto px-4 my-16">
      <Navbar /><br />
      <h2 className="text-4xl font-bold text-center mb-8">Our Fresh Fruits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {fruitsData.map((fruit) => (
          <ProductCard
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            imageUrl={fruit.imageUrl}
            price={fruit.price}
            category={fruit.category}
          />
        ))}
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Fruits;
