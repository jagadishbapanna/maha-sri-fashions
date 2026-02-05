import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ProductCard from "../components/ProductCard";

const Jewellery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchJewellery = async () => {
      const q = query(
        collection(db, "products"),
        where("category", "==", "Jewellery")
      );

      const snapshot = await getDocs(q);
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(list);
    };

    fetchJewellery();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Jewellery Collection
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          No jewellery available
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Jewellery;
