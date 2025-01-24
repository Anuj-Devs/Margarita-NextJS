// src/app/buy/page.tsx
import Navbar from '../../components/Navbar';

export default function BuyNow() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="relative w-full max-w-md bg-white shadow-2xl rounded-xl p-6">
          {/* Card Content */}
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-3xl font-semibold animate-marquee text-center text-blue-500">Hello Thank You</p>
          </div>
        </div>
      </div>
    </div>
  );
}
