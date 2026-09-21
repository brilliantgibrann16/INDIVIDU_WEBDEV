function Card({ image, title, price, category, rating }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden group">
      {/* Gambar Produk */}
      <div className="h-56 p-6 bg-slate-50 flex items-center justify-center relative overflow-hidden">
        {category && (
          <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-xs font-semibold px-2.5 py-1 rounded-full text-slate-700 shadow-2xs border border-slate-100 capitalize">
            {category}
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Konten Produk */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          {rating && (
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-amber-400 text-sm">★</span>
              <span className="text-xs font-bold text-slate-700">
                {rating.rate}
              </span>
              <span className="text-xs text-slate-400">
                ({rating.count} ulasan)
              </span>
            </div>
          )}

          {/* Judul Produk */}
          <h3
            className="font-semibold text-slate-900 text-base line-clamp-2 mb-2 leading-snug group-hover:text-pink-600 transition-colors"
            title={title}
          >
            {title}
          </h3>
        </div>

        {/* Harga & Tombol Aksi */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Harga</span>
            <span className="text-xl font-bold text-pink-600">
              ${Number(price).toFixed(2)}
            </span>
          </div>

          <button className="bg-pink-500 hover:bg-pink-600 active:scale-95 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-sm shadow-pink-200 cursor-pointer">
            Beli
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
