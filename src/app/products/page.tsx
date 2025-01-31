// src/app/products/[id]/page.tsx

type Product = {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    rate: string;
  };
  
  const ProductPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
  
    // Simulated product data
    const productData: Product[] = [
      {
        id: "1",
        name: "Apple",
        imageUrl:
          "https://images.unsplash.com/photo-1631542206925-d4f518cad9cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGFwcGxlfGVufDB8fDB8fHww",
        description: "Fresh and crispy apples, directly from the orchard.",
        rate: "$3.00 per kg",
      },
      {
        id: "2",
        name: "Banana",
        imageUrl:
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww",
        description: "Sweet and nutritious bananas, packed with energy.",
        rate: "$1.50 per bunch",
      },
      // Add more product data as needed
    ];
  
    // Find product by ID
    const product = productData.find((item) => item.id === id);
  
    if (!product) {
      return (
        <div className="container mx-auto text-center py-16">
          <p className="text-xl font-semibold text-gray-600">Product not found.</p>
        </div>
      );
    }
  
    return (
      <div className="container mx-auto px-4 my-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-green-600">{product.name}</h1>
            <p className="mt-4 text-lg text-gray-700">{product.description}</p>
            <p className="mt-4 text-xl font-semibold text-green-700">
              {product.rate}
            </p>
            <button className="bg-green-600 text-white py-2 px-6 rounded-full mt-6 hover:bg-green-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductPage;
  