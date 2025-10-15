import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/Productcontext/ProductContext';
import { TbArrowsShuffle } from 'react-icons/tb';
import { IoArrowBack } from 'react-icons/io5';
import Maincard from './Maincard';

function All() {
  const navigate = useNavigate();
  const { alldata } = useContext(ProductContext);
  const [shuffledData, setShuffledData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle data when alldata changes
  useEffect(() => {
    if (alldata && alldata.length > 0) {
      setShuffledData(shuffleArray(alldata));
    }
  }, [alldata]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleShuffle = () => {
    if (alldata && alldata.length > 0) {
      setShuffledData(shuffleArray(alldata));
    }
  };

  return (
    <div>
      {/* Title */}
      <h1 className="bg-gray-100 px-4 py-2 mt-20 text-xl font-mono flex items-center gap-2">
        All Products <span className="text-sm text-gray-600">({shuffledData?.length || 0} items)</span>
      </h1>
      {/* Navigation and Control Buttons */}
      <div className="flex justify-between  items-center mt-5 px-4">
        <button
          onClick={handleShuffle}
          className="px-4 py-2 hover:bg-gray-100 rounded transition flex items-center gap-2"
        >
          <TbArrowsShuffle className="text-lg" />
          
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 text-black transition hover:bg-gray-100 rounded flex items-center gap-2"
        >
          <IoArrowBack className="text-lg" />
          Back To Home Page
        </button>
      </div>
      <div className="bg-white mt-10 px-4 sm:px-10">
        {!shuffledData || shuffledData.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shuffledData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleProductClick(item)}
              className="bg-white overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out mx-auto w-[90%] sm:w-full cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="relative h-96 sm:h-80 md:h-80 w-full">
                <img src={item.Img} alt={item.Name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 uppercase">
                  New
                </span>
              </div>
              <div className="p-3 text-left">
                <h1 className="text-gray-900 text-sm font-medium">{item.Name}</h1>
                <h2 className="text-gray-700 text-sm font-semibold mt-1">$ {item.Price}</h2>
              </div>
            </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Maincard Modal */}
      <Maincard 
        product={selectedProduct}
        onClose={handleCloseModal}
        isOpen={isModalOpen}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default All