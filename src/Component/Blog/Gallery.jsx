import image1 from '../../assets/Image/Gallery01.jpg';
import image2 from '../../assets/Image/Gallery02.jpg';
import image3 from '../../assets/Image/Gallery03.jpg';
import image4 from '../../assets/Image/Gallery04.jpg';
import image5 from '../../assets/Image/Gallery05.jpg';
import image6 from '../../assets/Image/Gallery06.jpg';
import image7 from '../../assets/Image/Gallery07.jpg';
import image8 from '../../assets/Image/Gallery08.jpg';
import image9 from '../../assets/Image/Gallery09.jpg';
import image10 from '../../assets/Image/Gallery10.jpg';
import image11 from '../../assets/Image/Gallery11.jpg';
import image12 from '../../assets/Image/Gallery10.jpg';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const CardContainer = () => {
  const ImageCard = ({ imageUrl, index }) => (
    <img
      src={imageUrl}
      alt={`Image ${index + 1}`}
      className="bg-gray-200 w-72 h-52 shadow-md m-2 object-cover rounded-lg"
    />
  );

  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];
  const numberList = [...Array(images.length).keys()];

  return (
    <div className='px-16 max-md:px-12'>
      <div className='flex flex-col'>
        <div className='text-center text-3xl font-semibold py-6'>Picture Speaks Louder than Text</div>
        <div className="flex flex-col justify-center items-center h-auto">
          <div className="grid grid-cols-4 min-lg:grid-cols-4 min-md:grid-cols-3 max-md:grid-cols-2 gap-10">
            {images.map((imageUrl, index) => (
              <ImageCard key={index} imageUrl={imageUrl} index={index} />
            ))}
          </div>
          <div className='flex flex-row justify-center items-center gap-5 py-10'>
            <div className='flex flex-row justify-center items-center gap-4'><FaArrowLeft /><span>Prev</span></div>
            <ul className='flex flex-row justify-center max-sm:justify-around items-center gap-1 list-none max-md:hidden'>
              <li className='text-white text-[10px] bg-[#BEF200] rounded-full p-1  px-2 hover:cursor-default'>1</li>
              {numberList.map((number, index) => (
                <li key={index} className='text-black text-[10px] bg-white rounded-full p-4 hover:cursor-default'>{number + 2}</li>
              ))}
            </ul>
            <div className='flex flex-row justify-center items-center gap-4'><span>Next</span><FaArrowRight /></div>
          </div>
        </div>
        <div className='flex justify-center items-center flex-col px-40 md:px-10 max-md:px-2 py-14'>
          <div className='relative'>
            <img src={image10} className='w-auto bg-black bg-opacity-43 rounded-lg' />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' width="40" height="40" viewBox="0 0 93 93" fill="none">
                <path d="M46.4404 0C20.9118 0 0.192871 20.7189 0.192871 46.2475C0.192871 71.7762 20.9118 92.4951 46.4404 92.4951C71.969 92.4951 92.6879 71.7762 92.6879 46.2475C92.6879 20.7189 71.969 0 46.4404 0ZM37.1909 67.0589V25.4361L64.9394 46.2475L37.1909 67.0589Z" fill="#FF2626" />
              </svg>
            </div>
          </div>
          <div className='grid grid-cols-3 max-md:grid-cols-2 gap-10 max-md:gap-1 py-10'>
            <div className='relative'>
              <img src={image10} className='w-[auto] h-60 bg-black bg-opacity-43 rounded-lg' />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' width="40" height="40" viewBox="0 0 93 93" fill="none">
                  <path d="M46.4404 0C20.9118 0 0.192871 20.7189 0.192871 46.2475C0.192871 71.7762 20.9118 92.4951 46.4404 92.4951C71.969 92.4951 92.6879 71.7762 92.6879 46.2475C92.6879 20.7189 71.969 0 46.4404 0ZM37.1909 67.0589V25.4361L64.9394 46.2475L37.1909 67.0589Z" fill="#FF2626" />
                </svg>
              </div>
            </div>
            <div className='relative'>
              <img src={image10} className='w-[auto] h-60 bg-black bg-opacity-43 rounded-lg' />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' width="40" height="40" viewBox="0 0 93 93" fill="none">
                  <path d="M46.4404 0C20.9118 0 0.192871 20.7189 0.192871 46.2475C0.192871 71.7762 20.9118 92.4951 46.4404 92.4951C71.969 92.4951 92.6879 71.7762 92.6879 46.2475C92.6879 20.7189 71.969 0 46.4404 0ZM37.1909 67.0589V25.4361L64.9394 46.2475L37.1909 67.0589Z" fill="#FF2626" />
                </svg>
              </div>
            </div>
            <div className='relative'>
              <img src={image10} className='w-[auto] h-60 bg-black bg-opacity-43 rounded-lg' />
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
  );
};

export default CardContainer;
