import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    {/* Shipping Notice */}
<div className="bg-black text-white overflow-hidden ">
  <div className="whitespace-nowrap animate-marquee py-2 text-sm">
    🚚 Shipping charges will be applied as per location in the final bill
    {/* <span className="mx-10">🚚 Shipping charges will be applied as per location in the final bill</span> */}
  </div>
</div>
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Elegant Sarees & Jewellery
          </h2>

          <p className="mt-4 text-base md:text-lg text-gray-600">
            Discover handpicked collections from Maha Sri Fashions.
            Order easily through WhatsApp.
          </p>

          {/* Single CTA */}
          <div className="mt-8">
            <Link
              to="/products"
              className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 inline-block"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-center mb-12">
          Shop by Category
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Sarees Card */}
          <Link
            to="/sarees"
            className="border rounded-lg p-10 text-center hover:shadow-lg transition block"
          >
            <h4 className="text-xl font-semibold mb-2">Sarees</h4>
            <p className="text-gray-600">
              Silk, cotton & festive collections
            </p>
          </Link>

          {/* Jewellery Card */}
          <Link
            to="/jewellery"
            className="border rounded-lg p-10 text-center hover:shadow-lg transition block"
          >
            <h4 className="text-xl font-semibold mb-2">Jewellery</h4>
            <p className="text-gray-600">
              Necklaces, bangles & accessories
            </p>
          </Link>

        </div>
      </section>
    </>
  );
};

export default Home;
