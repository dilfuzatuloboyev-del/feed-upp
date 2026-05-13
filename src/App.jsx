import React, { useState } from 'react';
import { menuData } from './data';
import ProductCard from './components/ProductCard';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((x) => x.id === product.id);
      if (exist) {
        return prev.map((x) => x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const totalPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="bg-[#F9FAFB] min-h-screen font-sans">
      
      {/* 1. TOP NAVBAR (image_9b85a5.jpg dagi kabi) */}
      <nav className="bg-white border-b sticky top-0 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src="https://feedup.uz/images/feedup/logo.svg" alt="FeedUp" className="h-10" />
            <div className="hidden lg:flex gap-5 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-red-600">Biz haqimizda</a>
              <a href="#" className="hover:text-red-600 text-red-600">Menyu</a>
              <a href="#" className="hover:text-red-600">Aksiyalar</a>
              <a href="#" className="hover:text-red-600">Filiallar</a>
              <a href="#" className="hover:text-red-600">Aloqa</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <p className="font-bold text-[#1F2937]">+998 71 200 22 11</p>
              <p className="text-[10px] text-gray-400">Har kuni 09:00 dan 02:45 gacha</p>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
              <button className="hover:text-red-600 text-xl">🔍</button>
              <div className="relative cursor-pointer bg-[#FFD600] p-2 rounded-lg text-black font-bold flex gap-2 items-center">
                 🛒 <span className="text-sm">{totalPrice.toLocaleString()} so'm</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. PROMO BANNER (image_9b85a5.jpg dagi aksiya qismi) */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="relative overflow-hidden  bg-red-600  flex items-center shadow-xl">
          <img 
            src="https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fsliders%2F2026%2F04%2F03%2F1775215487875635171.jpg&w=1080&q=75" 
            alt="Banner" 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="relative z-10 p-8 md:p-16 text-white max-w-lg w-full h-[600px]">
             <h4 className="bg-black/20 backdrop-blur-md inline-block px-4 py-1 rounded-full text-sm mb-4"></h4>
             <div className="flex items-center gap-4 ">
             </div>
          </div>
        </div>
      </div>

{/* Kategoriyalar menyusi - image_70cb1c.png muammosini tuzatish */}
<div className="sticky top-[68px] z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm overflow-x-auto no-scrollbar">
  <div className="max-w-7xl mx-auto px-4 h-[60px] flex items-center justify-start md:justify-center gap-10 whitespace-nowrap">
    {menuData.map(section => (
      <a 
        key={section.id} 
        href={`#${section.id}`} 
        className="text-[#6B7280] hover:text-[#ED1C24] font-bold text-[13px] uppercase tracking-wider transition-all duration-300 py-2 border-b-2 border-transparent hover:border-[#ED1C24]"
      >
        {section.category}
      </a>
    ))}
  </div>
</div>

      {/* 4. MAHSULOTLAR RO'YXATI */}
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        {menuData.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-48">
            {/* Qizil chiziqcha bilan sarlavha (image_9b8dc1.png) */}
            <div className="flex items-center gap-4 mb-10">
               <span className="w-1.5 h-10 bg-[#ED1C24] rounded-full"></span>
               <h2 className="text-4xl font-black text-gray-900 tracking-tight">{section.category}</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.items.map((item) => (
                <ProductCard key={item.id} item={item} onAdd={() => addToCart(item)} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer (Oddiygina) */}
      <footer className="bg-white py-10 border-t mt-20 text-center text-gray-400 text-sm">
        © 2026 FeedUp — Barcha huquqlar himoyalangan.
      </footer>
    </div>
  );
}

export default App;



