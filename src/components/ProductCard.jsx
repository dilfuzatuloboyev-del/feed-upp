import React from 'react';

// Bu funksiya mahsulot kartochkasini chizib beradi
function ProductCard({ item, onAdd, onRemove, quantity }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
      <div>
        <div className="bg-gray-50 rounded-xl p-2 mb-4">
          <img src={item.image} alt={item.name} className="w-full h-40 object-contain" />
        </div>
        <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
        <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-black text-gray-900">{item.price.toLocaleString()} so'm</span>
        
        {quantity > 0 ? (
          <div className="flex items-center gap-3 bg-[#FFD600] rounded-xl px-2 py-1">
            <button onClick={onRemove} className="w-8 h-8 font-bold text-xl">-</button>
            <span className="font-bold">{quantity}</span>
            <button onClick={onAdd} className="w-8 h-8 font-bold text-xl">+</button>
          </div>
        ) : (
          <button 
            onClick={onAdd}
            className="bg-[#FFD600] text-black font-bold px-4 py-2 rounded-xl text-sm"
          >
            + Qo'shish
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;