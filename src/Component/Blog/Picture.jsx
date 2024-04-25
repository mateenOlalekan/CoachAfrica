
import Play from '../../assets/Image/vector.svg';
import BackgroundImage1 from '../../assets/Image/coach01.png'; // Replace with your image paths
import BackgroundImage2 from '../../assets/Image/coach01.png';
import BackgroundImage3 from '../../assets/Image/coach01.png';
import BlogHead from '../Coach/Coach';

function Picture() {
  const cardData = Array.from({ length: 12 }, (_, index) => index + 1);

  // Array of background images
  const backgroundImages = [BackgroundImage1, BackgroundImage2, BackgroundImage3];

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="py-6 text-xl">
          Picture Speaks Louder than Text
        </div>
        <div className="grid grid-cols-4 gap-8 py-4">
          {cardData.map((cardNumber, index) => (
            <div
              key={cardNumber}
              className="bg-gray-200 px-20 py-16 rounded-xl flex flex-col items-center justify-center"
              style={{ backgroundImage: `url(${backgroundImages[index % backgroundImages.length]})`,objectFit:"cover" }}
            >
              <img src={Play} alt={`Play icon for card ${cardNumber}`} />
            </div>
          ))}
        </div>
      </div>
      <BlogHead/>
    </>
  );
}

export default Picture;
