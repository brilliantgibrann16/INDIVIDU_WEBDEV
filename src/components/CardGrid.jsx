import { useState, useEffect } from "react";
import { getData } from "../api/getData";
import Card from "./Card";

function CardGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getDataAsync = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getData();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat produk. Silakan periksa koneksi internet.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getData();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Gagal memuat produk. Silakan periksa koneksi internet.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-pink-600 font-semibold text-sm tracking-wider uppercase bg-pink-50 px-3.5 py-1.5 rounded-full border border-pink-100">
          Katalog Produk
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
          Produk Unggulan BrandKu
        </h2>
        <p className="text-slate-600 mt-2 text-base sm:text-lg">
          Koleksi pilihan terbaik dari API publik FakeStore dengan kualitas premium.
        </p>
      </div>

      {/* Category Filter Pills */}
      {!loading && !error && categories.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize cursor-pointer ${
                selectedCategory === cat
                  ? "bg-pink-500 text-white shadow-md shadow-pink-200"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat === "all" ? "Semua Produk" : cat}
            </button>
          ))}
        </div>
      )}

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 p-5 animate-pulse flex flex-col justify-between h-96"
            >
              <div className="bg-slate-200 rounded-xl h-48 mb-4 w-full" />
              <div className="space-y-2">
                <div className="bg-slate-200 h-4 rounded w-3/4" />
                <div className="bg-slate-200 h-4 rounded w-1/2" />
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <div className="bg-slate-200 h-6 rounded w-16" />
                <div className="bg-slate-200 h-8 rounded-xl w-20" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-12 bg-red-50 rounded-2xl border border-red-100 p-6 max-w-md mx-auto">
          <p className="text-red-600 font-medium mb-4">{error}</p>
          <button
            onClick={getDataAsync}
            className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm cursor-pointer"
          >
            Coba Lagi
          </button>
        </div>
      )}

      {/* Product Grid */}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                category={product.category}
                rating={product.rating}
                description={product.description}
              />
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-slate-400">
            Menampilkan {filteredProducts.length} dari {products.length} produk
          </div>
        </>
      )}
    </section>
  );
}

export default CardGrid;
