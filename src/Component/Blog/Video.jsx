import React from 'react';
import image4 from '../../assets/Image/picture04.jpg';
import image5 from '../../assets/Image/picture05.jpg';
import image6 from '../../assets/Image/Gallery06.jpg';
import image11 from '../../assets/Image/Gallery11.jpg';

//import image11 from '../../assets/Image/Gallery11.jpg';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import BlogHead from '../Coach/Coach';

const CardContainer = () => {
  const ImageCard = ({ imageUrl, index }) => (
    <img
      src={image4}
      alt={`Image ${index + 1}`}
      className="bg-gray-200 w-72 h-4 shadow-md m-2 object-cover rounded-lg"
    />
  );


  return (
    <>
          <div className='px-16 max-md:px-12'>
      <div className='flex flex-col'>
        <div className='text-center text-3xl font-semibold py-6'>Picture Speaks Louder than Text</div>
        <div className='flex justify-center items-center flex-col px-40 md:px-10 max-md:px-2 py-14'>
          <div className='relative'>
            <img src={image11} className='w-auto h- bg-black bg-opacity-43 rounded-lg' />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' width="40" height="40" viewBox="0 0 93 93" fill="none">
                <path d="M46.4404 0C20.9118 0 0.192871 20.7189 0.192871 46.2475C0.192871 71.7762 20.9118 92.4951 46.4404 92.4951C71.969 92.4951 92.6879 71.7762 92.6879 46.2475C92.6879 20.7189 71.969 0 46.4404 0ZM37.1909 67.0589V25.4361L64.9394 46.2475L37.1909 67.0589Z" fill="#FF2626" />
              </svg>
            </div>
          </div>
          <div className='grid grid-cols-3 max-md:grid-cols-2 gap-10 max-md:gap-1 py-10'>
            <div className='relative'>
              <img src={image4} className='w-[auto] h-60 bg-black bg-opacity-43 rounded-lg' />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' width="40" height="40" viewBox="0 0 93 93" fill="none">
                  <path d="M46.4404 0C20.9118 0 0.192871 20.7189 0.192871 46.2475C0.192871 71.7762 20.9118 92.4951 46.4404 92.4951C71.969 92.4951 92.6879 71.7762 92.6879 46.2475C92.6879 20.7189 71.969 0 46.4404 0ZM37.1909 67.0589V25.4361L64.9394 46.2475L37.1909 67.0589Z" fill="#FF2626" />
                </svg>
              </div>
            </div>
            <div className='relative'>
              <img src={image5} className='w-[auto] h-60 bg-black bg-opacity-43 rounded-lg' />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' width="40" height="40" viewBox="0 0 93 93" fill="none">
                  <path d="M46.4404 0C20.9118 0 0.192871 20.7189 0.192871 46.2475C0.192871 71.7762 20.9118 92.4951 46.4404 92.4951C71.969 92.4951 92.6879 71.7762 92.6879 46.2475C92.6879 20.7189 71.969 0 46.4404 0ZM37.1909 67.0589V25.4361L64.9394 46.2475L37.1909 67.0589Z" fill="#FF2626" />
                </svg>
              </div>
            </div>
            <div className='relative'>
              <img src={image6} className='w-[auto] h-60 bg-black bg-opacity-43 rounded-lg' />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' width="40" height="40" viewBox="0 0 93 93" fill="none">
                  <path d="M46.4404 0C20.9118 0 0.192871 20.7189 0.192871 46.2475C0.192871 71.7762 20.9118 92.4951 46.4404 92.4951C71.969 92.4951 92.6879 71.7762 92.6879 46.2475C92.6879 20.7189 71.969 0 46.4404 0ZM37.1909 67.0589V25.4361L64.9394 46.2475L37.1909 67.0589Z" fill="#FF2626" />
                </svg>
              </div>
            </div>
          </div>
          <button className=' text-[#029837] rounded-md px-10 py-2 border-2 border-[#029837]'>Show More</button>
        </div>
      </div>
    </div>
    <BlogHead className="py-4"/>
    </>
  );
};

export default CardContainer;
