import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const CLOUD_NAME = "dlmvdur4f";
const UPLOAD_PRESET = "maha_sri_products";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "Sarees",
    productId: "",
    image: "",
    inStock: true,
  });

  // 🔄 Fetch products
  const fetchProducts = async () => {
    const snap = await getDocs(collection(db, "products"));
    setProducts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🖼 Cloudinary Upload
  const uploadImage = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: "POST", body: data }
    );

    const json = await res.json();
    setForm({ ...form, image: json.secure_url });
  };

  // ➕ Add product
  const addProduct = async () => {
    await addDoc(collection(db, "products"), form);
    setForm({ name: "", price: "", category: "Sarees", productId: "", image: "", inStock: true });
    fetchProducts();
  };

  // 🔁 Toggle stock
  const toggleStock = async (id, value) => {
    await updateDoc(doc(db, "products", id), { inStock: !value });
    fetchProducts();
  };

  // 🗑 Delete product
  const removeProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      {/* ADD PRODUCT */}
      <div className="border p-4 rounded mb-8">
        <h3 className="font-semibold mb-3">Add Product</h3>

        <input
          placeholder="Product Name"
          className="border p-2 w-full mb-2"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Product ID"
          className="border p-2 w-full mb-2"
          value={form.productId}
          onChange={e => setForm({ ...form, productId: e.target.value })}
        />

        <input
          placeholder="Price"
          type="number"
          className="border p-2 w-full mb-2"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />

        <select
          className="border p-2 w-full mb-2"
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        >
          <option>Sarees</option>
          <option>Jewellery</option>
        </select>

        <input
          type="file"
          onChange={e => uploadImage(e.target.files[0])}
          className="mb-2"
        />

        {form.image && <img src={form.image} className="h-24 mb-2" />}

        <button
          onClick={addProduct}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {/* PRODUCT LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded">
            <img src={p.image} className="h-40 w-full object-cover mb-2" />
            <h4 className="font-semibold">{p.name}</h4>
            <p>₹{p.price}</p>
            <p className="text-sm">{p.productId}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => toggleStock(p.id, p.inStock)}
                className={`px-3 py-1 rounded text-white ${
                  p.inStock ? "bg-green-600" : "bg-gray-500"
                }`}
              >
                {p.inStock ? "In Stock" : "Out of Stock"}
              </button>

              <button
                onClick={() => removeProduct(p.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
