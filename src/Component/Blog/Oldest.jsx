import Event01 from "../../assets/Image/event01.png";
import Event02 from "../../assets/Image/event02.png";
import Event03 from "../../assets/Image/event03.png";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


const events = [
  { id: 'Image1', image: Event01, date: 'September 12, 2023', detail: 'Coachfrika Announced Partnership with Ogun SUBEB' },
  { id: 'Image2', image: Event02, date: 'July 25, 2023', detail: 'Coachfrika Partnered Agape Life Project' },
  { id: 'Image3', image: Event03, date: 'January 9, 2024', detail: 'Coachfrika Now covers All Major Cities in Nigeria'},
    { id: 'Image1', image: Event01, date: 'September 12, 2023', detail: 'Coachfrika Announced Partnership with Ogun SUBEB' },
  { id: 'Image2', image: Event02, date: 'July 25, 2023', detail: 'Coachfrika Partnered Agape Life Project' },
  { id: 'Image3', image: Event03, date: 'January 9, 2024', detail: 'Coachfrika Now covers All Major Cities in Nigeria'},
    { id: 'Image1', image: Event01, date: 'September 12, 2023', detail: 'Coachfrika Announced Partnership with Ogun SUBEB' },
  { id: 'Image2', image: Event02, date: 'July 25, 2023', detail: 'Coachfrika Partnered Agape Life Project' },
  { id: 'Image3', image: Event03, date: 'January 9, 2024', detail: 'Coachfrika Now covers All Major Cities in Nigeria'},
    { id: 'Image1', image: Event01, date: 'September 12, 2023', detail: 'Coachfrika Announced Partnership with Ogun SUBEB' },
  { id: 'Image2', image: Event02, date: 'July 25, 2023', detail: 'Coachfrika Partnered Agape Life Project' },
  { id: 'Image3', image: Event03, date: 'January 9, 2024', detail: 'Coachfrika Now covers All Major Cities in Nigeria'},
];

function Oldest() {
  const images = [Event01, Event02, Event03, ];
  const numberList = [...Array(images.length).keys()];
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="flex flex-col text-center py-8 gap-4">
        <h1 className="font-bold text-3xl">Browse Our Past Events</h1>
        <div className="text-sm">
          An unforgettable experience awaits. Read our blog for details and get ready to be part <br /> of something extraordinary
        </div>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-2 px-20 max-md:10 max-sm:grid-cols-1 justify-between gap-20 w-full font-['Causten'] mb-10">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      <div className='flex flex-row justify-center  text-xl items-center gap-5 py-10'>
            <div className='flex flex-row justify-center items-center gap-4'><FaArrowLeft /><span>Prev</span></div>
            <ul className='flex flex-row justify-center max-sm:justify-around items-center gap-1 list-none max-md:hidden'>
              <li className='text-white text-[16px] bg-[#BEF200] rounded-full p-1  px-2 hover:cursor-default'>1</li>
              {numberList.map((number, index) => (
                <li key={index} className='text-black text-[10px] bg-white rounded-full p-4 hover:cursor-default'>{number + 2}</li>
              ))}
            </ul>
            <div className='flex flex-row justify-center items-center gap-4'><span>Next</span><FaArrowRight /></div>
          </div>

    </div>
  );
}

function EventCard({ id, image, date, detail}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <img src={image} alt={`Image ${id}`} id={id} />
        
          <div>{date}</div>
          <div className="text-2xl font-bold text-[#040404] w-full">
            {detail}
          </div>
          <div className="text-left font-semibold">Read More...</div>
        
      
    </div>
  );
}

export default Oldest;
