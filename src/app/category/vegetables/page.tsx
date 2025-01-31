import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Vegetables = () => {
  const vegetablesData = [
    {
        name: 'Carrot',
        imageUrl: 'https://images.unsplash.com/photo-1633380110125-f6e685676160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnJvdHxlbnwwfHwwfHx8MA%3D%3D',
        description: 'Fresh, crunchy carrots packed with nutrients.',
        rate: '$1.20 per kg',
      },
      {
        name: 'Broccoli',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1675365836465-ebdbf821cda0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnJvY2NvbGl8ZW58MHx8MHx8fDA%3D',
        description: 'High in vitamins, a healthy choice for your meals.',
        rate: '$2.50 per kg',
      },
      {
        name: 'Spinach',
        imageUrl: 'https://images.unsplash.com/photo-1588891557811-5f2fba9e3009?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNwaW5hY2h8ZW58MHx8MHx8fDA%3D',
        description: 'Rich in iron and perfect for salads or cooking.',
        rate: '$1.80 per bunch',
      },
      {
        name: 'Tomato',
        imageUrl: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fHww',
        description: 'Ripe and juicy tomatoes for all your culinary needs.',
        rate: '$2.00 per kg',
      },
      {
        name: 'Cucumber',
        imageUrl: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D',
        description: 'Refreshing cucumbers, perfect for summer salads.',
        rate: '$1.30 per kg',
      },
      {
        name: 'Bell Pepper',
        imageUrl: 'https://images.unsplash.com/photo-1621953723422-6023013f659d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmVsbCUyMFBlcHBlcnxlbnwwfHwwfHx8MA%3D%3D',
        description: 'Crunchy and colorful bell peppers for a healthy bite.',
        rate: '$2.70 per kg',
      },
      {
        name: 'Cauliflower',
        imageUrl: 'https://images.unsplash.com/photo-1584615467033-75627d04dffe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D',
        description: 'Versatile vegetable, great for roasting or making curry.',
        rate: '$3.00 per kg',
      },
      {
        name: 'Zucchini',
        imageUrl: 'https://images.unsplash.com/photo-1563252722-6434563a985d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8WnVjY2hpbml8ZW58MHx8MHx8fDA%3D',
        description: 'Mild-flavored zucchini for sautés or grilling.',
        rate: '$2.20 per kg',
      },
      {
        name: 'Sweet Potato',
        imageUrl: 'https://media.istockphoto.com/id/1125646611/photo/sweet-potato-with-slices.webp?a=1&b=1&s=612x612&w=0&k=20&c=CIIlV2TJ8SwuMVd6Jctet4n3l-9xiO_K8mGZn_WE23Y=',
        description: 'Sweet and hearty potatoes, ideal for baking or mashing.',
        rate: '$1.90 per kg',
      },
      {
        name: 'Onion',
        imageUrl: 'https://images.unsplash.com/photo-1578907814239-d2654ba61616?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE9uaW9uJ3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'Fresh onions to add flavor to all your dishes.',
        rate: '$1.00 per kg',
      },
      {
        name: 'Garlic',
        imageUrl: 'https://images.unsplash.com/photo-1588167109140-e81c3080d557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R2FybGljfGVufDB8fDB8fHww',
        description: 'Garlic for a strong and savory flavor in any meal.',
        rate: '$3.20 per kg',
      },
      {
        name: 'Lettuce',
        imageUrl: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D',
        description: 'Crisp lettuce for healthy and refreshing salads.',
        rate: '$2.00 per head',
      },
      {
        name: 'Eggplant',
        imageUrl: 'https://images.unsplash.com/photo-1613881553903-4543f5f2cac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEVnZ3BsYW50fGVufDB8fDB8fHww',
        description: 'Tender and savory eggplants, great for grilling or frying.',
        rate: '$2.40 per kg',
      },
      {
        name: 'Asparagus',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1663127193043-7dd0772d826c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXNwYXJhZ3VzfGVufDB8fDB8fHww',
        description: 'Fresh asparagus, perfect for grilling or adding to salads.',
        rate: '$4.00 per kg',
      },
      {
        name: 'Beetroot',
        imageUrl: 'https://media.istockphoto.com/id/2153935146/photo/red-beetroot-on-stem-with-green-leaves-and-beet-cross-section-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=uE0zHnGq1ZJRndJp9Awk4xZcAZV1LHEbumTKGYCRXow=',
        description: 'Earthy and vibrant beetroots for roasting or juicing.',
        rate: '$3.50 per kg',
      },
      {
        name: 'Cabbage',
        imageUrl: 'https://images.unsplash.com/photo-1598030343246-eec71cb44231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D',
        description: 'Fresh cabbage, perfect for stir-fries or slaws.',
        rate: '$2.30 per kg',
      },
      {
        name: 'Chili Pepper',
        imageUrl: 'https://images.unsplash.com/photo-1566045023256-fb2339a82526?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENoaWxpJTIwUGVwcGVyfGVufDB8fDB8fHww',
        description: 'Spicy chili peppers for those who love a kick in their food.',
        rate: '$3.00 per kg',
      },
      {
        name: 'Leek',
        imageUrl: 'https://images.unsplash.com/photo-1599776764145-bcc16b4e3815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxlZWt8ZW58MHx8MHx8fDA%3D',
        description: 'Delicate and flavorful leeks for soups and sautés.',
        rate: '$2.80 per bunch',
      },
      {
        name: 'Radish',
        imageUrl: 'https://images.unsplash.com/photo-1593026122758-19bebc625104?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFkaXNofGVufDB8fDB8fHww',
        description: 'Peppery radishes for adding crunch and flavor to salads.',
        rate: '$1.60 per bunch',
      },
  ];

  return (
    <div className="container mx-auto px-4 my-16">
      <Navbar /> <br />
      <h2 className="text-4xl font-bold text-center mb-8">Our Fresh Vegetables</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {vegetablesData.map((vegetable, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${vegetable.imageUrl})` }}
            ></div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-600">{vegetable.name}</h3>
              <p className="mt-2 text-lg">{vegetable.description}</p>
              <p className="mt-4 text-xl font-bold text-green-700">{vegetable.rate}</p>
              <Link href="/cart">
                <button className="bg-green-600 text-white py-2 px-6 rounded-full mt-4">Add to Cart</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Vegetables;
